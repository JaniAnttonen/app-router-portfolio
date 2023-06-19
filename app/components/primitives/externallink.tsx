import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type ExternalLinkProps = {
  href: string,
  children?: React.ReactNode,
  key?: string,

}

const ExternalLink = ({ href, children, ...props }: ExternalLinkProps) => (
  <Link href={href} {...props} passHref target="_blank" rel="noopener noreferrer" className="flex flex-row gap-1 items-center hover:underline">
    {children} <ArrowTopRightIcon className="flex shrink-0" />
  </Link>
)

export default ExternalLink
