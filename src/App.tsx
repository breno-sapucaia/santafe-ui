import { CssBaseline } from '@material-ui/core'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PrivateApp from './pages/app'
function App() {
  return (
    <Router>
      <CssBaseline />
      {/* <Pages /> */}
      <PrivateApp />
    </Router>
  )
}
export default App
