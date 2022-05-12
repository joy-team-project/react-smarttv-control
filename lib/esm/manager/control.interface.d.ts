import { EventEmitter } from "eventemitter3";
import { HotKeysProps } from "react-hotkeys";
import { TypeFuncKeydown } from "../utils/control.util";
export declare type DisplayScreen = string;
export declare type NodeId = string;
export declare type NodeIndex = number;
export declare type NodeIndexRange = [NodeIndex, NodeIndex];
export interface Tree<NodeType> {
    children?: NodeType[];
}
export interface Node extends Tree<Node> {
    id: NodeId;
    parentId?: NodeId;
    onBlur?: (node: Node) => void;
    onFocus?: (node: Node) => void;
}
export interface NodeConfig extends Tree<NodeConfig>, Omit<Node, "id" | "parent" | "activeChild" | "children"> {
    id?: NodeId;
    parent?: NodeId;
}
export declare type NodesBag = {
    [id in NodeId]: Node;
};
export interface INodeFocus extends Node {
    id: NodeId;
    displayScreen?: DisplayScreen;
    layoutIndex?: number;
    isDefault?: boolean;
    actived: boolean;
    focused: boolean;
    onFocusNode: (node: INodeFocus) => void;
    onBlurNode: (node: INodeFocus) => void;
}
export declare type NodesTree = {
    [id in NodeId]: INodeFocus;
};
export interface OptionNode {
    handlers?: any;
    displayScreen?: DisplayScreen;
    layoutIndex?: number;
    isDefault?: boolean;
    onFocusNode: (node: INodeFocus) => void;
    onBlurNode: (node: INodeFocus) => void;
}
export declare class CustomEventEmitter extends EventEmitter {
}
export interface HandleProps extends HotKeysProps {
    [key: string]: any;
    onKeydown?: (args: TypeFuncKeydown) => void;
    isDefault?: boolean;
    supportMediaKey?: boolean;
    supportCHKey?: boolean;
    supportNumberKey?: boolean;
    id: string;
    leftNodeId?: string;
    rightNodeId?: string;
    upNodeId?: string;
    downNodeId?: string;
    onEnter?: Function;
    onBack?: Function;
    onFocusNode?: (node: INodeFocus) => void;
    onBlurNode?: (node: INodeFocus) => void;
}
