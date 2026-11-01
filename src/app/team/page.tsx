import { TeamGrid } from "@/components/blocks/Team";
import { getStaff } from "@/lib/api";

export const metadata = { title: "Team" };

export default async function TeamPage() {
  const people = await getStaff();

  return (
    <section className="px-4 md:px-8 py-14 md:py-20 max-w-[1400px] mx-auto">
      <h1 className="font-display text-4xl md:text-5xl tracking-tight text-center mb-12">
        Our Experts
      </h1>
      <TeamGrid people={people} />
    </section>
  );
}
