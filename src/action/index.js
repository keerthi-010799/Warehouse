import axios from "axios";
export const setWareHouse = (data)=>{
    return {
        type: "setWareHouse",
        data: data
      };
}
export const getWareHouse = 'getWarehouse';

export const fetchWareHouse =()=>{
    return function(dispatch,getState){
    return axios.get('warehouse.json')
            .then(res=>{
                console.log(res.data)
                dispatch(setWareHouse(res.data)); 
            })
            .catch(err=>{console.log(err)})
        }

}

export const EDITWAREHOUSE = 'editWareHouse';