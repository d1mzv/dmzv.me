import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getPostBySlug, getAllPosts, type PostMetadata } from "@/lib/mdx"

type Params = Promise<{ slug: string }>

export default async function BlogPost({
  params,
}: {
  params: Params
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

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