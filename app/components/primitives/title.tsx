import localFont from "next/font/local"
import Image from "next/image"

const therma = localFont({ src: [
  { 
    path: '../../../public/fonts/ASTherma-MediumCondensed.woff',
    weight: '500',
    style: 'normal',
  },
  { 
    path: '../../../public/fonts/ASTherma-LightCondensed.woff',
    weight: '400',
    style: 'normal',
  },
  { 
    path: '../../../public/fonts/ASTherma-BoldCondensed.woff',
    weight: '700',
    style: 'normal',
  },
  { 
    path: '../../../public/fonts/ASTherma-BlackCondensed.woff',
    weight: '900',
    style: 'normal',
  },
]})

type TitleProps = {
  children?: React.ReactNode
}

const Title = (props: TitleProps) => {
  return (
    <div className="flex flex-row items-center mt-6 mb-3 flex-nowrap overflow-x-hidden">
      <h1 className={`flex flex-row items-center gap-1 flex-shrink-0 font-semibold text-2xl tracking-widest ${therma.className}`}>{props.children}</h1>
      <Image src="/title.png" width={440} height={20} alt={"title image"} className="mix-blend-difference dark:mix-blend-normal flex flex-shrink-0" />
    </div>
  )
}

export default Title
