import { createContext, CSSProperties } from "react"
import { useItem } from "../hooks/useItem";
import { ItemContextProps, Item, onChangeArgs, InitialValues, ItemCardHandlers } from "../interfaces/interfaces";

import styles from '../styles/styles.module.css';

export const ItemContext = createContext({} as ItemContextProps);
const { Provider } = ItemContext; 


interface Props {
    item: Item;
    style?: CSSProperties;
    className?: string;
    value?:number;
    initialValues?: InitialValues;

    children: ( args: ItemCardHandlers ) => JSX.Element;
    onChange?: ( args: onChangeArgs ) => void;
}

export const ProductCard = ({ children, style, className, item, onChange, value, initialValues}: Props) => {

  const { counter, increaseBy, maxCount, reset, isMaxCountReached} = useItem({ item, onChange, value, initialValues });

  return (
    <Provider value={{
        item,
        increaseBy,
        counter,
        maxCount,
      }}
    >
      <div 
        className={`${styles.bodyCard} ${className}`}
        style={ style }
      >
      
          {children({
            reset,
            count: counter,
            isMaxCountReached,
            item,
            increaseBy
          })}
      </div>
    </Provider>
  )
}
