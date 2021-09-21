import * as React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

import AnimationExample from './examples/animation';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/animation" element={<AnimationExample />} />
      </Routes>
    </Router>
  )
}

function Welcome() {
  return (
    <main>
      <h1>Welcome to React Router Examples</h1>

      <p>Click on a link below to get started:</p>

      <p>
        <ul>
          <li><Link to="animation">Animation</Link></li>
        </ul>
      </p>
    </main>
  )
}