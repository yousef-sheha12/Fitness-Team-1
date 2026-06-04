export default function SocialButton({ ariaLabel, href, children }) {
  return (
    <a
      aria-label={ariaLabel}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-surface-card text-text-secondary transition-colors hover:text-text-primary"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
