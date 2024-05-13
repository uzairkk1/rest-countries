import { Outlet } from 'react-router-dom'

function AppLayout() {
//   const [count, setCount] = useState(0)

  return (
    <>
      <header> 
        <div>
            TITLE
        </div>
        <div>Theme Switcher</div>
      </header>
      <main>
        <div className='content-wrapper'>
            <Outlet />
        </div>
      </main>
      <footer> Footer </footer>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        <Outlet />
      </p> */}
    </>
  )
}

export default AppLayout
