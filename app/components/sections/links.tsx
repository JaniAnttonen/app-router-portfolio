import { ArrowTopRightIcon, GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"
import Title from "../primitives/title"

const Links = () => {
  const links = [
    {
      title: "Twitter",
      url: "https://twitter.com/JaniAnttonen",
      icon: TwitterLogoIcon
    },
    {
      title: "GitHub",
      url: "https://github.com/JaniAnttonen",
      icon: GitHubLogoIcon,
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/janttonen/",
      icon: LinkedInLogoIcon,
    },
    {
      title: "Mirror",
      url: "https://mirror.xyz/jantto.eth",
      icon: () => <Image src={"/mirror.png"} width={15} height={15} alt={"Mirror.xyz Logo"} className="mix-blend-luminosity" />
    }
  ]
  return (
    <section>
      <Title>Links</Title>

      <ul className="flex flex-row gap-3">
        {links.map((link) => (
          <Link href={link.url} key={`link-${link.title}`} className="flex flex-row items-center gap-1 hover:underline">
            <link.icon />
            <span>{link.title}</span>
            <ArrowTopRightIcon />
          </Link>
        ))}
      </ul>
    </section>
  )
}

export default Links
