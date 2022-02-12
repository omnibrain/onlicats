import { XIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { signOut } from "next-auth/react";
import React from "react";

interface MenuProps {
  open: boolean;
  onClose: () => void;
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const Menu: React.FunctionComponent<MenuProps> = ({ open, onClose }) => {
  if (!open) {
    return null;
  }

  return (
    <motion.nav
      animate={{ opacity: open ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 10 }}
      className={`${
        open ? "fixed" : "none"
      } top-0 bottom-0 left-0 right-0 bg-white`}
    >
      <motion.div
        className="flex flex-col	items-center justify-center h-full"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          variants={item}
          className="font-mono p-4 text-2xl text-slate-900 hover:text-violet-900"
          href="/account"
        >
          Account
        </motion.a>
        <motion.button
          variants={item}
          className="font-mono p-4 text-2xl text-slate-900 hover:text-violet-900"
          onClick={() => signOut()}
        >
          Sign Out
        </motion.button>
      </motion.div>
      <button
        className="fixed right-1 top-1 round hover:bg-slate-100 rounded-full"
        onClick={() => onClose()}
      >
        <XIcon className="w-10 h-10 fill-slate-900 hover:fill-violet-900 m-3" />
      </button>
    </motion.nav>
  );
};
