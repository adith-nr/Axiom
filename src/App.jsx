import './global.css'
import './App.css'
import Nav from './components/Nav'
import Home from './views/Home'

function App() {
  return (
    <div className="app-shell">
      <Nav />
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App
