import Image from "next/image"
import ContactInfo from "../primitives/contactinfo"
import { therma } from "../primitives/fonts"

const Introduction = () => {
  return (
    <section>
      <div className="flex flex-row gap-6">
        <Image src="/avatar.jpg" width={120} height={120} alt={"avatar"} className="mix-blend-luminosity" />
        <div className="flex flex-col justify-evenly">
          <h1 className={`text-4xl font-bold tracking-wider ${therma.className}`}>Jani Anttonen</h1>
          <p className="text-base">Exploring new ventures and products at <a href="https://eternalpassionproject.com">Eternal</a>, hosting NettiRahaPodi & meetups @ TurkuAI</p> 
          <div className="flex flex-row gap-3 flex-wrap">
            <ContactInfo>Email: jani.anttonen@protonmail.ch</ContactInfo>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction
