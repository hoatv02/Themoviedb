import React from "react"
import { Route, Routes } from "react-router-dom"
import UIRoutes from "./routes/UIRoutes"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<UIRoutes />} />
      </Routes>
    </div>
  )
}

export default App
