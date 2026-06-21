import { cn } from "@/lib/cn";

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function ExternalLink({ href, children, className }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950 hover:decoration-zinc-500 dark:decoration-zinc-600 dark:hover:text-zinc-50 dark:hover:decoration-zinc-400",
        className,
      )}
    >
      {children}
    </a>
  );
}
