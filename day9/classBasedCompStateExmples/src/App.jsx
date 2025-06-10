import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Randomcolor from './components/Randomcolor/Randomcolor.jsx'
import {Randomquote} from './components/Randomquote/Randomquote.jsx'
import {Togglelight} from './components/Togglelight/Togglelight.jsx'
import { FormToggle } from './components/SignUpIn/SignUpIn.jsx'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/randomcolor" element={<Randomcolor />}></Route>
            <Route path="/randomquote" element={<Randomquote />}></Route>
            <Route path="/togglelight" element={<Togglelight/>}></Route>
            <Route path="/FormToggle" element={<FormToggle/>}></Route>
          </Routes>
        </BrowserRouter>

      </div>
    )
  }
}

export default App;