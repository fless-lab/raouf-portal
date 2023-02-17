import React from 'react'
import Heading from '../../common/heading'
import './hero.css'

const Hero = () => {
  return (
    <>
        <section className="hero">
            <div className="container">
            <Heading title="Welcome To Raouf's World" subtitle="Search for anything you want and get more infos about us."/>
            <form className="flex">
                <input type="text" placeholder='Please type a keyword to start searching ...' />
            </form>
            </div>
        </section>
    </>
  )
}

export default Hero