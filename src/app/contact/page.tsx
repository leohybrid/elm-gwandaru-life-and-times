import PageWrapper from "@/components/layout/PageWrapper";

export const metadata = {
  title: "Contact",
  description: "Get in touch with ELM GWandaru.",
};

export default function ContactPage() {
  return (
    <PageWrapper title="Contact" subtitle="Send reflections to the Void">
      <div className="max-w-md mx-auto space-y-6">
        <form className="space-y-4">
          <div>
            <label className="block font-manrope text-[0.65rem] tracking-[0.25em] uppercase text-secondary-500 mb-2">Name</label>
            <input type="text" className="w-full bg-primary-900/40 border border-accent-500/10 focus:border-accent-500 transition-colors p-3 font-sans text-sm text-accent-200 outline-none" />
          </div>
          <div>
            <label className="block font-manrope text-[0.65rem] tracking-[0.25em] uppercase text-secondary-500 mb-2">Email</label>
            <input type="email" className="w-full bg-primary-900/40 border border-accent-500/10 focus:border-accent-500 transition-colors p-3 font-sans text-sm text-accent-200 outline-none" />
          </div>
          <div>
            <label className="block font-manrope text-[0.65rem] tracking-[0.25em] uppercase text-secondary-500 mb-2">Message</label>
            <textarea rows={5} className="w-full bg-primary-900/40 border border-accent-500/10 focus:border-accent-500 transition-colors p-3 font-sans text-sm text-accent-200 outline-none resize-none" />
          </div>
          <button type="submit" className="w-full bg-accent-500/5 hover:bg-accent-500/10 border border-accent-500/40 hover:border-accent-500 text-accent-300 font-manrope text-[0.7rem] uppercase tracking-[0.25em] py-4 transition-all duration-300 cursor-pointer">
            Send Message
          </button>
        </form>
      </div>
    </PageWrapper>
  );
}
