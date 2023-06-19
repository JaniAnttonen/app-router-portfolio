
type ContactInfoProps = {
  children?: React.ReactNode,
  key?: string,
}

const ContactInfo = ({children, key}: ContactInfoProps) => (
  <span key={key} className="font-mono text-sm">{children}</span>
)

export default ContactInfo
