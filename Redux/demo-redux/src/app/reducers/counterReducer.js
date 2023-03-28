// la 1 pure function (Cung 1 tham so dau vao  -> cho ra cung 1 ket qua)
// Khong co side effect

// const sum = (a,b)=>{
//     return a+b;
// }

const initialState = 0;
const counterReducer = (state = initialState, action)=>{
    switch(action.type){
        case "counter/increment" :{
            return state + 1;
        }
        case "counter/decrement" :{
            return state - 1;
        }
        default:{
            return state;
        }
    }
}
export default counterReducer