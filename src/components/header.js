import React from 'react'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand h1" href="#omega">Omega</a>
    <form className="d-flex">
      <ul className="navbar-nav me-auto justify-content-end">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active text-danger" href="#demo" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Demos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#page">Pages</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#support">Supports</a>
        </li>
      </ul>
        <button className="btn btn-danger" type="submit">Get this app</button>
      </form>
    </div>
</nav>
  )
}
