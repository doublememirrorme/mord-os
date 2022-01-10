import Background from './components/elements/background'
import DesktopContextProvider from './contexts/desktop'
import AuthContextProvider from './contexts/auth'
import './mord-os.sass'
import RootDirectoryContextProvider from './contexts/root-directory'

const MordOS = () => {
  return (
    <Background>
      <RootDirectoryContextProvider>
        <AuthContextProvider>
          <DesktopContextProvider />
        </AuthContextProvider>
      </RootDirectoryContextProvider>
    </Background>
  )
}

export default MordOS
