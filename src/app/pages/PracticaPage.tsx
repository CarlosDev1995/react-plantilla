import { ProductButtons } from '../components/ProductButtons';
import { ProductCard } from '../components/ProductCard';
import { ProductContent } from '../components/ProductContent';
import { ProductTitle } from '../components/ProductTitle';
import { items } from '../data/dataCard';
import { useShoppingCart } from '../hooks/useItemCart';

import '../styles/custom-styles.css';
const item = items[0];


export const PracticaPage = () => {

  const {shoppingCart, onProductChange} = useShoppingCart();

  return (
    <div>

        <h1>Practica Control Props</h1>
        <hr />

            
            <ProductCard
                className="bg-dark"
                item={item}
                initialValues={{
                  count: 1,
                  maxCount: 10
                }}
            >

              {
                ({reset, increaseBy, count, isMaxCountReached}) => (
                  <>
                    <ProductTitle style={{color: 'white'}}/>
                    <ProductContent style={{color: 'pink'}}/>
                    <ProductButtons className='bg-darkhover-buttons' style={{color: 'white'}}/>

                    <button onClick={reset}> Reset </button>
                    {
                      !isMaxCountReached && <button onClick={() => increaseBy( +2 )}> +2 </button>
                    }

                    <span><h3>{count}</h3></span>

                  </>
                )
              }
               
            </ProductCard>


   



 

    </div>
  )
}
