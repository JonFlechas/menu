import React from 'react'

const Item = (props) => {
  const { id, title, category, price, img, desc } = props

  return (
    <article className='menu-item' key={id}>
      <img className='img' src={img} alt='' />
      <div className='item-info'>
        <div className='header'>
          <h4>{title}</h4>
          <h4>${price}</h4>
        </div>
        s<p className='item-text'>{desc}</p>
      </div>
    </article>
  )
}

export default Item
