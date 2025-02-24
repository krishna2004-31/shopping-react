import react,{useContext} from "react";
import { CountContext } from "./context";

function Globel(){
    const {count}=useContext(CountContext);
    return(<h1>{count}</h1>);
}

export default Globel;