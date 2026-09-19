import PageWrapper from "@/components/layout/PageWrapper";
import PoetryClientContent from "@/components/poetry/PoetryClientContent";

export const metadata = {
  title: "Poetry | ELM GWANDARU",
  description: "Verses, reflections, and poetry from ELM GWandaru.",
};

export default function PoetryPage() {
  return (
    <PageWrapper
      title="Verses from the Void"
      subtitle="Reflections, poetry, and stardust wrung from the cosmos"
    >
      <PoetryClientContent />
    </PageWrapper>
  );
}
