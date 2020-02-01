import React from "react"
import Layout from "../components/layout"
import About from "../pages/about"
import Events from "../pages/events"
import Presentations from "../pages/presentations"
import SimpleSlider from "../components/slider"

const IndexPage = () => (
  <div>
    <Layout>
      <SimpleSlider />
      <About />
      <Events />
      <Presentations />
    </Layout>
  </div>

)

export default IndexPage;
