"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-ink-950"
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <div className="flex flex-col items-center gap-6">
            <div className="relative h-20 w-20">
              <motion.span
                className="absolute inset-0 rounded-2xl border-2 border-emerald/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.span
                className="absolute inset-2 rounded-xl border-2 border-t-emerald border-transparent"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
              />
              <span className="absolute inset-0 flex items-center justify-center font-mono text-xl font-bold text-emerald">
                MW
              </span>
            </div>
            <motion.div
              className="h-[2px] w-40 overflow-hidden rounded-full bg-white/10"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-soft to-emerald"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
