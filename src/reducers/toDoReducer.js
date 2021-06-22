const initialData= {
list:[]
} 


const todoReducers =(state=initialData,action )=>{
    switch (action.type) {
        case "Add-todo":
            const {id,data}=action.payload;
            return {
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }

                ]
            }
            case "Delete-todo":
                const newList =state.list.filter((elm)=>elm.id !== action.id)
                return {
                    ...state,
                    list:newList
                }
            default : return state;
    }
}
export default todoReducers