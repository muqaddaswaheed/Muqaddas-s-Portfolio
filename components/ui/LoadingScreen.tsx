"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

/** Brief branded splash on first load — kept short so content isn't held back. */
export default function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-canvas"
          exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeOut" } }}
        >
          <div className="flex flex-col items-center gap-5">
            <Logo showWord={false} className="scale-125" />
            <div className="h-[2px] w-32 overflow-hidden rounded-full bg-line">
              <motion.div
                className="h-full bg-accent"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
