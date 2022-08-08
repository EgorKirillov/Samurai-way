import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {AppDispatch, AppStateType} from "./redux-store";
//import type { RootState, AppDispatch } from './store'


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector