import PageWrapper from "@/components/layout/PageWrapper";

export const metadata = {
  title: "About",
  description: "Learn more about the philosophy behind ELM GWandaru.",
};

export default function AboutPage() {
  return (
    <PageWrapper title="About the Sanctuary" subtitle="Philosophy, Story, & Wisdom">
      <div className="max-w-2xl mx-auto space-y-6 font-sans text-secondary-400 font-light leading-relaxed text-base">
        <p>
          ELM GWandaru is not a traditional space. It is a living canvas where the boundaries between philosophy, astronomy, ancient histories, and poetry dissolve. Built on the principles of sacred geometry, this sanctuary is designed to provoke reflection, wonder, and deep emotional resonance.
        </p>
        <p>
          Each chamber of this digital temple represents a journey: from the infinite dark of the cosmos to the desaturated grains of ancient sands. By exploring the connection between our cosmic origins and our earthly history, we seek to discover meaning in the quiet spaces.
        </p>
      </div>
    </PageWrapper>
  );
}
