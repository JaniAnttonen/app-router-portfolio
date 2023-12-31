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
      npm: "winston-loki",
      keywords: ["Javascript", "Node.js", "Grafana", "Loki", "Winston"]
    },
    {
      name: "Proof of Latency",
      description: "My Master's Thesis. A novel network protocol for creating a proof of latency between two peers with VDFs.",
      url: "https://github.com/JaniAnttonen/proof_of_latency",
      keywords: ["Rust", "Cryptography", "VDF", "P2P"]
    },
    {
      name: "notion-to-md-worker",
      description: "A Cloudflare Worker for converting Notion pages to Markdown.",
      url: "https://github.com/JaniAnttonen/notion-to-md-worker",
      keywords: ["Javascript", "Cloudflare"]
    },
    {
      name: "Junction 2022 Side Challenge, Eiger",
      description: "A hackathon side challenge for Eiger in Junction 2022. A challenge that relied on poor private key management and a re-entrancy attack. Design, implementation and deployment by yours truly.",
      url: "https://github.com/JaniAnttonen/junction-side-challenge",
      keywords: ["Solidity", "Ethereum", "Web3"]
    },
    {
      name: "strobonator",
      description: "A small hackathon project done with MicroPython for controlling the Disobey 2019 badge's LEDs. One of the projects that didn't brick your badge.",
      url: "https://github.com/JaniAnttonen/strobonator",
      keywords: ["MicroPython"]
    },
    {
      name: "Sprawl",
      description: "A peer-to-peer order book protocol in Go. Involved in design & development. Open source at Equilibrium Labs.",
      url: "https://github.com/sprawl/sprawl",
      keywords: ["Go", "P2P"]
    },
    {
      name: "Vanilla",
      description: "Vanilla was a decentralized finance protocol. Worked mainly on the frontend (dApp), but also did some work on the smart contracts.",
      url: "https://github.com/vanilladefi",
      keywords: ["Next.js", "React", "Solidity", "Web3"]
    },
    {
      name: "Starsign Multisig UI",
      description: "UI for Starsign, a multisig wallet for Starknet.",
      url: "https://github.com/eqlabs/starknet-multisig-ui",
      keywords: ["Next.js", "React", "Web3"]
    },
    {
      name: "react-select-native",
      description: "Was fed up with the usage of non-standard HTML elements in UI libraries. Made my own.",
      url: "https://github.com/JaniAnttonen/react-select-native",
      npm: "react-select-native",
      keywords: ["Javascript", "React"]
    }
  ]
  return (
    <section>
      <Title>Projects / Work</Title>

      <List>
        {projects.map((project) => (
          <ListItem key={`project-${project.name}`}>
            <h2 className="font-bold"><ExternalLink href={project.url || ""}>{project.name}</ExternalLink></h2>
              <div className="text-sm text-[#333] dark:text-[#777] flex gap-1">{project.keywords.map(keyword => <span key={`project-${project.name}-keyword-${keyword}`} className="bg-[#f0f0f0] dark:bg-[#151515] px-1 py-0.5 rounded-md">{keyword}</span>)}</div>
              <summary>{project.description}</summary>
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
