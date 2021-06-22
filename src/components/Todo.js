import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addToList,deleteTodo} from '../actions/index'

/**
* @author
* @function Todo
**/

const Todo = () => {
    const [inputData,setInputData]=useState('');
    const list=useSelector((state)=>state.todoReducers.list)
    const dispatch = useDispatch();
  return(
  <div>
    <div>
            <input type="text" placeholder="enter text" 
            value={inputData}
            onChange={(event)=>setInputData(event.target.value)}/>
            <button onClick={()=>dispatch(addToList(inputData),
              setInputData(''))}>+</button>
    </div>



          <div>
            {
              list.map((elm)=>(
                
                  <div key={elm.id}>
                  <h3>{elm.data}</h3>
                <button onClick={()=>dispatch(deleteTodo(elm.id))}>-</button>
      </div>
                


              ))
            }

           
          </div>


   </div>
   )

 }

export default Todo