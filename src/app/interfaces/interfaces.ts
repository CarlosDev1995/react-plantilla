export interface Item {
    id: string;
    title: string;
    content: string;
}

export interface ItemContextProps {
    counter: number;
    item: Item;
    maxCount?: number;
    increaseBy: ( value: number ) => void;
}

export interface ItemInCart extends Item {
    count:number
}

export interface onChangeArgs {
    count: number;
    item: Item;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ItemCardHandlers {
    reset: () => void;
    isMaxCountReached: boolean;
    count: number
    item: Item;
    increaseBy: ( value: number ) => void;
}