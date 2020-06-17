import React from "react"
import Header from "./Header"
import Footer from "./Footer"

const Page = ({ children }) => {
  return (
    <>
      <Header />
      <section className="main">
        <div className="inner">{children}</div>
      </section>
      <Footer />
    </>
  )
}

export default Page
