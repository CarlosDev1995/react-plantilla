import { useEffect, useRef, useState } from "react"
import { InitialValues, Item, onChangeArgs } from "../interfaces/interfaces";

interface UseItemArgs {
    value?: number;
    item: Item;
    onChange?: ( args: onChangeArgs ) => void;
    initialValues?: InitialValues
}

export const useItem = ({value = 0, onChange, item, initialValues}: UseItemArgs) => {

    const [counter, setCounter ] = useState( initialValues?.count || value);

    const isMounted = useRef( false );
    const increaseBy = ( value: number ) => {

        let newValue = Math.max( counter + value, 0 );
        if( initialValues?.maxCount){
            newValue = Math.min( newValue, initialValues.maxCount );
        }

        setCounter( newValue );

        onChange && onChange({ count: newValue, item });
    }

    const reset = () => {
        setCounter( initialValues?.count || value );
    }

    useEffect(() => {

        if( !isMounted.current ) return;
        else isMounted.current = true;
        setCounter( value );
      
    }, [ value ])



    return { counter, 
            increaseBy, 
            reset,
            maxCount: initialValues?.maxCount,
            isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter
         };

}