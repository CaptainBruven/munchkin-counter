import RouterProvider from './provider/RouterProvider'
import { HeroesProvider } from './contexts/HeroesContext'

const App = () => {

  return (
    <HeroesProvider>
      <RouterProvider />
    </HeroesProvider>
  )
}

export default App
