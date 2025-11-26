'use client';

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div key={faq.question} className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
          <button
            className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-slate-900"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {faq.question}
            <span className="text-xl text-primary">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index ? (
            <div className="border-t border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700">
              {faq.answer}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
