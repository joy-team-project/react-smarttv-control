import React from "react";
import PropTypes from "prop-types";
import BaseComponent from "../utils/base.component";
import ManagerControl from "../manager/control.manager";
interface ContextState {
    managerControl: ManagerControl | null;
}
interface IProps {
    managerControl?: ManagerControl;
    layoutIndex?: number;
    rootId: string;
}
export declare class ControlProvider extends BaseComponent<IProps, ContextState> {
    static childContextTypes: {
        managerControl: PropTypes.Requireable<object>;
        layoutIndex: PropTypes.Requireable<number>;
    };
    static defaultProps: {
        layoutIndex: number;
    };
    getChildContext(): {
        managerControl: ManagerControl;
        layoutIndex: number | undefined;
    };
    constructor(props: IProps | Readonly<IProps>);
    renderContent(): JSX.Element;
}
export declare const ControlConsumer: React.Consumer<ContextState>;
export {};
