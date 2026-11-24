import { useEffect, useState } from "react";
import { Check, Copy, X } from "lucide-react";
import {
  BADGE_CLASS,
  BADGE_LABEL,
  COLUMNS,
  type ColumnId,
  type ProcessDef,
} from "@/data/processes";
import type { ColumnSlot } from "@/lib/guide-store";

type Props = {
  process: ProcessDef;
  checked: number[];
  note: string;
  column: ColumnSlot;
  overridden: boolean;
  onClose: () => void;
  onToggle: (index: number) => void;
  onNote: (note: string) => void;
  onMove: (column: ColumnSlot) => void;
  onOverride: (patch: { title?: string; summary?: string }) => void;
  onClearOverride: () => void;
  onUpdateCustom: (patch: Partial<Pick<ProcessDef, "title" | "summary" | "steps" | "badge">>) => void;
  onDelete: () => void;
};

const SLOTS: { id: ColumnSlot; label: string }[] = [
  ...COLUMNS.map((column) => ({ id: column.id as ColumnSlot, label: column.label })),
  { id: "off", label: "Fora" },
];

export function ProcessDrawer(props: Props) {
  const { process, checked, column, overridden, onClose } = props;
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(process.title);
  const [summary, setSummary] = useState(process.summary);
  const [stepsText, setStepsText] = useState(process.steps.map((step) => step.title).join("\n"));
  const [copied, setCopied] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);
  const total = process.steps.length;
  const done = process.steps.filter((_, index) => checked.includes(index)).length;

  useEffect(() => {
    setEditing(false);
    setConfirmDelete(false);
    setTitle(process.title);
    setSummary(process.summary);
    setStepsText(process.steps.map((step) => step.title).join("\n"));
  }, [process]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  async function copy(text: string, key: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
    } catch {
      setCopied("erro");
    }
  }

  function saveEdit() {
    const nextTitle = title.trim();
    const nextSummary = summary.trim();
    if (process.custom) {
      const steps = stepsText
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => ({ title: line, detail: "" }));
      props.onUpdateCustom({
        title: nextTitle || process.title,
        summary: nextSummary || process.summary,
        steps: steps.length ? steps : process.steps,
      });
    } else {
      props.onOverride({ title: nextTitle, summary: nextSummary });
    }
    setEditing(false);
  }

  return (
    <div className="fixed inset-0 z-40 flex justify-end">
      <button
        type="button"
        className="absolute inset-0 bg-ink/30"
        aria-label="Fechar passo a passo"
        onClick={onClose}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="process-title"
        className="relative flex h-full w-full max-w-md flex-col bg-surface shadow-panel motion-reduce:transition-none"
      >
        <div className="flex items-start gap-3 border-b border-line px-4 py-3">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`rounded-full px-2 py-0.5 text-micro font-medium ${BADGE_CLASS[process.badge]}`}>
                {BADGE_LABEL[process.badge]}
              </span>
              <span className="text-micro text-faint">{process.id}</span>
            </div>
            {editing ? (
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="mt-2 h-11 w-full rounded-card border border-line px-3 text-base font-semibold text-ink"
                aria-label="Título"
              />
            ) : (
              <h2 id="process-title" className="mt-1 text-lg font-semibold leading-snug text-ink">
                {process.title}
              </h2>
            )}
          </div>
          <button
            type="button"
            onClick={() => setEditing((value) => !value)}
            className="h-11 rounded-card px-3 text-card font-medium text-muted hover:bg-canvas hover:text-ink"
          >
            {editing ? "Cancelar" : "Editar"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="grid size-11 place-items-center rounded-card text-muted hover:bg-canvas hover:text-ink"
            aria-label="Fechar"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="min-h-0 flex-1 space-y-5 overflow-y-auto px-4 py-4">
          {editing ? (
            <textarea
              value={summary}
              onChange={(event) => setSummary(event.target.value)}
              rows={3}
              aria-label="Resumo"
              className="w-full rounded-card border border-line px-3 py-2 text-sm text-ink"
            />
          ) : (
            <p className="text-sm leading-relaxed text-ink">{process.summary}</p>
          )}

          <p className="text-micro text-faint">
            {process.custom ? "Processo criado na recepção." : "Fonte: manual Processos da Recepção."} {process.section}.
          </p>

          <div>
            <div className="mb-1.5 flex items-center justify-between text-micro text-muted">
              <span>Passo a passo</span>
              <span>
                {done} de {total}
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-canvas">
              <div
                className="h-full rounded-full bg-done transition-[width] duration-200 motion-reduce:transition-none"
                style={{ width: total ? `${(done / total) * 100}%` : "0%" }}
              />
            </div>
          </div>

          {editing && process.custom ? (
            <label className="block text-sm text-muted">
              Um passo por linha
              <textarea
                value={stepsText}
                onChange={(event) => setStepsText(event.target.value)}
                rows={6}
                className="mt-1 w-full rounded-card border border-line px-3 py-2 text-sm text-ink"
              />
            </label>
          ) : (
            <ol className="space-y-1">
              {process.steps.map((step, index) => {
                const on = checked.includes(index);
                return (
                  <li key={`${process.id}-${index}`}>
                    <button
                      type="button"
                      onClick={() => props.onToggle(index)}
                      className="flex w-full gap-3 rounded-card px-1 py-2 text-left hover:bg-canvas"
                    >
                      <span
                        className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border text-primary-ink transition-colors ${
                          on ? "border-done bg-done" : "border-line-strong bg-surface"
                        }`}
                        aria-hidden
                      >
                        {on ? <Check className="size-3" /> : <span className="text-micro text-faint">{index + 1}</span>}
                      </span>
                      <span>
                        <span className={`block text-sm font-medium ${on ? "text-muted line-through" : "text-ink"}`}>
                          {step.title}
                        </span>
                        {step.detail ? <span className="mt-0.5 block text-card leading-relaxed text-muted">{step.detail}</span> : null}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          )}

          {done === total && total > 0 ? (
            <p className="rounded-card bg-canvas px-3 py-2 text-card text-ink">
              Passo a passo conferido. Se isto já é rotina, deixe o cartão em Já sei.
            </p>
          ) : null}

          {process.warnings?.length ? (
            <div className="rounded-card border border-warn-line bg-warn-bg px-3 py-2">
              <p className="text-micro font-semibold text-warn-ink">Atenção</p>
              <ul className="mt-1 space-y-1">
                {process.warnings.map((warning) => (
                  <li key={warning} className="text-card leading-relaxed text-warn-ink">
                    {warning}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {process.scripts?.map((script) => (
            <div key={script.label} className="rounded-card border border-line bg-canvas">
              <div className="flex items-center justify-between gap-2 px-3 py-2">
                <p className="text-micro font-semibold text-ink">{script.label}</p>
                <button
                  type="button"
                  onClick={() => copy(script.text, script.label)}
                  className="inline-flex h-8 items-center gap-1 rounded-card bg-surface px-2 text-micro font-medium text-primary shadow-card"
                >
                  <Copy className="size-3" />
                  {copied === script.label ? "Copiado" : "Copiar"}
                </button>
              </div>
              <pre className="max-h-48 overflow-auto px-3 pb-3 font-sans text-card leading-relaxed whitespace-pre-wrap text-ink">
                {script.text}
              </pre>
            </div>
          ))}

          {copied === "erro" ? <p className="text-micro text-danger">Não foi possível copiar. Selecione o texto.</p> : null}

          {process.contacts?.length ? (
            <ul className="space-y-1">
              {process.contacts.map((contact) => (
                <li key={contact.label} className="flex flex-col rounded-card border border-line px-3 py-2">
                  <span className="text-micro text-faint">{contact.label}</span>
                  <span className="text-card text-ink">{contact.value}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <div>
            <p className="mb-2 text-micro font-semibold text-muted">Mover no quadro</p>
            <div className="flex flex-wrap gap-1 rounded-card bg-canvas p-1">
              {SLOTS.map((slot) => (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() => props.onMove(slot.id)}
                  className={`h-9 rounded-md px-2.5 text-micro font-medium ${
                    column === slot.id ? "bg-surface text-ink shadow-pop" : "text-muted"
                  }`}
                >
                  {slot.label}
                </button>
              ))}
            </div>
            <p className="mt-1 text-micro text-faint">No celular, use estes botões. No computador, o cartão também arrasta.</p>
          </div>

          <label className="block">
            <span className="text-micro font-semibold text-muted">Nota da recepção</span>
            <textarea
              value={props.note}
              onChange={(event) => props.onNote(event.target.value)}
              rows={3}
              placeholder="Um lembrete só neste navegador."
              className="mt-1 w-full rounded-card border border-line px-3 py-2 text-sm text-ink placeholder:text-faint"
            />
          </label>

          {editing ? (
            <button
              type="button"
              onClick={saveEdit}
              className="h-11 w-full rounded-card bg-primary text-sm font-medium text-primary-ink"
            >
              Salvar ajuste
            </button>
          ) : null}

          {!process.custom && overridden ? (
            <button type="button" onClick={props.onClearOverride} className="text-card font-medium text-primary">
              Voltar ao texto do manual
            </button>
          ) : null}

          {process.custom ? (
            confirmDelete ? (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={props.onDelete}
                  className="h-11 flex-1 rounded-card bg-danger text-sm font-medium text-primary-ink"
                >
                  Excluir
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmDelete(false)}
                  className="h-11 flex-1 rounded-card border border-line text-sm font-medium text-ink"
                >
                  Manter
                </button>
              </div>
            ) : (
              <button type="button" onClick={() => setConfirmDelete(true)} className="text-card font-medium text-danger">
                Excluir este processo
              </button>
            )
          ) : null}
        </div>
      </aside>
    </div>
  );
}

export type { ColumnId };
