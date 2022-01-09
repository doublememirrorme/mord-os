import AuthModal from './components/modules/auth-overlay'
import AuthContextProvider from './contexts/auth'
import './mord-os.sass'

const MordOS = () => (
  <AuthContextProvider>
    <div className="mord-os">
      <header className="App-header">
        Hello, Mord OS
      </header>
    </div>
  </AuthContextProvider>
)

export default MordOS
