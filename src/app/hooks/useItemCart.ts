import { useState } from "react";
import { Item, ItemInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{[key:string]: ItemInCart}>({});

    const onProductChange = ({count, item}: {count: number, item: Item}) => {

        setShoppingCart( oldShoppingCart => {

            if(count === 0) {
                const {[item.id]: toDelete, ...rest} = oldShoppingCart;
                return rest
            }

            return {
                ...oldShoppingCart,
                [item.id]:{ ...item, count}
            }
        })

    }

    return {
        shoppingCart,
        onProductChange
    }

}
