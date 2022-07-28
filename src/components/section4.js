import React from 'react'
import sec4 from '../asset/sec4.png'

export default function section4() {
    return (
        <div id="main">
            <div className="container">
                <div className="col">
                    <div className="col-xs-12 col-md-6">
                        <div className="sec2-text">
                            <h1>Inproving your travel experience.</h1>
                            <p>Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</p>
                            <button className="btn btn-danger" type="submit">Get this app</button>
                        </div>
                    </div>
                </div>
                
                <div className="col-xs-12 col-md-6">
                    {" "}
                    <img src={sec4} className="sec2" alt="" />{" "}
                </div>
            </div>
        </div>
    )
}
