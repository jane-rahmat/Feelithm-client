export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm bg-white/50 dark:bg-zinc-900/50 backdrop-blur">
      © {new Date().getFullYear()} Feelithm · “Not just a mood tracker — a mood lifter.”
    </footer>
  );
}
