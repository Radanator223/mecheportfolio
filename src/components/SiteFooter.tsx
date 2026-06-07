import { profile } from "@/data/projects";

export function SiteFooter() {
  return (
    <footer className="hairline mt-24">
      <div className="container-page py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-5">
          <a href={`mailto:${profile.email}`} className="hover:text-foreground transition-colors">
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Résumé
          </a>
        </div>
      </div>
    </footer>
  );
}
