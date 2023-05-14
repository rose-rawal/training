import { createContext } from "react";


/**
 * createContext(params)
 * params ==> initalvalue
 */

export const ListCotext = createContext({
    items: [],
    setItems: () => {}
})

/**
 *    State Value ===> objects of data type, functions
 *    Accepts initalValue as params 
 *    Provider ==> top level component which helps in sharing values to lower level
 * 
 *    For using context
 * 
 *    1. Create react component that return Context.Provider with wrapped children
 *    2. Wrap Main or top level component with created react componet
 *    3.   useContext(Context) ==> gives assigned value
 */