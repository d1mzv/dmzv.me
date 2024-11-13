import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getPostBySlug, getAllPosts, type PostMetadata } from "@/lib/mdx"

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)

  if (!post?.frontmatter) {
    return notFound()
  }

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
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </CardContent>
    </Card>
  )
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post: PostMetadata) => ({
    slug: post.slug,
  }))
} 