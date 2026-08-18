import PageWrapper from "@/components/layout/PageWrapper";

export const metadata = {
  title: "Comics",
  description: "Read cosmic comics by ELM GWandaru.",
};

export default function ComicsPage() {
  return (
    <PageWrapper title="The Comics" subtitle="Illustrated Legends">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <p className="font-sans text-secondary-400 font-light leading-relaxed">
          Visual stories depicting the journey of souls across timelines.
        </p>
      </div>
    </PageWrapper>
  );
}
