import Parser from "rss-parser"
import ExternalLink from "../primitives/externallink"
import { List, ListItem } from "../primitives/list"
import Title from "../primitives/title"

const getMirrorBlogPosts = async () => {
  const res = await fetch("https://mirror.xyz/jantto.eth/feed/atom")
  console.log(res)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  
  const parser = new Parser()
  const feed = await parser.parseString(await res.text())

  return feed
}

const Mirror = async () => {
  const { items } = await getMirrorBlogPosts()

  return (
    <section className="flex flex-col">
      <Title>
        Blog
      </Title>
      <List>
      {items.map((post) => (
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
