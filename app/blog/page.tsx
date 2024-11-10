import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { getAllPosts, PostMetadata } from "@/lib/mdx"

export async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="space-y-6">
      {posts.map((post: PostMetadata) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <Card className="cursor-pointer hover:shadow-md transition-all">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{post.title}</span>
                <span className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString()}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

// Default export for route
export default async function BlogRoute() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      {/* @ts-expect-error Async Server Component */}
      <BlogPage />
    </div>
  )
} 