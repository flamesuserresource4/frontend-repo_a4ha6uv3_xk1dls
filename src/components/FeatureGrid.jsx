import { Home, Bell, MessageSquare, Bookmark, Search, User, Heart, Repeat, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { title: "Home Feed", desc: "Chronological feed with infinite scroll and live tweets.", Icon: Home, href: "/" },
  { title: "Explore", desc: "Trending hashtags and a global search to discover more.", Icon: Search, href: "/explore" },
  { title: "Notifications", desc: "Live alerts for likes, comments, and follows.", Icon: Bell, href: "/notifications" },
  { title: "Messages", desc: "Real-time 1:1 chats with typing indicators.", Icon: MessageSquare, href: "/messages" },
  { title: "Bookmarks", desc: "Save tweets for later and organize your list.", Icon: Bookmark, href: "/bookmarks" },
  { title: "Profiles", desc: "Customizable profiles with follows and user timelines.", Icon: User, href: "/profile/you" },
];

const actions = [
  { label: "Like", Icon: Heart, color: "text-rose-500" },
  { label: "Comment", Icon: MessageCircle, color: "text-sky-500" },
  { label: "Retweet", Icon: Repeat, color: "text-emerald-500" },
];

export default function FeatureGrid() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-sky-50/40 dark:from-black dark:to-sky-950/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 rounded-2xl p-6 border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur"
          >
            <h3 className="text-xl font-bold">Why TweetSphere?</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Built for speed and clarity. Enjoy a familiar experience with modern performance, animations, and real-time interactions.
            </p>
            <div className="mt-4 flex gap-2">
              {actions.map(({ label, Icon, color }) => (
                <span key={label} className="inline-flex items-center gap-2 rounded-full border border-black/5 dark:border-white/10 px-3 py-1 text-sm">
                  <Icon className={`size-4 ${color}`} /> {label}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ title, desc, Icon, href }, i) => (
              <motion.a
                key={title}
                href={href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group rounded-2xl p-5 border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="size-10 rounded-xl grid place-items-center bg-sky-50 dark:bg-sky-950/40">
                    <Icon className="size-5 text-sky-600" />
                  </span>
                  <h4 className="font-semibold">{title}</h4>
                </div>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
                <span className="mt-4 inline-block text-sm font-medium text-sky-600 group-hover:underline">Open</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
