import { useEffect, useState } from "react"
import { Item, onChangeArgs } from "../interfaces/interfaces";

interface UseItemArgs {
    value?: number;
    item: Item;
    onChange?: ( args: onChangeArgs ) => void;

}

export const useItem = ({value = 0, onChange, item}: UseItemArgs) => {

    const [counter, setCounter ] = useState( value);

    const increaseBy = ( value: number ) => {

        const newValue = Math.max( counter + value, 0 );

        setCounter( newValue );

        onChange && onChange({ count: newValue, item });


    }

    useEffect(() => {
      
        setCounter( value );
      
    }, [ value ])

    return { counter, increaseBy };

}