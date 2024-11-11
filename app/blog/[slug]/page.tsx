import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { getPostBySlug, getAllPosts, type PostMetadata } from "@/lib/mdx"
import { ComponentProps } from "react"

interface Props {
  params: {
    slug: string;
  }
}

const components = {
  h1: (props: ComponentProps<"h1">) => (
    <h1 className="text-2xl font-bold my-4" {...props} />
  ),
  h2: (props: ComponentProps<"h2">) => (
    <h2 className="text-xl font-bold my-3" {...props} />
  ),
  p: (props: ComponentProps<"p">) => (
    <p className="my-2" {...props} />
  ),
}

export default async function BlogPost({ params }: Props) {
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
  const mdxSource = await serialize(content)

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
          <MDXRemote {...mdxSource} components={components} />
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