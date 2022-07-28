import React from 'react'
import sec1 from "../asset/sec1.png"
import '../App.css';

export default function Main() {
    return (
        <div id="main">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src={sec1} className="sec1" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="sec1-text">
              <h1>Travel the world &</h1>
              <h1>meet new friends.</h1>
              <p>Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</p>
              <input type="text" class="form form1" placeholder="Email address" />
              <button className="btn btn-danger" type="submit">I want to join</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
