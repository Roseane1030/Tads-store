import { useEffect, useState } from "react"
import ProdutoCard from "./ProdutoCard"

function Vitrine() {
  const [produtos, setProdutos] = useState<any[]>([])
  const [busca, setBusca] = useState("")
  const [categoria, setCategoria] = useState("")
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState("")

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProdutos(data.products)
        setCarregando(false)
      })
      .catch(() => {
        setErro("Erro ao carregar produtos")
        setCarregando(false)
      })
  }, [])

  const produtosFiltrados = produtos.filter((produto) => {
    const atendeBusca =
      produto.title
        .toLowerCase()
        .includes(busca.toLowerCase())

    const atendeCategoria =
      categoria === ""
        ? true
        : produto.category === categoria

    return atendeBusca && atendeCategoria
  })

  const categorias = [
    ...new Set(
      produtos.map((produto) => produto.category)
    ),
  ]

  if (carregando) {
    return <h2>Carregando...</h2>
  }

  if (erro) {
    return <h2>{erro}</h2>
  }

  return (
    <section>
      <h2>Produtos</h2>

      <input
        type="text"
        placeholder="Buscar produto..."
        value={busca}
        onChange={(e) =>
          setBusca(e.target.value)
        }
      />

      <select
        value={categoria}
        onChange={(e) =>
          setCategoria(e.target.value)
        }
      >
        <option value="">
          Todas Categorias
        </option>

        {categorias.map((cat) => (
          <option
            key={cat}
            value={cat}
          >
            {cat}
          </option>
        ))}
      </select>

      <div className="vitrine">
        {produtosFiltrados.map((produto) => (
          <ProdutoCard
            key={produto.id}
            produto={produto}
          />
        ))}
      </div>
    </section>
  )
}

export default Vitrine