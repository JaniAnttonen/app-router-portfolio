import Image from "next/image"
import ContactInfo from "../primitives/contactinfo"

const Introduction = () => {
  return (
    <section>
      <div className="flex flex-row gap-6">
        <Image src="/avatar.jpg" width={120} height={120} alt={"avatar"} className="mix-blend-luminosity appicon" />
        <div className="flex flex-col justify-evenly">
          <h1 className="text-2xl font-bold">Jani Anttonen</h1>
          <p className="text-lg">Software Engineer at <a href="https://www.treeprotocol.xyz/" target="_blank">TREE Protocol</a> creating <a href="https://hadea.ec.europa.eu/calls-proposals/digital-product-passport_en" title="Digital Product Passport" target="_blank">DPPs</a></p>
          <div className="flex flex-row gap-3 flex-wrap">
            <ContactInfo>Email: jani.anttonen@protonmail.ch</ContactInfo>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction
