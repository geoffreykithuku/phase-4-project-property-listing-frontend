import React, { Fragment, useState, useEffect } from "react";
import Footer from "./Footer";
import Login from "./Forms"

import "./Home.css";
import Property from "./property";
const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("http://localhost:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return (
    <div>
     
      <Login onLogin={setUser} />
    </div>
  );
      
  return (
    <Fragment>
      {/* 
 
 import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

const Counter = ({ className, ...rest }) => {
    const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <Fragment>    

    <section className='counter'>

    <div className="counter-container">
        <div className="counter-row">

            <div className="counter-column">
                <strong data-number='305'> 
                <CountUp {...rest} start={viewPortEntered ? null : 0} end={305} >
                  {({ countUpRef }) => {
                    return (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={isVisible => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span className='number' ref={countUpRef} />
                      </VisibilitySensor>
                    );
                  }}
                </CountUp>
                </strong>
                <span>Area <br /> population</span>
            </div>
1050  <span>  Total <br /> Properties </span>
206  <span> Average <br /> House </span>
27 <span> Total <br /> Branches </span>
    </section>
 
     */}

      <section className="home">
        <div className="container">
          <h1>
            we construct <br /> dreams
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            accusamus iusto odit distinctio esse
          </p>

          <div className="link">
            <a href="" className="explore">
              {" "}
              Explore{" "}
            </a>
            <a href="" className="contact">
              {" "}
              Contact Us{" "}
            </a>
          </div>
        </div>
      </section>
      <Property />
      <Footer />
    </Fragment>
  );
};

export default Home;
