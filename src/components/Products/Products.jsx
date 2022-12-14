import React, { useState } from 'react'
import css from './Products.module.css'
import Plan from '../../assets/plane.png'
import { ProductsData } from '../../data/products'
import {useAutoAnimate} from '@formkit/auto-animate/react'

const Products = () => {

    const [parent] = useAutoAnimate()

    const [menuProducts, setMenuProducts] = useState(ProductsData)

    const filter = (type) => {
        setMenuProducts(ProductsData.filter((product) => product.type === type))
    }

  return (
    <div className={css.container}>
        <img src={Plan} alt="" />
        <h1>Nossos produtos em destaque</h1>

        <div className={css.products}>
            <ul className={css.menu}>
                <li onClick={() => setMenuProducts(ProductsData)}>Todos</li>
                <li onClick={() => filter('Proteção de pele')}>Proteção de pele</li>
                <li onClick={() => filter('condicionador')}>Condicionadores</li>
                <li onClick={() => filter('foundation')}>Bases</li>
            </ul>

            <div className={css.list} ref={parent}>
                {
                    menuProducts.map((product, i) =>(
                        <div className={css.product}>
                            <div className="left-s">
                                <div className="name">
                                    <span>{product.name}</span>
                                    <span>{product.detail}</span>
                                </div>
                                <span>{product.price}$</span>
                                <div>Compre Aqui</div>
                            </div>

                            <img src={product.img} alt="" className='img-p'/>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Products