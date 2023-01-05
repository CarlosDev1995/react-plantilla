import { createContext, CSSProperties, ReactElement } from "react"
import { useItem } from "../hooks/useItem";
import { ItemContextProps, Item, onChangeArgs } from "../interfaces/interfaces";

import styles from '../styles/styles.module.css';

export const ItemContext = createContext({} as ItemContextProps);
const { Provider } = ItemContext; 


interface Props {
    item: Item;
    children?: ReactElement | ReactElement[];
    style?: CSSProperties;
    className?: string;
    value?:number;
    onChange?: (args: onChangeArgs) => void;

}

export const ProductCard = ({ children, style, className, item, onChange, value}: Props) => {

  const { counter, increaseBy} = useItem({ item, onChange, value });

  return (
    <Provider value={{
      item,
      increaseBy,
      counter
    }}
      
    >
      <div 
        className={`${styles.bodyCard} ${className}`}
        style={ style }
      >
      
          {children}
      </div>
    </Provider>
  )
}
