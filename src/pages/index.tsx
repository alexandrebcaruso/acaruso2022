import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import Logo from "../components/logo/logo"
import { textCenter } from "../styles/index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={textCenter}>
      <Logo />
      <h1>
        Welcome to my <b>Gatsby website</b>
      </h1>
    </div>
  </Layout>
)

export default IndexPage
