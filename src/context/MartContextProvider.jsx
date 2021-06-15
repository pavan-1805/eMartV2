import React, { createContext, useReducer } from 'react'
import { MartReducer } from '../reducer/MartReducer'
import { initialState } from './MartInitialState'

export const MartContext = createContext({})

function MartContextProvider(props) {
    const [state , dispatch] = useReducer(MartReducer,initialState)    
    console.log(state);
    return (
        <MartContext.Provider value={{state,dispatch}}>
            {props.children}
        </MartContext.Provider>
    )
}


export default MartContextProvider
