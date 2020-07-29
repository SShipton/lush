import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import './custom.scss'

import { Products } from './pages/Products'
import { Header } from './components/Header'
import { ShowProduct } from './pages/ShowProduct'
import { NavBar } from './components/NavBar'

export function App() {
  const [activeFilter, setActiveFilter] = useState('')
  return (
    <>
      <NavBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <main className="container-fluid p-4">
        <Header />
        <Switch>
          <Route exact path="/">
            <Products activeFilter={activeFilter} />
          </Route>
          <Route path="/products/:id">
            <ShowProduct />
          </Route>
        </Switch>
      </main>
    </>
  )
}
