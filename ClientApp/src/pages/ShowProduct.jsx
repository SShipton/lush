import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

export function ShowProduct() {
  const params = useParams()
  const id = params.id

  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
  })

  useEffect(() => {
    const fetchProduct = () => {
      fetch(`/api/Products/${id}`)
        .then(response => response.json())
        .then(apiData => setProduct(apiData))
    }

    fetchProduct()
  }, [id])

  return (
    <div className="product-listing">
      <div className="media-body">
        <h1 className="mt-0">{product.name}</h1>
        {product.description}
      </div>
      <p className="mt-5">{product.price}</p>
    </div>
  )
}
