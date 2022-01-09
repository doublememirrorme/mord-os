import Background from './components/elements/background'
import AuthContextProvider from './contexts/auth'
import './mord-os.sass'

const MordOS = () => (
  <Background>
    <AuthContextProvider>
      <div className="mord-os">
        <header className="App-header">
          Hello, Mord OS
        </header>
      </div>
    </AuthContextProvider>
  </Background>
)

export default MordOS
