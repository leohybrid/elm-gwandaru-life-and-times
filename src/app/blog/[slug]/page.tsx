import Link from "next/link";
import { notFound } from "next/navigation";
import PageWrapper from "@/components/layout/PageWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { blogPosts } from "@/data/blogPosts";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | ELM GWANDARU`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <PageWrapper title={post.title} subtitle={post.subtitle || `${post.date} · ${post.readTime}`}>
      <article className="max-w-2xl mx-auto space-y-8">
        {/* Back to Journal Link */}
        <ScrollReveal direction="up" duration={0.6}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 font-manrope text-accent-500/70 hover:text-accent-300 text-[0.65rem] tracking-[0.2em] uppercase transition-colors mb-4"
          >
            <span className="text-lg">←</span> Back to The Journal
          </Link>
        </ScrollReveal>

        {/* Post Metadata */}
        <ScrollReveal direction="up" duration={0.7} delay={0.1}>
          <div className="flex items-center justify-between font-manrope text-secondary-500 text-xs tracking-wider border-b border-accent-500/20 pb-4">
            <span className="text-accent-500 uppercase tracking-widest text-[0.65rem]">{post.category}</span>
            <span>By {post.author} · {post.readTime}</span>
          </div>
        </ScrollReveal>

        {/* Post Body Content */}
        <div className="space-y-6 pt-4">
          {post.content.map((paragraph, index) => {
            // Check if paragraph contains markdown bold / italic formatting
            const isBoldHeader = paragraph.startsWith("Welcome to") || paragraph.startsWith("**The Life and Times**");

            return (
              <ScrollReveal key={index} direction="up" duration={0.8} delay={0.1 + index * 0.05}>
                <p
                  className={`font-sans font-light leading-relaxed ${
                    isBoldHeader
                      ? "text-accent-200 text-lg md:text-xl font-normal leading-snug"
                      : "text-secondary-300 text-base md:text-lg"
                  } whitespace-pre-line`}
                >
                  {paragraph}
                </p>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Closing Gold Divider */}
        <ScrollReveal direction="up" duration={0.8} delay={0.4}>
          <div className="divider-gold my-16" />
        </ScrollReveal>

        {/* Footer Navigation */}
        <ScrollReveal direction="up" duration={0.8} delay={0.5} className="text-center pt-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-4 font-manrope text-accent-500 text-xs tracking-[0.25em] uppercase hover:text-accent-300 border border-accent-500/30 px-8 py-4 bg-accent-500/5 hover:bg-accent-500/15 transition-all duration-300"
          >
            Return to The Journal
          </Link>
        </ScrollReveal>
      </article>
    </PageWrapper>
  );
}
