import { CONFIG } from "@/data/config";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <p className="text-lg font-medium tracking-wide text-text/70 italic">
          &ldquo;Le style, c&rsquo;est une attitude.&rdquo;
        </p>

        <a
          href={CONFIG.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-neon-violet transition-colors hover:text-neon-orange"
        >
          @{CONFIG.instagram}
        </a>

        <div className="flex gap-6 text-sm text-muted">
          <a href="#prestations" className="transition-colors hover:text-text">
            Prestations
          </a>
          <a href="#reserver" className="transition-colors hover:text-text">
            Réserver
          </a>
        </div>

        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {CONFIG.barbierName}
        </p>
      </div>
    </footer>
  );
}
