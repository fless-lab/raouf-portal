import React from "react"
import { list } from "../../data/Data"

const RecentCard = () => {
  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img' style={{ height:"200px" }}>
                <img src={cover} alt='' style={{ objectFit:"cover" }} />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "On Site" ? "#25b5791a" : "#ff98001a", color: category === "On Site" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
              </div>
              <div className='button flex'>
                <div>
                  
                    {/* <a href="mailto:achilletarmla@gmail.com">{price}</a> */}
                    <a href="mailto:achilleatarmla@gmail.com?subject=Interrested%20by%20COURSE001&body=Hello%2C%20%0A%0AI%20am%20interrested%20in%20this%20course">
                  <button className='btn2'>
                  {price}
                  </button>
                    </a>
                </div>
                <span>{type}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
