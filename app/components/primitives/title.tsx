import Image from "next/image"

type TitleProps = {
  children?: React.ReactNode
}

const Title = (props: TitleProps) => {
  return (
    <div className="flex flex-row mt-6 mb-3">
      <h1 className="flex flex-row items-center gap-1">{props.children}</h1>
      <Image src="/title.png" width={440} height={20} alt={"title image"} className="mix-blend-difference dark:mix-blend-normal" />
    </div>
  )
}

export default Title
