import PageWrapper from "@/components/layout/PageWrapper";

export const metadata = {
  title: "Support Us",
  description: "Find out how to support the sanctuary.",
};

export default function SupportPage() {
  return (
    <PageWrapper title="Support Us" subtitle="Sustain the Digital Temple">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <p className="font-sans text-secondary-400 font-light leading-relaxed">
          If you feel a connection to this space, help us maintain its silence and preservation.
        </p>
      </div>
    </PageWrapper>
  );
}
