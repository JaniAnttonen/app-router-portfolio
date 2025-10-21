import Image from "next/image"
import { therma } from "./fonts"

type TitleProps = {
  children?: React.ReactNode
}

const Title = (props: TitleProps) => {
  return (
    <div className="flex flex-row items-center mt-6 mb-3 flex-nowrap overflow-x-hidden overflow-y-hidden">
      <h1 className={`flex flex-row items-center gap-1 flex-shrink-0 font-medium text-[1.65rem] tracking-widest leading-none ${therma.className}`}>{props.children}</h1>
      <Image src="/title.png" width={440} height={20} alt={"title image"} className="mix-blend-difference dark:mix-blend-normal flex flex-shrink-0" />
    </div>
  )
}

export default Title
