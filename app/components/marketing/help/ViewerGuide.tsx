import { Box, CircleDashed, Layers3, RotateCcw, ScanLine, Search, type LucideIcon } from "lucide-react";
import { format } from "../../../i18n/types";
import { GuideSection, type HelpContext } from "./shared";

type ViewerCopy = HelpContext["help"]["viewer"];

/**
 * The same icons, in the same order, as the toolbar in OrganViewer — so a
 * learner can match what they read here to what they see there.
 */
const TOOL_ICONS: Record<keyof ViewerCopy["tools"], LucideIcon> = {
  rotate: RotateCcw,
  zoom: Search,
  isolate: CircleDashed,
  section: ScanLine,
  layers: Layers3,
  compare: Box,
  reset: RotateCcw,
};

/** Physical keys handled by the viewer's keydown listener (viewer.ts). */
const KEYS: Partial<Record<keyof ViewerCopy["controls"], string[]>> = {
  rotate: ["←", "→"],
  zoom: ["+", "−"],
  close: ["Esc"],
};

const INPUTS = ["pointer", "touch", "keyboard"] as const;

export function ViewerGuide({ ctx }: { ctx: HelpContext }) {
  const copy = ctx.help.viewer;
  const labels = { ...ctx.ui.tools, autoRotate: ctx.ui.viewer.autoRotate };

  return (
    <GuideSection ctx={ctx} guide="viewer" title={copy.title}>
      <p className="ui-lede help-intro" data-reveal>
        {copy.intro}
      </p>

      <div className="help-controls" data-reveal>
        {/* Visual column heads only; each cell carries its own <dt> label. */}
        <div className="help-controls__head" aria-hidden>
          <span>{copy.columns.action}</span>
          {INPUTS.map((input) => (
            <span key={input}>{copy.columns[input]}</span>
          ))}
        </div>
        <ul className="help-controls__rows">
          {Object.entries(copy.controls).map(([key, control]) => {
            const keys = KEYS[key as keyof ViewerCopy["controls"]];
            return (
              <li key={key} className="help-controls__row">
                <h3 className="help-controls__action">{control.action}</h3>
                <dl className="help-controls__inputs">
                  {INPUTS.map((input) => (
                    <div key={input} className="help-controls__cell">
                      <dt>{copy.columns[input]}</dt>
                      <dd>
                        {input === "keyboard" && keys && (
                          <span className="help-keys" dir="ltr" aria-hidden>
                            {keys.map((symbol) => (
                              <kbd key={symbol}>{symbol}</kbd>
                            ))}
                          </span>
                        )}
                        <span>{format(control[input], labels)}</span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </li>
            );
          })}
        </ul>
        <p className="ui-caption help-controls__note">{copy.keyboardNote}</p>
      </div>

      <div className="help-sub" data-reveal>
        <h3 className="help-sub__title">{copy.toolsTitle}</h3>
        <dl className="help-tools">
          {Object.entries(copy.tools).map(([key, description]) => {
            const id = key as keyof ViewerCopy["tools"];
            const Icon = TOOL_ICONS[id];
            return (
              <div key={id} className="help-tools__item">
                <dt>
                  <span className="help-tools__icon" aria-hidden>
                    <Icon size={17} strokeWidth={1.6} />
                  </span>
                  <span className="help-tools__name">{ctx.ui.tools[id]}</span>
                </dt>
                <dd>{format(description, labels)}</dd>
              </div>
            );
          })}
        </dl>
      </div>

      <p className="help-footnote" data-reveal>
        {copy.trouble}
      </p>
    </GuideSection>
  );
}
