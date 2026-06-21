type Produto = {
  id: number
  title: string
  price: number
  thumbnail: string
}

type ProdutoCardProps = {
  produto: Produto
}

function ProdutoCard({ produto }: ProdutoCardProps) {
  return (
    <div className="card">
      <img
        src={produto.thumbnail}
        alt={produto.title}
        className="imagem-produto"
      />

      <h3>{produto.title}</h3>

      <p>R$ {produto.price}</p>

      <button className="btn">
        Comprar
      </button>
    </div>
  )
}

export default ProdutoCard