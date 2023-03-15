import React from 'react'
import Heading from '../../common/heading'
import './hero.css'

const Hero = () => {
  return (
    <>
        <section className="hero">
            <div className="container">
            <Heading title="JSLP Risk Consulting Group" subtitle="We use our experience, skills, and expertise to offer our clients sound advice to improve business performance."/>
            <form className="flex">
                <input type="text" placeholder='Please type a keyword to start searching ...' />
            </form>
            </div>
        </section>
    </>
  )
}

export default Hero