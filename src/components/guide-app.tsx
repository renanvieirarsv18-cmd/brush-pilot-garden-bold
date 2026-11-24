import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronRight, Plus, Search } from "lucide-react";
import {
  AVATAR_CLASS,
  BADGE_CLASS,
  BADGE_LABEL,
  COLUMNS,
  PROCESSES,
  SECTION_BLURB,
  SECTIONS,
  type BadgeKey,
  type ColumnId,
  type ProcessDef,
} from "@/data/processes";
import { applyOverride, useGuide, type ColumnSlot } from "@/lib/guide-store";
import { ProcessDrawer } from "@/components/process-drawer";

type View = "board" | "list" | "trail";

const VIEWS: { id: View; label: string }[] = [
  { id: "board", label: "Quadro" },
  { id: "list", label: "Lista" },
  { id: "trail", label: "Trilha" },
];

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function Priority({ level }: { level: 1 | 2 | 3 }) {
  return (
    <span className="inline-flex items-end gap-0.5" aria-label={`Prioridade ${level} de 3`}>
      {[1, 2, 3].map((bar) => (
        <span
          key={bar}
          className={cn("w-0.5 rounded-full", bar === 1 ? "h-1" : bar === 2 ? "h-1.5" : "h-2", bar <= level ? "bg-doing" : "bg-line-strong")}
        />
      ))}
    </span>
  );
}

function ProcessCard({
  process,
  done,
  total,
  dragging,
  onOpen,
  onDragStart,
  onDragEnd,
  onDropOn,
}: {
  process: ProcessDef;
  done: number;
  total: number;
  dragging: boolean;
  onOpen: () => void;
  onDragStart: () => void;
  onDragEnd: () => void;
  onDropOn: () => void;
}) {
  const suppress = useRef(false);
  return (
    <article
      role="button"
      tabIndex={0}
      draggable
      data-process={process.id}
      onDragStart={(event) => {
        suppress.current = true;
        event.dataTransfer.setData("text/plain", process.id);
        event.dataTransfer.effectAllowed = "move";
        onDragStart();
      }}
      onDragEnd={() => {
        onDragEnd();
        window.setTimeout(() => {
          suppress.current = false;
        }, 40);
      }}
      onDragOver={(event) => {
        event.preventDefault();
        event.stopPropagation();
      }}
      onDrop={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onDropOn();
      }}
      onClick={() => {
        if (suppress.current) return;
        onOpen();
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen();
        }
      }}
      className={cn(
        "cursor-grab rounded-card border border-line bg-surface px-2.5 py-2 shadow-card transition-[transform,box-shadow,opacity] duration-150",
        "hover:-translate-y-px hover:shadow-pop active:cursor-grabbing",
        dragging && "opacity-40",
      )}
    >
      <h3 className="text-card font-medium text-ink">{process.title}</h3>
      <div className="mt-2 flex items-center gap-1.5">
        <span className={cn("rounded-full px-1.5 py-0.5 text-micro font-medium", BADGE_CLASS[process.badge])}>
          {BADGE_LABEL[process.badge]}
        </span>
        <Priority level={process.priority} />
        <span className="ml-auto text-micro text-faint">{process.id}</span>
        <span className={cn("size-5 shrink-0 rounded-full", AVATAR_CLASS[process.avatar])} aria-hidden />
      </div>
      {done > 0 ? (
        <span className="mt-2 block h-1 overflow-hidden rounded-full bg-canvas">
          <span className="block h-full bg-done" style={{ width: `${total ? (done / total) * 100 : 0}%` }} />
        </span>
      ) : null}
    </article>
  );
}

export function GuideApp() {
  const columnOf = useGuide((state) => state.columnOf);
  const order = useGuide((state) => state.order);
  const checked = useGuide((state) => state.checked);
  const notes = useGuide((state) => state.notes);
  const overrides = useGuide((state) => state.overrides);
  const custom = useGuide((state) => state.custom);
  const move = useGuide((state) => state.move);
  const toggleStep = useGuide((state) => state.toggleStep);
  const setNote = useGuide((state) => state.setNote);
  const setOverride = useGuide((state) => state.setOverride);
  const clearOverride = useGuide((state) => state.clearOverride);
  const addCustom = useGuide((state) => state.addCustom);
  const updateCustom = useGuide((state) => state.updateCustom);
  const removeCustom = useGuide((state) => state.removeCustom);
  const resetAll = useGuide((state) => state.resetAll);

  const [view, setView] = useState<View>("board");
  const [openId, setOpenId] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [addColumn, setAddColumn] = useState<ColumnId | null>(null);
  const [dragId, setDragId] = useState<string | null>(null);
  const [overColumn, setOverColumn] = useState<ColumnId | null>(null);
  const [sectionFilter, setSectionFilter] = useState("Todas");
  const [confirmReset, setConfirmReset] = useState(false);

  useEffect(() => {
    useGuide.getState().hydrate();
  }, []);

  const catalog = useMemo(
    () => [...PROCESSES, ...custom].map((process) => applyOverride(process, overrides)),
    [custom, overrides],
  );
  const byId = useMemo(() => {
    const map = new Map<string, ProcessDef>();
    for (const process of catalog) map.set(process.id, process);
    return map;
  }, [catalog]);

  const open = openId ? byId.get(openId) ?? null : null;

  function idsIn(column: ColumnId) {
    return order[column].filter((id) => byId.has(id) && columnOf[id] === column);
  }

  function openProcess(id: string) {
    setSearchOpen(false);
    setAddColumn(null);
    setOpenId(id);
  }

  const needle = query.trim().toLowerCase();
  const results = needle
    ? catalog.filter((process) => {
        const blob = [
          process.title,
          process.summary,
          process.id,
          process.section,
          process.steps.map((step) => `${step.title} ${step.detail}`).join(" "),
          process.scripts?.map((script) => script.text).join(" ") ?? "",
          process.contacts?.map((contact) => contact.value).join(" ") ?? "",
        ]
          .join(" ")
          .toLowerCase();
        return needle.split(/\s+/).every((word) => blob.includes(word));
      })
    : catalog;

  const sections = [...SECTIONS, ...(custom.length ? ["Da recepção"] : [])];

  return (
    <div className="flex h-dvh flex-col bg-canvas px-3 py-3 sm:px-10 sm:py-8">
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-panel border border-line bg-surface shadow-panel">
        <header className="flex flex-wrap items-center gap-3 px-4 py-3">
          <h1 className="flex items-center gap-1.5 text-sm">
            <span className="font-medium text-muted">CCPL Abade</span>
            <ChevronRight className="size-3.5 text-faint" aria-hidden />
            <span className="font-semibold text-ink">Recepção</span>
          </h1>
          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <div className="flex rounded-lg bg-canvas p-0.5" role="tablist" aria-label="Visualização">
              {VIEWS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={view === item.id}
                  onClick={() => setView(item.id)}
                  className={cn(
                    "h-11 rounded-md px-3 text-card font-medium md:h-8",
                    view === item.id ? "bg-surface text-ink shadow-pop" : "text-muted",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="hidden -space-x-2 sm:flex" aria-hidden>
              <span className="size-7 rounded-full bg-avatar-orange ring-2 ring-surface" />
              <span className="size-7 rounded-full bg-avatar-teal ring-2 ring-surface" />
              <span className="size-7 rounded-full bg-avatar-lavender ring-2 ring-surface" />
            </div>
            <button
              type="button"
              onClick={() => {
                setSearchOpen(true);
                setQuery("");
              }}
              className="h-11 rounded-lg bg-primary px-3.5 text-card font-medium text-primary-ink shadow-card transition-transform duration-150 active:scale-[0.96] md:h-8"
            >
              Buscar
            </button>
          </div>
        </header>

        {view === "board" ? (
          <div className="flex min-h-0 flex-1 gap-4 overflow-x-auto px-4 pb-4">
            {COLUMNS.map((column) => {
              const ids = idsIn(column.id);
              return (
                <section
                  key={column.id}
                  data-column={column.id}
                  onDragOver={(event) => {
                    event.preventDefault();
                    setOverColumn(column.id);
                  }}
                  onDragLeave={() => setOverColumn((current) => (current === column.id ? null : current))}
                  onDrop={(event) => {
                    event.preventDefault();
                    const id = dragId || event.dataTransfer.getData("text/plain");
                    if (id) move(id, column.id);
                    setDragId(null);
                    setOverColumn(null);
                  }}
                  className={cn(
                    "flex h-full w-72 shrink-0 flex-col rounded-card md:w-auto md:min-w-0 md:flex-1",
                    overColumn === column.id && "bg-canvas",
                  )}
                >
                  <div className="mb-2.5 flex items-center gap-2 px-0.5">
                    <span className={cn("size-2 rounded-full", column.dot)} />
                    <h2 className="text-card font-medium text-ink">{column.label}</h2>
                    <span className="text-card text-faint">{ids.length}</span>
                    <button
                      type="button"
                      onClick={() => setAddColumn(column.id)}
                      className="ml-auto grid size-11 place-items-center rounded-md text-faint hover:bg-canvas hover:text-ink md:size-7"
                      aria-label={`Adicionar processo em ${column.label}`}
                    >
                      <Plus className="size-3.5" />
                    </button>
                  </div>
                  <div className="flex min-h-0 flex-1 flex-col gap-2.5 overflow-y-auto">
                    {ids.map((id) => {
                      const process = byId.get(id);
                      if (!process) return null;
                      const marks = checked[id] ?? [];
                      return (
                        <ProcessCard
                          key={id}
                          process={process}
                          done={marks.length}
                          total={process.steps.length}
                          dragging={dragId === id}
                          onOpen={() => openProcess(id)}
                          onDragStart={() => setDragId(id)}
                          onDragEnd={() => {
                            setDragId(null);
                            setOverColumn(null);
                          }}
                          onDropOn={() => {
                            const source = dragId;
                            if (source && source !== id) move(source, column.id, id);
                            setDragId(null);
                            setOverColumn(null);
                          }}
                        />
                      );
                    })}
                    {ids.length === 0 ? (
                      <p className="rounded-card border border-dashed border-line px-3 py-6 text-center text-card text-faint">
                        Arraste um processo para cá
                      </p>
                    ) : null}
                  </div>
                </section>
              );
            })}
          </div>
        ) : null}

        {view === "list" ? (
          <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-4">
            <p className="mb-3 text-card text-muted">
              {catalog.length} processos do manual da recepção. Toque para abrir o passo a passo.
            </p>
            <div className="mb-3 flex gap-1.5 overflow-x-auto pb-1">
              {["Todas", ...sections].map((section) => (
                <button
                  key={section}
                  type="button"
                  onClick={() => setSectionFilter(section)}
                  className={cn(
                    "h-9 shrink-0 rounded-full px-3 text-micro font-medium",
                    sectionFilter === section ? "bg-ink text-primary-ink" : "bg-canvas text-muted",
                  )}
                >
                  {section}
                </button>
              ))}
            </div>
            <div className="space-y-2">
              {catalog
                .filter((process) => sectionFilter === "Todas" || process.section === sectionFilter)
                .map((process) => {
                  const slot = columnOf[process.id] ?? "off";
                  const marks = checked[process.id]?.length ?? 0;
                  return (
                    <div key={process.id} className="flex items-center gap-2 rounded-card border border-line px-3 py-2 shadow-card">
                      <button type="button" onClick={() => openProcess(process.id)} className="min-w-0 flex-1 text-left">
                        <span className="flex items-center gap-2">
                          <span className={cn("rounded-full px-1.5 py-0.5 text-micro font-medium", BADGE_CLASS[process.badge])}>
                            {BADGE_LABEL[process.badge]}
                          </span>
                          <span className="text-micro text-faint">{process.id}</span>
                          {marks > 0 ? <span className="text-micro text-done">{marks}/{process.steps.length}</span> : null}
                        </span>
                        <span className="mt-1 block text-card font-medium text-ink">{process.title}</span>
                        <span className="mt-0.5 block truncate text-micro text-muted">{process.summary}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => move(process.id, slot === "off" ? "learn" : "off")}
                        className="h-9 shrink-0 rounded-md px-2 text-micro font-medium text-primary hover:bg-canvas"
                      >
                        {slot === "off" ? "Fixar" : "Tirar"}
                      </button>
                    </div>
                  );
                })}
            </div>
            <div className="mt-6">
              {confirmReset ? (
                <div className="flex flex-wrap gap-2">
                  <button type="button" onClick={() => { resetAll(); setConfirmReset(false); }} className="h-10 rounded-card bg-danger px-3 text-card font-medium text-primary-ink">
                    Confirmar restauração
                  </button>
                  <button type="button" onClick={() => setConfirmReset(false)} className="h-10 rounded-card border border-line px-3 text-card font-medium text-ink">
                    Cancelar
                  </button>
                </div>
              ) : (
                <button type="button" onClick={() => setConfirmReset(true)} className="text-micro font-medium text-muted">
                  Restaurar quadro e progresso
                </button>
              )}
            </div>
          </div>
        ) : null}

        {view === "trail" ? (
          <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-6">
            <p className="mb-5 max-w-xl text-card leading-relaxed text-muted">
              Trilha de integração do Jardim Flórida. Comece pela matrícula e avance no seu ritmo. Cada estação abre o passo a passo.
            </p>
            <ol className="space-y-8">
              {sections.map((section, index) => {
                const items = catalog.filter((process) => process.section === section);
                if (!items.length) return null;
                const tone = BADGE_CLASS[items[0].badge];
                return (
                  <li key={section} className="rise" style={{ animationDelay: `${index * 45}ms` }}>
                    <div className="mb-3 flex items-start gap-3">
                      <span className={cn("grid size-7 shrink-0 place-items-center rounded-full text-micro font-semibold", tone)}>
                        {index + 1}
                      </span>
                      <div>
                        <h2 className="text-sm font-semibold text-ink">{section}</h2>
                        <p className="text-card text-muted">{SECTION_BLURB[section]}</p>
                      </div>
                    </div>
                    <div className="grid gap-2 pl-10 sm:grid-cols-2">
                      {items.map((process) => {
                        const marks = checked[process.id]?.length ?? 0;
                        const complete = marks > 0 && marks === process.steps.length;
                        return (
                          <button
                            key={process.id}
                            type="button"
                            onClick={() => openProcess(process.id)}
                            className="rounded-card border border-line bg-surface px-3 py-2.5 text-left shadow-card transition-transform duration-150 hover:-translate-y-px hover:shadow-pop"
                          >
                            <span className="flex items-center gap-2">
                              <span className={cn("size-2 rounded-full", complete ? "bg-done" : AVATAR_CLASS[process.avatar])} />
                              <span className="text-card font-medium text-ink">{process.title}</span>
                            </span>
                            <span className="mt-1 block text-micro text-muted">
                              {process.steps.length} passos
                              {marks > 0 ? ` · ${marks} conferidos` : ""}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        ) : null}
      </div>

      {open ? (
        <ProcessDrawer
          process={open}
          checked={checked[open.id] ?? []}
          note={notes[open.id] ?? ""}
          column={columnOf[open.id] ?? "off"}
          overridden={Boolean(overrides[open.id])}
          onClose={() => setOpenId(null)}
          onToggle={(index) => toggleStep(open.id, index)}
          onNote={(note) => setNote(open.id, note)}
          onMove={(slot: ColumnSlot) => move(open.id, slot)}
          onOverride={(patch) => setOverride(open.id, patch)}
          onClearOverride={() => clearOverride(open.id)}
          onUpdateCustom={(patch) => updateCustom(open.id, patch)}
          onDelete={() => {
            removeCustom(open.id);
            setOpenId(null);
          }}
        />
      ) : null}

      {searchOpen ? (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-ink/30 px-4 pt-16" onMouseDown={() => setSearchOpen(false)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Buscar processo"
            className="w-full max-w-lg overflow-hidden rounded-panel border border-line bg-surface shadow-panel"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-2 border-b border-line px-3">
              <Search className="size-4 text-faint" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") setSearchOpen(false);
                  if (event.key === "Enter" && results[0]) openProcess(results[0].id);
                }}
                placeholder="Processo, e-mail ou passo"
                className="h-12 w-full bg-transparent text-base text-ink outline-none placeholder:text-faint"
              />
            </div>
            <ul className="max-h-80 overflow-y-auto py-1">
              {results.slice(0, 12).map((process) => (
                <li key={process.id}>
                  <button
                    type="button"
                    onClick={() => openProcess(process.id)}
                    className="flex w-full flex-col px-3 py-2 text-left hover:bg-canvas"
                  >
                    <span className="text-card font-medium text-ink">{process.title}</span>
                    <span className="text-micro text-faint">
                      {process.section} · {process.id}
                    </span>
                  </button>
                </li>
              ))}
              {results.length === 0 ? <li className="px-3 py-6 text-center text-card text-muted">Nada com esse termo.</li> : null}
            </ul>
          </div>
        </div>
      ) : null}

      {addColumn ? <AddDialog column={addColumn} onClose={() => setAddColumn(null)} onCreate={(id) => { setAddColumn(null); openProcess(id); }} addCustom={addCustom} /> : null}
    </div>
  );
}

function AddDialog({
  column,
  onClose,
  onCreate,
  addCustom,
}: {
  column: ColumnId;
  onClose: () => void;
  onCreate: (id: string) => void;
  addCustom: (input: {
    title: string;
    summary: string;
    steps: { title: string; detail: string }[];
    badge: BadgeKey;
    column: ColumnId;
  }) => string;
}) {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [steps, setSteps] = useState("");
  const [badge, setBadge] = useState<BadgeKey>("unidade");
  const [error, setError] = useState("");
  const label = COLUMNS.find((item) => item.id === column)?.label ?? "";

  function submit() {
    if (!title.trim()) {
      setError("Dê um nome ao processo.");
      return;
    }
    const lines = steps
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => ({ title: line, detail: "" }));
    const id = addCustom({
      title,
      summary,
      badge,
      column,
      steps: lines.length ? lines : [{ title: summary.trim() || "Descrever o passo", detail: "" }],
    });
    onCreate(id);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-ink/30 px-4 pt-16" onMouseDown={onClose}>
      <form
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-title"
        className="w-full max-w-md rounded-panel border border-line bg-surface p-4 shadow-panel"
        onMouseDown={(event) => event.stopPropagation()}
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
      >
        <h2 id="add-title" className="text-base font-semibold text-ink">
          Novo processo · {label}
        </h2>
        <label className="mt-3 block text-micro font-medium text-muted">
          Título
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="mt-1 h-11 w-full rounded-card border border-line px-3 text-base text-ink"
          />
        </label>
        <label className="mt-3 block text-micro font-medium text-muted">
          Resumo
          <textarea
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
            rows={2}
            className="mt-1 w-full rounded-card border border-line px-3 py-2 text-sm text-ink"
          />
        </label>
        <label className="mt-3 block text-micro font-medium text-muted">
          Passos, um por linha
          <textarea
            value={steps}
            onChange={(event) => setSteps(event.target.value)}
            rows={4}
            className="mt-1 w-full rounded-card border border-line px-3 py-2 text-sm text-ink"
          />
        </label>
        <label className="mt-3 block text-micro font-medium text-muted">
          Selo
          <select
            value={badge}
            onChange={(event) => setBadge(event.target.value as BadgeKey)}
            className="mt-1 h-11 w-full rounded-card border border-line bg-surface px-3 text-sm text-ink"
          >
            {(Object.keys(BADGE_LABEL) as BadgeKey[]).map((key) => (
              <option key={key} value={key}>
                {BADGE_LABEL[key]}
              </option>
            ))}
          </select>
        </label>
        {error ? <p className="mt-2 text-card text-danger">{error}</p> : null}
        <div className="mt-4 flex gap-2">
          <button type="submit" className="h-11 flex-1 rounded-card bg-primary text-sm font-medium text-primary-ink">
            Adicionar
          </button>
          <button type="button" onClick={onClose} className="h-11 flex-1 rounded-card border border-line text-sm font-medium text-ink">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
