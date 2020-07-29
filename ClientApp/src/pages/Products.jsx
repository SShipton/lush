import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function SingleProductForList(props) {
  return (
    <Link to={`/products/${props.product.id}`} className="">
      <div className="products">
        <div className="">
          <h5 className="">{props.product.name}</h5>
          <p className="">{props.product.price}</p>
        </div>
      </div>
    </Link>
  )
}
export function Products(props) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const url =
      props.activeFilter.length === 0
        ? `/api/Products`
        : `api/Products?filter=${props.activeFilter}`

    fetch(url)
      .then(response => response.json())
      .then(apiData => {
        setProducts(apiData)
      })
  }, [props.activeFilter])
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {products.length} Products
          </li>
        </ol>
      </nav>
      <div className="t">
        <div className="product-format">
          {products.map(product => (
            <SingleProductForList key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  )
}
