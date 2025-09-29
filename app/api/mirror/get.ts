import Parser from "rss-parser"

export const runtime = "edge"

export async function GET(_request: Request) {
  const res = await fetch("https://mirror.xyz/jantto.eth/feed/atom")
  if (!res.ok) {
    throw new Error("Failed to fetch data: " + res.statusText)
  }
  
  const parser = new Parser()
  const feed = await parser.parseString(await res.text())

  return new Response(JSON.stringify(feed), {
    status: 200,
  })
}
