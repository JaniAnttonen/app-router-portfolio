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
