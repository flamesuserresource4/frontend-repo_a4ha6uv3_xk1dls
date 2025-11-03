import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
          >
            Say more with TweetSphere
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
          >
            A modern, real-time social app inspired by Twitter. Create, like, and chat with a silky-smooth UI and live updates.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 font-medium shadow-sm shadow-sky-500/30"
            >
              Open Home Feed
            </a>
            <a
              href="/explore"
              className="inline-flex items-center justify-center rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-gray-900 dark:text-white px-6 py-3 font-medium"
            >
              Explore Trends
            </a>
          </motion.div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-sm text-gray-600 dark:text-gray-300">
            <div className="rounded-xl border border-black/5 dark:border-white/10 p-4">
              Realtime updates
            </div>
            <div className="rounded-xl border border-black/5 dark:border-white/10 p-4">
              Clean design
            </div>
            <div className="rounded-xl border border-black/5 dark:border-white/10 p-4">
              Mobile-first
            </div>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] md:h-[600px] lg:h-[560px] rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-gradient-to-br from-sky-50 to-white dark:from-sky-950/30 dark:to-black">
          <Spline
            scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/10 dark:from-black/60 dark:via-transparent dark:to-black/10" />
        </div>
      </div>
    </section>
  );
}
