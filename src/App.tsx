import { CssBaseline } from '@material-ui/core'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Pages } from './pages'
function App() {
  return (
    <Router>
      <CssBaseline />
      <Pages />
    </Router>
  )
}
export default App
