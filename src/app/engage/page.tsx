import PageWrapper from "@/components/layout/PageWrapper";

export const metadata = {
  title: "Engage With Us",
  description: "Connect with the community and share reflections.",
};

export default function EngagePage() {
  return (
    <PageWrapper title="Engage With Us" subtitle="Reflective Conversations">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <p className="font-sans text-secondary-400 font-light leading-relaxed">
          Join the newsletter, share your thoughts, and find community forums.
        </p>
      </div>
    </PageWrapper>
  );
}
