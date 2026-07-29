export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-tertiary sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Mike Furr</p>
        <a
          href="https://www.linkedin.com/in/mike-furr/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-accent"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
