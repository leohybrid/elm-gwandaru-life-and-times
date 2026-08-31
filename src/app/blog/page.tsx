import PageWrapper from "@/components/layout/PageWrapper";
import BlogClientContent from "@/components/blog/BlogClientContent";

export const metadata = {
  title: "Blog",
  description: "Read the life and times journal of ELM GWandaru — essays on astronomy, philosophy, ancient civilizations, and the archaeology of meaning.",
};

export default function BlogPage() {
  return (
    <PageWrapper title="The Journal" subtitle="Chronicles of Life &amp; Times">
      <BlogClientContent />
    </PageWrapper>
  );
}
