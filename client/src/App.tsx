import {Route, Routes, Link, BrowserRouter} from 'react-router-dom'
import { logo } from './assets'
import { Home, Create } from './views/Post'

function App() {
  
  return (
    <BrowserRouter>
    <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b[#e6ebf4]'>
      <Link to="/">
        <img alt='logo' src={logo} className="w-28 object-contain"></img>
      </Link>
      <Link to='/create-post' className='font-inter font-medium bg-[#6469ff] px-4 py-2 text-white rounded-md'>
        Create
      </Link>
    </header>
    <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-75px)]'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create-post' element={<Create />} />
    </Routes>
    </main>
    </BrowserRouter>
  )
}

export default App
