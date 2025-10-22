import { triplicateCode } from "./fonts"

type ContactInfoProps = {
  children?: React.ReactNode,
  key?: string,
}

const ContactInfo = ({children, key}: ContactInfoProps) => (
  <span key={key} className={`text-sm ${triplicateCode.className}`}>{children}</span>
)

export default ContactInfo
