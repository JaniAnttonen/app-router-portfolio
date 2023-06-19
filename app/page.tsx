import Introduction from './components/sections/intro'
import Links from './components/sections/links'
import Mirror from './components/sections/mirror'
import Presentations from './components/sections/presentations'
import Projects from './components/sections/projects'

const Home = () => {
  return (
    <main className="flex flex-col px-10 py-8">
      <Introduction />
      <Links />
      <Mirror />
      <Projects />
      <Presentations />
    </main>
  )
}

export default Home

