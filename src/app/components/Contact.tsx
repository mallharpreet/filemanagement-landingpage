"use client";
import React from "react";
import { IconMailFilled } from "@tabler/icons-react";
import { useId } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function ContactFormGridWithDetails() {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:px-6 md:py-20 lg:grid-cols-2">
      <div className="relative flex flex-col items-center overflow-hidden lg:items-start">
        <div className="flex items-start justify-start "></div>
        <h2 className="mt-9 bg-gradient-to-b from-neutral-400 to-neutral-700 bg-clip-text text-left text-xl font-bold text-transparent dark:from-neutral-200 dark:to-neutral-300 md:text-3xl lg:text-5xl">
          Contact us
        </h2>
        <p className="mt-8 max-w-lg text-center text-base text-neutral-400 dark:text-neutral-400 md:text-left">
          We are always looking for ways to improve our products and services.
          Contact us and let us know how we can help you.
        </p>

        <div className="mt-10 hidden flex-col items-center gap-4 md:flex-row lg:flex">
          <p className="text-sm text-neutral-400 dark:text-neutral-400">
            devsndesigners@gmail.com
          </p>
        </div>
      </div>
      <div className="relative mx-auto flex w-full max-w-2xl flex-col items-start gap-4 overflow-hidden rounded-3xl bg-gradient-to-b from-gray-500 to-gray-900 p-4 dark:from-neutral-900 dark:to-neutral-950 sm:p-10">
        <Grid size={20} />
        <div className="relative z-20 mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-neutral-100 dark:text-neutral-300"
            htmlFor="name"
          >
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Full Name"
            className="h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-neutral-700 placeholder-neutral-500 shadow-input outline-none focus:outline-none focus:ring-2 focus:ring-neutral-800 active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white"
          />
        </div>
        <div className="relative z-20 mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-neutral-100 dark:text-neutral-300"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="devsndesigners@gmail.com"
            className="h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-neutral-900 placeholder-neutral-500 shadow-input outline-none focus:outline-none focus:ring-2 focus:ring-neutral-800 active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white"
          />
        </div>
        <div className="relative z-20 mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-neutral-100 dark:text-neutral-300"
            htmlFor="company"
          >
            Company
          </label>
          <input
            id="company"
            type="text"
            placeholder="Devs & Designers"
            className="h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-neutral-700 placeholder-neutral-500 shadow-input outline-none focus:outline-none focus:ring-2 focus:ring-neutral-800 active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white"
          />
        </div>
        <div className="relative z-20 mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-neutral-100 dark:text-neutral-300"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Type your message here"
            className="w-full rounded-md border border-transparent bg-white pl-4 pt-4 text-sm text-neutral-800 placeholder-neutral-500 shadow-input outline-none focus:outline-none focus:ring-2 focus:ring-neutral-800 active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white"
          />
        </div>
        <button className="relative z-10 flex items-center justify-center rounded-md border border-transparent bg-neutral-800 px-4 py-2 text-sm font-medium text-white shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200 hover:bg-neutral-900 md:text-sm">
          Submit
        </button>
      </div>
    </div>
  );
}

const Pin = ({ className }: { className?: string }) => {
  return (
    <motion.div
      style={{
        transform: "translateZ(1px)",
      }}
      className={cn(
        "pointer-events-none absolute z-[60] flex h-40 w-96 items-center justify-center opacity-100 transition duration-500",
        className
      )}
    >
      <div className="h-full w-full">
        <div className="absolute inset-x-0 top-0 z-20 mx-auto inline-block w-fit rounded-lg bg-neutral-200 px-2 py-1 text-xs font-normal text-neutral-700 dark:bg-neutral-800 dark:text-white">
          We are here
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-blue-400/0 via-blue-400/90 to-blue-400/0 transition-opacity duration-500"></span>
        </div>

        <div
          style={{
            perspective: "800px",
            transform: "rotateX(70deg) translateZ(0px)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)] dark:bg-sky-500/[0.2]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)] dark:bg-sky-500/[0.2]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)] dark:bg-sky-500/[0.2]"
            ></motion.div>
          </>
        </div>
      </div>
    </motion.div>
  );
};

const FeatureIconContainer = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      "rounded p-4 ring-4 ring-neutral-300 dark:ring-neutral-800",
      className
    )}
  >
    {children}
  </div>
);

const Grid = ({ size = 8 }: { size?: number }) => {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 grid opacity-40"
      style={{
        gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${size}, minmax(0, 1fr))`,
      }}
    >
      {Array.from({ length: size * size }).map((_, i) => (
        <div
          key={i}
          className="border border-neutral-400/30 dark:border-neutral-800/30"
        />
      ))}
    </div>
  );
};
