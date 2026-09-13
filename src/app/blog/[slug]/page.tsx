import { notFound } from "next/navigation";
import PageWrapper from "@/components/layout/PageWrapper";
import PostReader from "@/components/blog/PostReader";
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
    <PageWrapper title="Sanctuary Dispatch">
      <PostReader post={post} />
    </PageWrapper>
  );
}
