import React from "react"
import  ReactDOM from "react-dom"
import Header from "./JsFiles/Header"
import Container  from "./JsFiles/Container"
import Footer from "./JsFiles/Footer"
import "./JsFiles/CssFiles/index.css"

function App(){
  return(
    <>
      <Header />
      <Container />
      <Footer />
    </>
  )
}

ReactDOM.render(<App />,document.getElementById('root'))