import React from 'react'
import rev from '../asset/rev.png'

export default function reviews() {
  return (
    <div className="card text-bg-primary mb-3 review">
      <div className="card-body">
        <img src={rev} className="rev" alt="" />
        <blockquote class="blockquote mb-0">
          <p>"OMG! I cannot believe that I have got a brand new
          landing page after getting Omega. It was super easy to
          edit and publish. Everyone should try it!"</p>
          <footer class="blockquote-footer">Jonathan Taylor</footer>
        </blockquote>
      </div>
      <div className="card-body">
        <img src={rev} className="rev" alt="" />
        <blockquote class="blockquote mb-0">
          <p>"OMG! I cannot believe that I have got a brand new
          landing page after getting Omega. It was super easy to
          edit and publish. Everyone should try it!"</p>
          <footer class="blockquote-footer">Jonathan Taylor</footer>
        </blockquote>
      </div>
    </div>
  )
}
