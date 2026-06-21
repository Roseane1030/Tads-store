import type { ReactNode } from "react"
import Cabecalho from "./cabecalho"
import Rodape from "./rodape"

type LayoutProps = {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Cabecalho />

      <main>
        {children}
      </main>

      <Rodape />
    </>
  )
}

export default Layout