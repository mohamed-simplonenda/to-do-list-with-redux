import React from 'react'

/**
* @author
* @function addToList
**/

export const addToList = (data) => {
  return{

type:"Add-todo",
payload:{
    id:new Date().getTime().toString(),
    data:data

}   

  }

 }
 export const deleteTodo = () => {
    return{
  
  type:"Delete-todo",
  
     
  
    }
  
   }
   export const removeTodo = () => {
    return{
  
  type:"Add-todo"
     
  
    }
  
   }

