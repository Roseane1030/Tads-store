type BotaoProps = {
  texto: string
}

function Botao({ texto }: BotaoProps) {
  return (
    <button className="btn">
      {texto}
    </button>
  )
}

export default Botao