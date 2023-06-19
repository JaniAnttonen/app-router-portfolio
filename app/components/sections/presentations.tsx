import ExternalLink from "../primitives/externallink"
import { List, ListItem } from "../primitives/list"
import Title from "../primitives/title"

const Presentations = () => {
  const presentations = [
    {
      title: "Apex XRPL Dev Summit: Introduction to Hooks Builder",
      description: "A recording of my presentation at the Apex XRPL Dev Summit 2022 in Las Vegas.",
      url: "https://youtu.be/8GDdu1xA2bI"
    },
    {
      title: "Archive",
      description: "An archive of my presentation slides on GitHub.",
      url: "https://github.com/JaniAnttonen/talks"
    }
  ]
  return (
    <section>
      <Title>Presentations</Title>

      <List>
        {presentations.map((presentations) => (
          <ListItem key={`presentations-${presentations.title}`}>
            <h2 className="font-bold"><ExternalLink href={presentations.url || ""}>{presentations.title}</ExternalLink></h2>
            <p>{presentations.description}</p>
          </ListItem>
        ))}
      </List>
    </section>
  )
}

export default Presentations
