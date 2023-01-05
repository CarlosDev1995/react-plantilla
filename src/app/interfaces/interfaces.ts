export interface Item {
    id: string;
    title: string;
    content: string;
}

export interface ItemContextProps {
    counter: number;
    increaseBy: ( value: number ) => void;
    item: Item;
}

export interface ItemInCart extends Item {
    count:number
}

export interface onChangeArgs {
    count: number;
    item: Item;
}