import localFont from 'next/font/local'
import Introduction from './components/sections/intro'
import Links from './components/sections/links'
import Mirror from './components/sections/mirror'
import Presentations from './components/sections/presentations'
import Projects from './components/sections/projects'

export const simplex = localFont({ src: [
  {
    path: '../public/fonts/Simplex.ttf',
    weight: '400',
    style: 'normal',
  },
]})

const Home = () => {
  return (
    <main className={`flex flex-col md:px-10 md:py-8 px-3 py-4 ${simplex.className}`}>
      <Introduction />
      <Links />
      <Mirror />
      <Projects />
      <Presentations />
    </main>
  )
}

export default Home

