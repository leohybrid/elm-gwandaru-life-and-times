import PageWrapper from "@/components/layout/PageWrapper";

export const metadata = {
  title: "Art",
  description: "View visual art collections by ELM GWandaru.",
};

export default function ArtPage() {
  return (
    <PageWrapper title="Visual Art" subtitle="Echoes of Ancient Geometry">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <p className="font-sans text-secondary-400 font-light leading-relaxed">
          Sacred geometry, cosmic illustrations, and desert sketches.
        </p>
      </div>
    </PageWrapper>
  );
}
