import Link from "next/link"


const Index = () => {
  return (
    <>
      <Link href="/about">
      <h2>Pagina About</h2>
      </Link>
      <h1>Hello World</h1>

      <Link href="/category/products">
      <h2>Pagina Produtos</h2>
      </Link>
    </>
  )
}

export default Index