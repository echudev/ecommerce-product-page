import { Navbar } from './components/Navbar.jsx'
import { globalStyles } from './stitches.config.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Product } from './pages/Product.jsx'
import { Separator } from './components/Separator.jsx'

function App () {
  globalStyles()

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Separator light display={{ '@bp2': 'hidden' }} />
        <Routes>
          <Route path='/*' element={<Product />} />
          <Route path='/collections' element={<Product />} />
          <Route path='/men' element={<Product />} />
          <Route path='/women' element={<Product />} />
          <Route path='/about' element={<Product />} />
          <Route path='/contact' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
