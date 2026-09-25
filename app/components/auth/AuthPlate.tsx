import { OrganArt } from "../anatomy/OrganArt";
import { Annotations, type Note } from "../ui/Editorial";
import { format } from "../../i18n/types";
import type { Organ } from "../../i18n/merge";
import type { SiteDictionary } from "../../i18n/site";

export type AuthPageKey = "signIn" | "signUp" | "forgotPassword";

/**
 * The catalogue plate beside each form: one organ from the anatomy library,
 * its name and Latin, and a single leader line naming a real hotspot. The
 * leader line is decorative (aria-hidden); the caption names the structure.
 */
export function AuthPlate({
  page,
  organ,
  hotspotId,
  note,
  copy,
}: {
  page: AuthPageKey;
  organ: Organ;
  hotspotId: string;
  /** Where the structure sits on this painting, as % of the image box. */
  note: Omit<Note, "id" | "label">;
  copy: SiteDictionary["auth"]["plates"];
}) {
  const plate = copy[page];
  const hotspot = organ.hotspots.find((spot) => spot.id === hotspotId)!;
  // In Latin-script locales the label often is the Latin term; show it once.
  const latinDiffers = hotspot.ta.toLowerCase() !== hotspot.label.toLowerCase();
  const structure = (
    <>
      <span>{hotspot.label}</span>
      {latinDiffers && (
        <span className="ui-latin auth-plate__ta" lang="la">
          {hotspot.ta}
        </span>
      )}
    </>
  );

  return (
    <aside className="auth-plate" aria-label={copy.label}>
      <figure className="auth-plate__figure">
        <div className="auth-plate__rail">
          <span>{plate.number}</span>
          <span aria-hidden className="auth-plate__rule" />
          <span>{organ.system}</span>
        </div>

        <div className="auth-plate__stage">
          <div className="auth-plate__art ui-rise" style={{ "--rise-delay": "120ms" } as React.CSSProperties}>
            <OrganArt organ={organ} asset="organ" alt={plate.alt} size={720} loading="eager" />
            <Annotations className="auth-plate__notes" notes={[{ id: hotspot.id, label: structure, ...note }]} />
          </div>
        </div>

        <figcaption className="auth-plate__caption">
          <span className="auth-plate__name">{organ.name}</span>
          <span className="auth-plate__latin ui-latin" lang="la">
            {organ.scientificName}
          </span>
          <span className="auth-plate__meta">
            <span>{plate.view}</span>
            <span className="auth-plate__marked">
              {format(copy.marked, { structure: hotspot.label })}
              {latinDiffers && (
                <>
                  {" "}
                  <span className="ui-latin" lang="la">
                    {hotspot.ta}
                  </span>
                </>
              )}
            </span>
            <span className="auth-plate__note">{copy.note}</span>
          </span>
        </figcaption>
      </figure>
    </aside>
  );
}
