import type { pageVisualThemes } from "@/lib/site-data";

type PageVisualTheme = (typeof pageVisualThemes)[keyof typeof pageVisualThemes];

type PageVisualProps = {
  theme: PageVisualTheme;
  ctaHref?: string;
  ctaLabel?: string;
};

export function PageVisual({ theme, ctaHref, ctaLabel }: PageVisualProps) {
  return (
    <aside className={`page-visual ${theme.className}`} aria-label={`${theme.title} visual`}>
      <div className="visual-image" aria-hidden="true">
        <span className="visual-sun" />
        <span className="visual-plot visual-plot-a" />
        <span className="visual-plot visual-plot-b" />
        <span className="visual-plot visual-plot-c" />
      </div>
      <div className="visual-copy">
        <span>{theme.eyebrow}</span>
        <strong>{theme.title}</strong>
        <p>{theme.caption}</p>
        {ctaHref && ctaLabel ? <a href={ctaHref}>{ctaLabel}</a> : null}
      </div>
    </aside>
  );
}
