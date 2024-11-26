"use client";
import { motion } from "framer-motion";
import NavLink from "../NavLink";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 14,
  stiffness: 100,
  duration: 0.3,
};

export default function MobileNavMenu({ navData, setMenuIsOpen }) {
  return (
    <motion.div
      onClick={() => setMenuIsOpen(false)}
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0, opacity: 0 }}
      transition={transition}
      className={`
        w-full absolute flex flex-col bg-[#332D2B]
        backdrop-blur-[35px] rounded-2xl px-4 mt-2
        border-[1px] border-[#3B3533] overflow-hidden
      `}
    >
      {navData.links.map((link, idx) => (
        <NavLink
          key={idx}
          title={link.title}
          target={link.href}
          className={`
            text-fordham-white hover:text-fordham-gray
            font-extralight transition-colors duration-200
            border-b-[1px] last:border-0 border-white/5
            py-4
        `}
        />
      ))}
    </motion.div>
  );
}
