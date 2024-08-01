import Nav from "./Nav/Nav";

export default function Layout({ children }) {
  return (
    <>
    <Nav />
    <main>{children}</main>
    </>
  )
}