import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllPosts, type PostMetadata } from "@/lib/mdx"

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function BlogPost(props: Props) {
  const params = await Promise.resolve(props.params)
  const slug = params.slug
  let post

  if (!slug) {
    return notFound()
  }
  
  try {
    post = await getPostBySlug(slug)
  } catch (error) {
    console.error('Error loading blog post:', error)
    return notFound()
  }

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
          <MDXRemote source={content} />
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