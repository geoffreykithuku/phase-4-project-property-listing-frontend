import React, { Fragment, useEffect, useState } from "react";
// import PropertyDetail from "../data/propertyDetails";
import "./property.css";
import { Link } from "react-router-dom";

const Property = () => {
  const [detail, setDetail] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3000/properties")
      .then((res) => res.json())
      .then((detail) => setDetail(detail));
  };

  console.log(detail);

  function deleteProperty(propertyid) {
    fetch(`http://localhost:3000/properties/${propertyid}`, {
       method: "DELETE",
       headers: { 'Content-Type': 'application/json'
       }
    })
    .then(res => res.json())
    .then(res => {
       fetchData(res)
    })
 }

  useEffect(() => {
    fetchData();
  }, []);
  //   const [detail] = useState(PropertyDetail);

  return (
    <Fragment>
      <section className="property">
        <div className="center">
          <h3>Popular Properties</h3>
        </div>

        <div className="row">
          {detail.map((detail) => {
            return (
              <div className="column">
                <div className="single-property">
                  <div className="card">
                    <div className="property-thumb">
                      <div className="property-tag"> For Sale </div>
                      <img src={detail.image} alt="Palace" />
                    </div>

                    <div className="property-content">
                      <h3>location:{detail.location}</h3>
                      <div className="mark">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>Rent:{detail.price}</span>
                      </div>
                      <span className="amount">
                        Description:{detail.description}
                      </span>
                    </div>

                    <div className="property-footer">
                     <span onClick={() => deleteProperty(Property.id)}>Delete</span>
                    </div>
                      <div className="footer2">
            <Link to={``}>See More</Link>
          </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="more-property">
          <a className="property-btn" href="#">
            More Properties
          </a>
        </div>
      </section>
    </Fragment>
  );
};

export default Property;
