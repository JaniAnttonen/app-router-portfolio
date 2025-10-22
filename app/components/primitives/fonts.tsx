import localFont from "next/font/local"

export const therma = localFont({ src: [
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

export const simplex = localFont({ src: [
  {
    path: '../../../public/fonts/Simplex.ttf',
    weight: '400',
    style: 'normal',
  },
]})

export const triplicate = localFont({ src: [
  {
    path: '../../../public/fonts/triplicate_a_regular.woff2',
    weight: '400',
    style: 'normal',
  },
  {
    path: '../../../public/fonts/triplicate_a_italic.woff2',
    weight: '400',
    style: 'italic',
  },
  {
    path: '../../../public/fonts/triplicate_a_bold.woff2',
    weight: '700',
    style: 'normal',
  },
  {
    path: '../../../public/fonts/triplicate_a_bold_italic.woff2',
    weight: '700',
    style: 'italic',
  }
]})

export const triplicateCode = localFont({ src: [
  {
    path: '../../../public/fonts/triplicate_a_code_regular.woff2',
    weight: '400',
    style: 'normal',
  }
]})
