import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface PostMetadata {
  title: string
  date: string
  excerpt: string
  slug: string
}

export async function getPostBySlug(slug: string) {
  if (!slug) {
    throw new Error('Slug is required')
  }

  try {
    const realSlug = slug.replace(/\.mdx$/, '')
    const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)
    const fileContents = await fs.readFile(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    if (!data || !content) {
      throw new Error('Invalid post data')
    }

    return {
      slug: realSlug,
      frontmatter: data,
      content,
    }
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error)
    throw error
  }
}

export async function getAllPosts() {
  try {
    const slugs = await fs.readdir(postsDirectory)
    const posts = await Promise.all(
      slugs.map(async (slug) => {
        const { frontmatter } = await getPostBySlug(slug)
        return {
          slug: slug.replace(/\.mdx$/, ''),
          title: frontmatter.title,
          date: frontmatter.date,
          excerpt: frontmatter.excerpt,
        }
      })
    )

    return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  } catch (error) {
    console.error('Error loading posts:', error)
    return []
  }
} 