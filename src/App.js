import './App.css'
import { useState } from 'react'
import items from './data'
import Item from './Item'

function App() {
  const [menu, setMenu] = useState(items)
  const categories = [...new Set(items.map((data) => data.category))]

  const changeMenu = (categorie) => {
    if (categorie === 'all') {
      setMenu(items)
    } else {
      const newMenu = items.filter((item) => item.category === categorie)
      setMenu(newMenu)
    }
  }

  return (
    <main>
      <section className='section'>
        <div className='title'>
          <h1>Our Menu</h1>
          <div className='underline'></div>
        </div>

        <article className='btn-container'>
          <button className='btn' onClick={() => changeMenu('all')}>
            All
          </button>
          {categories.map((category) => {
            return (
              <button className='btn' onClick={() => changeMenu(category)}>
                {category}
              </button>
            )
          })}
        </article>
        <div className='menu'>
          {menu.map((item) => {
            return <Item key={item.id} {...item} />
          })}
        </div>
      </section>
    </main>
  )
}

export default App
