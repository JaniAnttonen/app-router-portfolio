import localFont from 'next/font/local'
import Introduction from './components/sections/intro'
import Links from './components/sections/links'
import Mirror from './components/sections/mirror'
import Presentations from './components/sections/presentations'
import Projects from './components/sections/projects'

const therma = localFont({ src: [
  { 
    path: '../public/fonts/ASTherma-MediumCondensed.woff',
    weight: '500',
    style: 'normal',
  },
  { 
    path: '../public/fonts/ASTherma-LightCondensed.woff',
    weight: '400',
    style: 'normal',
  },
  { 
    path: '../public/fonts/ASTherma-BoldCondensed.woff',
    weight: '700',
    style: 'normal',
  },
  { 
    path: '../public/fonts/ASTherma-BlackCondensed.woff',
    weight: '900',
    style: 'normal',
  },
]})

const Home = () => {
  return (
    <main className={`flex flex-col md:px-10 md:py-8 px-3 py-4 ${therma.className}`}>
      <Introduction />
      <Links />
      <Mirror />
      <Projects />
      <Presentations />
    </main>
  )
}

export default Home

