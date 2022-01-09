import Background from './components/elements/background'
import DesktopContextProvider from './contexts/desktop'
import AuthContextProvider from './contexts/auth'
import './mord-os.sass'

const MordOS = () => (
  <Background>
    <AuthContextProvider>
      <DesktopContextProvider />
    </AuthContextProvider>
  </Background>
)

export default MordOS
