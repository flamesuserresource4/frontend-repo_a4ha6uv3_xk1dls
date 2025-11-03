export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-300">
        <p>
          © {new Date().getFullYear()} TweetSphere. Built with love for the timeline.
        </p>
        <nav className="flex flex-wrap items-center gap-4">
          <a className="hover:underline" href="/about">About</a>
          <a className="hover:underline" href="/privacy">Privacy</a>
          <a className="hover:underline" href="/terms">Terms</a>
          <a className="hover:underline" href="/settings">Settings</a>
        </nav>
      </div>
    </footer>
  );
}
