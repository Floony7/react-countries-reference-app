import React from "react"
import Header from "./Header"
import Footer from "./Footer"

const Page = ({ children }) => {
  return (
    <>
      <div className="container">
        <Header />
        <section className="main">
          <div>{children}</div>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default Page
