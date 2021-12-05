import { getWareHouse } from "../action"
const initialState = {
    wareHouses:[]
}

const Reducer = (state = initialState,action)=>{
switch(action.type){
    case 'setWareHouse':
        console.log(action.data)
            return action.data
    case getWareHouse:
        console.log(state)
        return state
    
}
}
export default Reducer;