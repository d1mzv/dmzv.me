import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllPosts, type PostMetadata } from "@/lib/mdx"

interface BlogPostParams {
  params: {
    slug: string
  }
}

export default async function BlogPost({ params }: BlogPostParams) {
  const slug = params?.slug
  
  if (!slug || typeof slug !== 'string') {
    return notFound()
  }

  try {
    const post = await getPostBySlug(slug)
    const { frontmatter, content } = post

    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>{frontmatter.title}</span>
            <span className="text-sm text-muted-foreground">
              {new Date(frontmatter.date).toLocaleDateString()}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert max-w-none">
            <MDXRemote source={content} />
          </div>
        </CardContent>
      </Card>
    )
  } catch (error) {
    console.error('Error loading blog post:', error)
    return notFound()
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post: PostMetadata) => ({
    slug: post.slug,
  }))
} 