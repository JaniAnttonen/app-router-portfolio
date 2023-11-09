import Image from "next/image"
import ContactInfo from "../primitives/contactinfo"

const Introduction = () => {
  return (
    <section>
      <div className="flex flex-row gap-6">
        <Image src="/avatar.jpg" width={120} height={120} alt={"avatar"} className="mix-blend-luminosity appicon" />
        <div className="flex flex-col justify-evenly">
          <h1 className="text-2xl font-bold">Jani Anttonen</h1>
          <p className="text-lg">Software Engineer</p>
          <div className="flex flex-row gap-3 flex-wrap">
            <ContactInfo>Email: jani.anttonen@protonmail.ch</ContactInfo>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction
