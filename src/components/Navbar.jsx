import { Home, Search, Bell, MessageSquare, Bookmark, User, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { href: "/", label: "Home", Icon: Home },
    { href: "/explore", label: "Explore", Icon: Search },
    { href: "/notifications", label: "Notifications", Icon: Bell },
    { href: "/messages", label: "Messages", Icon: MessageSquare },
    { href: "/bookmarks", label: "Bookmarks", Icon: Bookmark },
    { href: "/settings", label: "Settings", Icon: Settings },
    { href: "/profile/you", label: "Profile", Icon: User },
  ];

  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-black/40 border-b border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <motion.a
          href="/"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2"
        >
          <div className="size-8 rounded-xl bg-sky-500 grid place-items-center text-white font-black shadow-md shadow-sky-500/30">
            TS
          </div>
          <span className="font-semibold tracking-tight text-lg">TweetSphere</span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-2">
          {navItems.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              className="group inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              <Icon className="size-4 text-gray-500 group-hover:text-sky-500" />
              {label}
            </a>
          ))}
        </nav>

        <a
          href="/explore"
          className="md:hidden inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium bg-sky-500 text-white hover:bg-sky-600 transition-colors"
        >
          <Search className="size-4" /> Explore
        </a>
      </div>
    </header>
  );
}
