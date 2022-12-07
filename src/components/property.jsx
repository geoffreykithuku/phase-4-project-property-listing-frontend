import React,{Fragment,useState} from 'react'
import PropertyDetail from '../data/propertyDetails'
import "./property.css"

const Property = () => {

    const [detail] = useState(PropertyDetail)

  return (
    
    <Fragment>

    <section className="property">

    <div className="center">
    <h3>Popular Properties</h3>
    </div>

    <div className="row">

    {
        detail.map((detail)=>{
            return(
                <div className="column">
          <div className="single-property">
            <div className="card">

                <div className="property-thumb">
                    <div className="property-tag"> For Sale </div>
                    <img src={detail.Image} alt="Palace" />
                </div>

                <div className="property-content">
                    <h3>location:{detail.location}</h3>
                    <div className="mark">
                      <i class="fa-solid fa-location-dot"></i>
                       <span>Rent:{detail.rent}</span>
                    </div>
                    <span className="amount">Description:{detail.description}</span>
                </div>

                <div className="property-footer">
                    <ul>
                        <li>
                            <span>{detail.size}</span>
                        </li>
                        <li>
                            <span>{detail.bed}</span>
                        </li>
                        <li>
                            <span>{detail.bath}</span>
                        </li>
                    </ul>
                </div>

            </div>
          </div>
        </div>
            )
        })
    }

        
    </div>

    <div className="more-property">
        <a className='property-btn' href="#">More Properties</a>
    </div>

    </section>
    
    </Fragment>
  )
}

export default Property