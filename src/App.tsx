import RouterProvider from './provider/RouterProvider'
import { HeroesProvider } from './contexts/HeroesContext'

import FontAwesome from './fontawesome/Fontawesome';
import { IconPacks } from './fontawesome/IconPacks';

FontAwesome.RegisterIconPack(IconPacks);

const App = () => {

  return (
    <HeroesProvider>
      <RouterProvider />
    </HeroesProvider>
  )
}

export default App
