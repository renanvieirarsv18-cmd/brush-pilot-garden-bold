import { create } from "zustand";
import { PROCESSES, type ColumnId, type ProcessDef } from "@/data/processes";

export type ColumnSlot = ColumnId | "off";

export type Override = { title?: string; summary?: string };

type Snapshot = {
  columnOf: Record<string, ColumnSlot>;
  order: Record<ColumnId, string[]>;
  checked: Record<string, number[]>;
  notes: Record<string, string>;
  overrides: Record<string, Override>;
  custom: ProcessDef[];
};

type GuideState = Snapshot & {
  hydrated: boolean;
  hydrate: () => void;
  move: (id: string, column: ColumnSlot, beforeId?: string) => void;
  toggleStep: (id: string, index: number) => void;
  setNote: (id: string, note: string) => void;
  setOverride: (id: string, patch: Override) => void;
  clearOverride: (id: string) => void;
  addCustom: (input: {
    title: string;
    summary: string;
    steps: { title: string; detail: string }[];
    badge: ProcessDef["badge"];
    column: ColumnId;
  }) => string;
  updateCustom: (id: string, patch: Partial<Pick<ProcessDef, "title" | "summary" | "steps" | "badge">>) => void;
  removeCustom: (id: string) => void;
  resetAll: () => void;
};

const KEY = "ccpl-guia-recepcao-v1";

export const COLUMN_IDS: ColumnId[] = ["learn", "practice", "known"];

function initialColumns(): Record<string, ColumnSlot> {
  const map: Record<string, ColumnSlot> = {};
  for (const process of PROCESSES) map[process.id] = process.defaultColumn ?? "off";
  return map;
}

function initialOrder(): Record<ColumnId, string[]> {
  const order: Record<ColumnId, string[]> = { learn: [], practice: [], known: [] };
  for (const process of PROCESSES) {
    if (process.defaultColumn) order[process.defaultColumn].push(process.id);
  }
  return order;
}

function blank(): Snapshot {
  return {
    columnOf: initialColumns(),
    order: initialOrder(),
    checked: {},
    notes: {},
    overrides: {},
    custom: [],
  };
}

function normalize(saved: Partial<Snapshot> | null): Snapshot {
  const base = blank();
  const columnOf = { ...base.columnOf };
  if (saved?.columnOf) {
    for (const [id, column] of Object.entries(saved.columnOf)) {
      if (column === "learn" || column === "practice" || column === "known" || column === "off") {
        columnOf[id] = column;
      }
    }
  }
  for (const process of saved?.custom ?? []) {
    if (process?.id && columnOf[process.id] == null) columnOf[process.id] = "off";
  }
  const order: Record<ColumnId, string[]> = { learn: [], practice: [], known: [] };
  for (const column of COLUMN_IDS) {
    const incoming = saved?.order?.[column] ?? base.order[column];
    order[column] = incoming.filter((id) => columnOf[id] === column);
  }
  for (const [id, column] of Object.entries(columnOf)) {
    if (column !== "off" && !order[column].includes(id)) order[column].push(id);
  }
  return {
    columnOf,
    order,
    checked: saved?.checked ?? {},
    notes: saved?.notes ?? {},
    overrides: saved?.overrides ?? {},
    custom: Array.isArray(saved?.custom) ? saved.custom : [],
  };
}

function persist(state: GuideState) {
  if (!state.hydrated || typeof localStorage === "undefined") return;
  const data: Snapshot = {
    columnOf: state.columnOf,
    order: state.order,
    checked: state.checked,
    notes: state.notes,
    overrides: state.overrides,
    custom: state.custom,
  };
  try {
    localStorage.setItem(KEY, JSON.stringify({ v: 1, ...data }));
  } catch {
    /* private mode or full storage — the board still works this session */
  }
}

function without(order: Record<ColumnId, string[]>, id: string): Record<ColumnId, string[]> {
  return {
    learn: order.learn.filter((item) => item !== id),
    practice: order.practice.filter((item) => item !== id),
    known: order.known.filter((item) => item !== id),
  };
}

export function applyOverride(process: ProcessDef, overrides: Record<string, Override>): ProcessDef {
  const patch = overrides[process.id];
  if (!patch) return process;
  return {
    ...process,
    title: patch.title?.trim() ? patch.title : process.title,
    summary: patch.summary?.trim() ? patch.summary : process.summary,
  };
}

export const useGuide = create<GuideState>((set, get) => ({
  ...blank(),
  hydrated: false,
  hydrate: () => {
    if (get().hydrated) return;
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) {
        set({ hydrated: true });
        return;
      }
      const parsed = JSON.parse(raw) as Partial<Snapshot>;
      set({ ...normalize(parsed), hydrated: true });
    } catch {
      set({ hydrated: true });
    }
  },
  move: (id, column, beforeId) => {
    const state = get();
    const order = without(state.order, id);
    if (column !== "off") {
      const list = order[column];
      const index = beforeId ? list.indexOf(beforeId) : -1;
      if (index >= 0) list.splice(index, 0, id);
      else list.push(id);
    }
    const next = { ...state, columnOf: { ...state.columnOf, [id]: column }, order };
    set(next);
    persist({ ...get(), ...next });
  },
  toggleStep: (id, index) => {
    const current = get().checked[id] ?? [];
    const checked = current.includes(index) ? current.filter((item) => item !== index) : [...current, index].sort((a, b) => a - b);
    const next = { checked: { ...get().checked, [id]: checked } };
    set(next);
    persist(get());
  },
  setNote: (id, note) => {
    set({ notes: { ...get().notes, [id]: note } });
    persist(get());
  },
  setOverride: (id, patch) => {
    set({ overrides: { ...get().overrides, [id]: { ...get().overrides[id], ...patch } } });
    persist(get());
  },
  clearOverride: (id) => {
    const overrides = { ...get().overrides };
    delete overrides[id];
    set({ overrides });
    persist(get());
  },
  addCustom: (input) => {
    const taken = new Set([...PROCESSES, ...get().custom].map((process) => process.id));
    let serial = 101;
    let id = `ABA-X${serial}`;
    while (taken.has(id)) {
      serial += 1;
      id = `ABA-X${serial}`;
    }
    const process: ProcessDef = {
      id,
      title: input.title.trim(),
      summary: input.summary.trim() || "Processo combinado pela recepção.",
      badge: input.badge,
      priority: 2,
      avatar: "lavender",
      section: "Da recepção",
      custom: true,
      steps: input.steps.length ? input.steps : [{ title: "Anotar o passo a passo", detail: "" }],
    };
    const order = without(get().order, id);
    order[input.column].push(id);
    set({
      custom: [...get().custom, process],
      columnOf: { ...get().columnOf, [id]: input.column },
      order,
    });
    persist(get());
    return id;
  },
  updateCustom: (id, patch) => {
    set({
      custom: get().custom.map((process) => (process.id === id ? { ...process, ...patch } : process)),
    });
    persist(get());
  },
  removeCustom: (id) => {
    const columnOf = { ...get().columnOf };
    delete columnOf[id];
    const notes = { ...get().notes };
    delete notes[id];
    const checked = { ...get().checked };
    delete checked[id];
    const overrides = { ...get().overrides };
    delete overrides[id];
    set({
      custom: get().custom.filter((process) => process.id !== id),
      columnOf,
      order: without(get().order, id),
      notes,
      checked,
      overrides,
    });
    persist(get());
  },
  resetAll: () => {
    set({ ...blank(), hydrated: true });
    persist(get());
  },
}));
