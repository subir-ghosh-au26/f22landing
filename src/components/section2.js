import React from 'react'
import sec2 from '../asset/sec2.png'

export default function section2() {
    return (
        <div id="main">
            <div className="container">
                <div className="col">
                    <div className="col-xs-12 col-md-6">
                        <div className="sec2-text">
                            <h1>Making trip is fun. Travel with friends.</h1>
                            <p>Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</p>
                        </div>
                        <div className="list">
                            <h5>1 Find your trip partner</h5>
                            <p>With lots of unique blocks, you can easily build
                                a page without coding. Build your next landing
                                page quickly</p>
                            <h5>2 Plan trips with easy steps</h5>
                            <p>With lots of unique blocks, you can easily build
                                a page without coding. Build your next landing
                                page quickly</p>

                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-6">
                    {" "}
                    <img src={sec2} className="sec2" alt="" />{" "}
                </div>
            </div>
        </div>
    )
}
