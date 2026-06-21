import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ProdutoDetalhe() {
  const { id } = useParams()

  const [produto, setProduto] =
    useState<any>(null)

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products/${id}`
    )
      .then((res) => res.json())
      .then((data) => setProduto(data))
  }, [id])

  if (!produto) {
    return <h2>Carregando...</h2>
  }

  return (
    <div>
      <h1>{produto.title}</h1>

      <img
        src={produto.thumbnail}
        width="300"
      />

      <p>{produto.description}</p>

      <h3>R$ {produto.price}</h3>
    </div>
  )
}

export default ProdutoDetalhe