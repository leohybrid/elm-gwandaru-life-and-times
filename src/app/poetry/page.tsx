import PageWrapper from "@/components/layout/PageWrapper";

export const metadata = {
  title: "Poetry",
  description: "Immerse yourself in poetry from ELM GWandaru.",
};

export default function PoetryPage() {
  return (
    <PageWrapper title="Poetry" subtitle="Verses from the Void">
      <div className="max-w-md mx-auto text-center space-y-8 font-cormorant text-accent-300 text-lg md:text-xl italic font-light leading-loose">
        <div>
          <p>The stars align in perfect frame,</p>
          <p>Whispering a forgotten name.</p>
          <p>From dunes below to skies above,</p>
          <p>We are but shadows of what we love.</p>
        </div>
      </div>
    </PageWrapper>
  );
}
