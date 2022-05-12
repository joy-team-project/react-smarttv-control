export * from "./control.config";
export * from "./utils/control.util";
import { ControlProvider } from "react-control-tv/src/components/control.provider";
import withHandleControlHOC from "react-control-tv/src/components/handler.hoc";
import ManagerControl from "react-control-tv/src/manager/control.manager";
import BaseComponent from "react-control-tv/src/utils/base.component";
export * from "./manager/control.interface";
import { GlobalHotKeys as GlobalView } from "react-hotkeys";
export { BaseComponent, ManagerControl, withHandleControlHOC, ControlProvider, GlobalView, };
