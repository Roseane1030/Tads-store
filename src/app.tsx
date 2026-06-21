import { Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"

import Home from "./Pages/Home"
import ProdutoDetalhe from "./Pages/ProdutoDetalhe"
import NotFound from "./Pages/NotFound"

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/produto/:id"
          element={<ProdutoDetalhe />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </Layout>
  )
}

export default App