import PageWrapper from "@/components/layout/PageWrapper";
import AboutClientContent from "@/components/about/AboutClientContent";

export const metadata = {
  title: "About the Sanctuary | ELM GWANDARU",
  description: "Philosophy, Story, & Wisdom — Learn more about the vision behind ELM GWandaru.",
};

export default function AboutPage() {
  return (
    <PageWrapper title="Sanctuary Manifesto">
      <AboutClientContent />
    </PageWrapper>
  );
}
