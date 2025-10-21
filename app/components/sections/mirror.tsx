import ExternalLink from "../primitives/externallink";
import { List, ListItem } from "../primitives/list";
import Title from "../primitives/title";

const getMirrorBlogPosts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/mirror`, {
      next: {
        revalidate: 3600
      },
    })
    if (!res.ok) {
      console.log(res.statusText)
      throw new Error("Failed to fetch data: " + res.statusText)
    }
    return res.json()
  } catch (error) {
    console.log("Error fetching mirror blog posts: ", error)
    return { entry: [] }
  }
}

const Mirror = async () => {
  const { entry: items } = await getMirrorBlogPosts()

  return (
    <section className="flex flex-col">
      <Title>
        Blog
      </Title>
      <List>
      {items.map((post: any) => (
        <ListItem key={post.id}>
          <time className="text-sm opacity-60">{post.isoDate}</time>
          <ExternalLink href={post.id || ""}>{post.title}</ExternalLink>
        </ListItem>
      ))}
      </List>
    </section>
  )
}

export default Mirror
