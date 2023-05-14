import React, { useState } from "react";
import Layout from "../layouts";
import IndexForm from "../components/indexform";
import ListItems from "../components/listitems";

const Index = () => {

  const [items, setItems] = useState([]);

  const onSubmit = (data) => {
    console.log("Data to be submitted:", data)
    // const a1 = items
    // a1.push(data)
    // setItems(a1)
    /**
     * a1 = [1,2,3]
     * a2 = [7]
     * b = 5
     * mergedArr= [a1, b, a2]   ==> [[1,2,3], 5, [7]]
     *            [...a1, b , ...a2] ==> [1,2,3, 5, 7]
     */

    // setItems((prevState)=>{
    //   return [
    //     data,
    //     ...prevState,
    //   ]
    // })
    setItems(prevItem =>([data, ...prevItem]))
  }
  /**
   * 
   * @param {*} data  {oldData: {}, newData: {}}
   * @param {*} type "edit" | "delete"
   * 
   * update items state
   * @return void
   */
  /**
   * setState((_)=>value)
   * setState(function (arg: OldState) {
   *  return newstate: value
   * })
   * setState(newState: value)
   */
  /**
   * 
   *   setItems(prev=> updateArray(prev, {oldData, newData}))
  * 
  *   updateArray = (array, {oldData, newData}) => {
  * 
  *   const updatedarray = array.map(function(eachItem){
  * 
  *   if(eachItem === oldData) {
  *     return newData
  * }
  * return eachItem
  * })
  * 
  * }
  * d= [1,2,3,4]
  * d.map(function(item){

      if(item ===1){
          return 5
      }
    return item
})
d becomes [5,2,3,4]
   */
  const onListChange = (data, type = "edit") =>{
    console.log(data)
    if(type==="edit"){
      // valid way
      console.log("Item is being edited")
      setItems(previousItems => {
          const index = previousItems.indexOf(data.oldData)
          previousItems[index] = data.newData
          console.log(previousItems)
          return previousItems
        // return previousItems.map(
        //   each => {
        //     if(each.title === data.oldData.title && each.description === data.oldData.description){
        //       return data.newData
        //     }
        //     return each
        //   }
        // )
      })
      // other way not preferred
      // const index = items.indexOf(data.oldData)
      // items[index] = data.newData // items variable update
      // items already newArray
      // setItems(items) // update again,
      console.log("Updates items")
    }else{
      console.log("Item is being deleted")
      /**
       *  [1,2,3,4].filter(number=> !(number === 1)) 
       *  ==> [2,3,4]
       */
      setItems(oldStateData=> 
        oldStateData
        .filter(each=>
          !(each.title === data.oldData.title 
            && each.description === data.oldData.description)
        )
      )
    }
  }

  return <Layout>
    <IndexForm onSubmit={onSubmit}/> 
    <ListItems list={items} onListChange={onListChange}/> {/** Passing props in component */}
  </Layout>;
};

export default Index;
