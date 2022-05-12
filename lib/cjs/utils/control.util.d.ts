import { TypeKeydown } from "../control.config";
export declare type TypeHandlerKeydown = {
    [key: string]: (keyEvent?: KeyboardEvent) => void;
};
export declare type TypeFuncKeydown = {
    type: TypeKeydown;
    idElement: string;
    displayScreen?: string;
    e?: any;
    [key: string]: any;
};
export declare const getHandlerKeydown: ({ numboard, listEvent, ch, media, id, callback, ...arg }: {
    numboard?: boolean | undefined;
    media?: boolean | undefined;
    listEvent?: TypeKeydown[] | undefined;
    ch?: boolean | undefined;
    callback: (option: TypeFuncKeydown) => void;
    id: string;
}) => TypeHandlerKeydown;
