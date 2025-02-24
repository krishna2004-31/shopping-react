import { createAction,createReducer } from "@reduxjs/toolkit";
// import { Value } from "sass";


const plusOneEvryTime=createAction("Counter/plusOneEvryTime");
const minusOneEvryTime=createAction("Counter/minusOneEvryTime");
const reset=createAction("Counter/reset");

const initialState={Value:0};
const rootreducer=createReducer(initialState,(builder)=>{
    builder.addCase(plusOneEvryTime,(State,action)=>{
        State.Value+=action.payload;
    });
    builder.addCase(minusOneEvryTime,(State,action)=>{
        State.Value-=action.payload;
    });
    builder.addCase(reset,(State,action)=>{
        State.Value=0;
    });
});

export {plusOneEvryTime};
export {minusOneEvryTime};
export {reset};
export default rootreducer;