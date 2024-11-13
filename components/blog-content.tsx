export function BlogContent() {
  const posts = [
    {
      title: "Journey to 1M ARR",
      date: "2024-10-10",
      description: "In Progress...",
      slug: "journey-in-tech",
    },
  ]

  return (
    <div className="grid gap-4">
      {posts.map((post) => (
        <article 
          key={post.slug}
          className="rounded-lg border p-4"
        >
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {post.description}
            </p>
            <time className="text-sm text-muted-foreground">
              {new Date(post.date).toLocaleDateString()}
            </time>
          </div>
        </article>
      ))}
      {posts.length === 0 && (
        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-semibold">Coming Soon</h3>
          <p className="text-sm text-muted-foreground">
            Blog posts will be available soon...
          </p>
        </div>
      )}
    </div>
  )
} 