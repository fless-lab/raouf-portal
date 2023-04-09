import React from "react"
import Heading from "../../common/heading"
import "./featured.css"
import FeaturedCard from "./featuredCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Our Services' subtitle='Check out all we offer as service here.' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
