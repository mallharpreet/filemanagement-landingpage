"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const FAQ = [
  {
    question: "Can I create custom fields for my documents?",
    answer:
      "Yes, our system allows you to create custom fields tailored to your specific needs, ensuring that you can track all relevant information.",
  },
  {
    question: "Is it possible to upload documents directly into the system?",
    answer:
      "Absolutely! You can easily upload documents of various formats directly into the system for seamless tracking and management.",
  },
  {
    question: "Can this system integrate with my existing software?",
    answer:
      "Yes, our file tracking system is designed to integrate smoothly with your existing software and workflows, enhancing your current setup without disrupting it.",
  },
  {
    question: "Does the system support online transactions for my business?",
    answer:
      "Yes, we provide integrated support for online transactions, allowing your business to manage financial operations and document tracking within one platform.",
  },
  {
    question: "How secure is the document upload and tracking process?",
    answer:
      "Security is our top priority. We use advanced encryption and access controls to ensure that your documents are securely uploaded, stored, and tracked.",
  },
  {
    question: "Is there a limit to the number of documents I can upload?",
    answer:
      "No, our system is scalable, allowing you to upload and manage as many documents as your business requires.",
  },
  {
    question: "Can I track changes or updates to documents within the system?",
    answer:
      "Yes, our system includes comprehensive version control and audit trails, enabling you to track changes and updates to any document.",
  },
  {
    question: "How easy is it to set up and start using the system?",
    answer:
      "The setup process is straightforward, and our user-friendly interface ensures you can start managing your files efficiently right away.",
  },
  {
    question: "What kind of customer support do you offer?",
    answer:
      "We offer 24/7 customer support to assist you with any questions or issues, ensuring that your file management processes run smoothly.",
  },
];

export default function FrequentlyAskedQuestionsAccordion() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-20 md:grid-cols-2 md:px-8 md:py-40">
      <h2 className="text-center text-4xl font-bold tracking-tight text-neutral-400 dark:text-neutral-50 md:text-left md:text-6xl">
        Frequently asked questions
      </h2>
      <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {FAQ.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            open={open}
            setOpen={setOpen}
          />
        ))}
      </div>
    </div>
  );
}

const FAQItem = ({
  question,
  answer,
  setOpen,
  open,
}: {
  question: string;
  answer: string;
  open: string | null;
  setOpen: (open: string | null) => void;
}) => {
  const isOpen = open === question;

  return (
    <div
      className="cursor-pointer py-4"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-start">
        <div className="relative mr-4 mt-1 h-6 w-6 flex-shrink-0">
          <IconPlus
            className={cn(
              "absolute inset-0 h-6 w-6 transform text-blue-500 transition-all duration-200",
              isOpen && "rotate-90 scale-0"
            )}
          />
          <IconMinus
            className={cn(
              "absolute inset-0 h-6 w-6 rotate-90 scale-0 transform text-blue-500 transition-all duration-200",
              isOpen && "rotate-0 scale-100"
            )}
          />
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-400 dark:text-neutral-200">
            {question}
          </h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="overflow-hidden text-neutral-500 dark:text-neutral-400"
              >
                <p>{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
