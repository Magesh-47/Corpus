import { Box, CircleDashed, Layers3, RotateCcw, ScanLine, Search, type LucideIcon } from "lucide-react";
import { Accordion } from "../../ui/Accordion";
import { format } from "../../../i18n/types";
import { HelpSection, type HelpContext } from "./shared";

/**
 * The same icons, in the same order, as the toolbar in OrganViewer — so a
 * learner can match what they read here to what they see there.
 */
const TOOL_ICONS: Record<keyof HelpContext["help"]["viewer"]["tools"], LucideIcon> = {
  rotate: RotateCcw,
  zoom: Search,
  isolate: CircleDashed,
  section: ScanLine,
  layers: Layers3,
  compare: Box,
  reset: RotateCcw,
};

/** Physical keys handled by the viewer's keydown listener (viewer.ts). */
const KEYS: Partial<Record<keyof HelpContext["help"]["viewer"]["controls"], string[]>> = {
  rotate: ["←", "→"],
  zoom: ["+", "−"],
  close: ["Esc"],
};

const INPUTS = ["pointer", "touch", "keyboard"] as const;

export function ViewerGuide({ ctx }: { ctx: HelpContext }) {
  const copy = ctx.help.viewer;
  const labels = { ...ctx.ui.tools, autoRotate: ctx.ui.viewer.autoRotate };

  return (
    <HelpSection ctx={ctx} sectionKey="viewer">
      <p className="ui-lede help-intro" data-reveal>
        {copy.intro}
      </p>

      <div className="help-sub help-controls" data-reveal>
        <h3 className="ui-h3 help-sub__title">{copy.controlsLabel}</h3>
        {/* Visual column heads only; each cell carries its own <dt> label. */}
        <div className="help-controls__head" aria-hidden>
          <span>{copy.columns.action}</span>
          <span className="help-controls__head-inputs">
            {INPUTS.map((input) => (
              <span key={input}>{copy.columns[input]}</span>
            ))}
          </span>
        </div>
        <ul className="help-controls__rows">
          {Object.entries(copy.controls).map(([key, control]) => {
            const keys = KEYS[key as keyof typeof copy.controls];
            return (
              <li key={key} className="help-controls__row">
                <h4 className="help-controls__action">{control.action}</h4>
                <dl className="help-controls__inputs">
                  {INPUTS.map((input) => (
                    <div key={input} className={`help-controls__cell help-controls__cell--${input}`}>
                      <dt>{copy.columns[input]}</dt>
                      <dd>
                        {input === "keyboard" && keys && (
                          <span className="help-keys" dir="ltr">
                            {keys.map((symbol) => (
                              <kbd key={symbol} aria-hidden>
                                {symbol}
                              </kbd>
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
        <h3 className="ui-h3 help-sub__title">{copy.toolsTitle}</h3>
        <p className="ui-body help-sub__intro">{copy.toolsIntro}</p>
        <dl className="help-tools">
          {Object.entries(copy.tools).map(([key, description]) => {
            const id = key as keyof typeof copy.tools;
            const Icon = TOOL_ICONS[id];
            return (
              <div key={id} className="help-tools__item">
                <dt>
                  <span className="help-tools__icon" aria-hidden>
                    <Icon size={18} strokeWidth={1.6} />
                  </span>
                  {ctx.ui.tools[id]}
                </dt>
                <dd>{format(description, labels)}</dd>
              </div>
            );
          })}
        </dl>
      </div>

      <div className="help-sub" data-reveal>
        <h3 className="ui-h3 help-sub__title">{copy.troubleshootingTitle}</h3>
        <Accordion
          block="help-accordion"
          items={Object.entries(copy.troubleshooting).map(([key, item]) => ({
            id: `viewer-${key}`,
            summary: item.q,
            children: <p>{format(item.a, labels)}</p>,
          }))}
        />
      </div>
    </HelpSection>
  );
}
