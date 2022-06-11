
import React from "react";
import {StoreType} from "./Redux/store";

const defaultValue:StoreType = {} as StoreType
export const StoreContext = React.createContext(defaultValue)
