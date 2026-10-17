import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./preview.css";

export function SkeletonPreview() {
  return (
    <div className="sites-skeleton-shell" aria-live="polite" aria-busy="true">
      <div className="sites-skeleton-search" aria-hidden="true">
        <div className="sites-skeleton-search-placeholder">search</div>
      </div>

      <div className="sites-skeleton-content" aria-hidden="true">
        <div className="sites-skeleton-hero">
          <Skeleton baseColor="#eceae7" highlightColor="#f9f8f6" duration={2.8} width="48%" height={30} />
          <Skeleton baseColor="#eceae7" highlightColor="#f9f8f6" duration={2.8} width="72%" height={16} />
          <Skeleton baseColor="#eceae7" highlightColor="#f9f8f6" duration={2.8} width="60%" height={16} />
        </div>

        <div className="sites-skeleton-status" role="status" aria-label="Loading site preview">
          <Skeleton baseColor="#eceae7" highlightColor="#f9f8f6" duration={2.8} width="40%" height={18} />
        </div>
      </div>
    </div>
  );
}
