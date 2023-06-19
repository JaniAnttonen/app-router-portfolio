import Image from "next/image"
import ExternalLink from "../primitives/externallink"
import { List, ListItem } from "../primitives/list"
import Title from "../primitives/title"

const Projects = () => {
  const projects = [
    {
      name: "winston-loki",
      description: "A Winston transport for Loki",
      url: "https://github.com/JaniAnttonen/winston-loki",
      npm: "winston-loki"
    },
    {
      name: "Proof of Latency",
      description: "My Master's Thesis. A novel network protocol for creating a proof of latency between two peers with VDFs.",
      url: "https://github.com/JaniAnttonen/proof_of_latency"
    },
    {
      name: "notion-to-md-worker",
      description: "A Cloudflare Worker for converting Notion pages to Markdown.",
      url: "https://github.com/JaniAnttonen/notion-to-md-worker",
    },
    {
      name: "strobonator",
      description: "A small hackathon project done with MicroPython for controlling the Disobey 2019 badge's LEDs. One of the projects that didn't brick your badge.",
      url: "https://github.com/JaniAnttonen/strobonator"
    },
    {
      name: "Sprawl",
      description: "A peer-to-peer order book protocol in Go. Involved in design & development. Open source at Equilibrium Labs.",
      url: "https://github.com/sprawl/sprawl",
    },
    {
      name: "Vanilla",
      description: "Vanilla was a decentralized finance protocol. Worked mainly on the frontend (dApp), but also did some work on the smart contracts.",
      url: "https://github.com/vanilladefi"
    },
    {
      name: "Starsign Multisig UI",
      description: "UI for Starsign, a multisig wallet for Starknet.",
      url: "https://github.com/eqlabs/starknet-multisig-ui"
    },
    {
      name: "react-select-native",
      description: "Was fed up with the usage of non-standard HTML elements in UI libraries. Made my own.",
      url: "https://github.com/JaniAnttonen/react-select-native",
      npm: "react-select-native"
    }
  ]
  return (
    <section>
      <Title>Projects / Work</Title>

      <List>
        {projects.map((project) => (
          <ListItem key={`project-${project.name}`}>
            <h2 className="font-bold"><ExternalLink href={project.url || ""}>{project.name}</ExternalLink></h2>
            <p>{project.description}</p>
            {project.npm && (
              <Image src={`https://img.shields.io/npm/dw/${project.npm}`} width={120} height={20} alt={`npm downloads for ${project.npm}`} className="mix-blend-luminosity" />
            )}
          </ListItem>
        ))}
      </List>
    </section>
  )
}

export default Projects
