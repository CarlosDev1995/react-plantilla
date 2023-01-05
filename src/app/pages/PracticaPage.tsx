import { ProductButtons } from '../components/ProductButtons';
import { ProductCard } from '../components/ProductCard';
import { ProductContent } from '../components/ProductContent';
import { ProductTitle } from '../components/ProductTitle';
import { items } from '../data/dataCard';
import { useShoppingCart } from '../hooks/useItemCart';

import '../styles/custom-styles.css';

export const PracticaPage = () => {

  const {shoppingCart, onProductChange} = useShoppingCart();

  return (
    <div>

        <h1>Practica Control Props</h1>
        <hr />
        {
          items.map((item) => (
            
            <ProductCard
                key={item.id}
                className="bg-dark"
                item={item}
                onChange={ onProductChange }
                value={ shoppingCart[item.id]?.count || 0}
            >
                <ProductTitle style={{color: 'white'}}/>
                <ProductContent style={{color: 'pink'}}/>
                <ProductButtons className='bg-darkhover-buttons' style={{color: 'white'}}/>
            </ProductCard>
          ))

        }


        {
          Object.entries(shoppingCart).map( ([key, item]) => (
            <ProductCard
                key={key}
                item={item}
                onChange={ onProductChange }
                value={ item.count }
                style={{width: '50%'}}
            >
                <ProductTitle />
                <ProductContent />
                <ProductButtons className='bg-darkhover-buttons' />
            </ProductCard>
          ))
        }



 

    </div>
  )
}
