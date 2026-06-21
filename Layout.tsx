import Cabecalho from "./Cabecalho"
import Rodape from "./Rodape"

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Cabecalho />
      
      <main style={{ minHeight: '80vh' }}>
        {children}
      </main>
      
      <Rodape />
    </div>
  )
}

export default Layout
