import ExternalLink from "../primitives/externallink";
import { List, ListItem } from "../primitives/list";
import Title from "../primitives/title";

const getMirrorBlogPosts = async () => {
  const res = await fetch("https://janianttonen.com/api/mirror", {
    next: {
      revalidate: 3600
    },
  })
  if (!res.ok) {
    console.log(res.statusText)
    // throw new Error("Failed to fetch data: " + res.statusText)
  } else {
    console.log("Fetched mirror blog posts: ", await res.text())
  }

  return res.json()
}

const Mirror = async () => {
  const { items } = await getMirrorBlogPosts()

  return (
    <section className="flex flex-col">
      <Title>
        Blog
      </Title>
      <List>
      {items.map((post: any) => (
        <ListItem key={post.link}>
          <time className="text-sm opacity-60">{post.isoDate}</time>
          <ExternalLink href={post.link || ""}>{post.title}</ExternalLink>
        </ListItem>
      ))}
      </List>
    </section>
  )
}

export default Mirror
