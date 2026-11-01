"use client";

import { AppraisalForm, ManageForm } from "@/components/blocks/VineForms";

export function SellLeadSection() {
  return (
    <section className="bg-surface px-4 md:px-8 py-14 md:py-20">
      <div className="max-w-[720px] mx-auto">
        <h2 className="font-display text-3xl md:text-4xl tracking-tight text-center">
          What’s your home worth?
        </h2>
        <div className="mt-10">
          <AppraisalForm />
        </div>
      </div>
    </section>
  );
}

export function ManageLeadSection() {
  return (
    <section className="bg-surface px-4 md:px-8 py-14 md:py-20">
      <div className="max-w-[720px] mx-auto">
        <h2 className="font-display text-3xl md:text-4xl tracking-tight text-center">
          Access our expert knowledge
        </h2>
        <div className="mt-10">
          <ManageForm />
        </div>
      </div>
    </section>
  );
}
