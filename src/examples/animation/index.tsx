import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

export default function AnimationExample() {
  return (
    <Routes>
      <Route path="/" element={<p>animation</p>} />
    </Routes>
  )
}