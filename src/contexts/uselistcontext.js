import { useContext } from "react";
import { ListCotext } from "./listcontext";

export const useListContext = () => useContext(ListCotext)


/**
 * 
 *  const Input = () => {
 *      const listcontextValues = useListContext()
 * 
 *      {
 *          items,
 *          setItems
 *      }
 * }
 * 
 */