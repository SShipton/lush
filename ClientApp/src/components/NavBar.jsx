import React, { useState } from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
export function NavBar(props) {
  const [filterText, setFilterText] = useState('')

  const handleClickSearch = event => {
    props.setActiveFilter(filterText)
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="#">
        LUSH UK/US
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
        </ul>
        <Route exact path="/">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={filterText}
              onChange={event => setFilterText(event.target.value)}
            />
            <span
              className="btn btn-outline-success my-2 my-sm-0"
              onClick={handleClickSearch}
            >
              Search
            </span>
          </form>
        </Route>
      </div>
    </nav>
  )
}
