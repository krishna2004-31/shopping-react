import react from "react";
import { useSelector } from "react-redux";
// import Count from "./counter";




function AddCart(){
    const Value = useSelector((State) => State.Value);
    return(
        <div>
            <h1>You Add {Value} Products in Your Cart</h1>
        </div>
    )
};

export default AddCart;