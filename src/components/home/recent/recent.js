import React from "react"
import Heading from "../../common/heading"
import "./recent.css"
import RecentCard from "./recentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Courses Listed' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
