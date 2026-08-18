import PageWrapper from "@/components/layout/PageWrapper";

export const metadata = {
  title: "Blog",
  description: "Read the life and times journal of ELM GWandaru.",
};

export default function BlogPage() {
  return (
    <PageWrapper title="The Journal" subtitle="Chronicles of Life & Times">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <p className="font-sans text-secondary-400 font-light leading-relaxed">
          Observations of the night sky, reflections on archaeological findings, and notes on life.
        </p>
      </div>
    </PageWrapper>
  );
}
