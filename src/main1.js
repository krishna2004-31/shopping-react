import react, { useContext } from "react";
import { store, persistor } from "./Shopping/store";
import { Link } from "react-router-dom";
import { plusOneEvryTime } from "./Shopping/reducer";
import { minusOneEvryTime } from "./Shopping/reducer";
import { reset } from "./Shopping/reducer";
import { useSelector,useDispatch } from "react-redux";
// import { useContext } from "react";
import asus from './asusRog.jpg';
import CgPc from './CustomGamingPC.jpg'
import plays from './ps5.jpg'
import Xbox from './XboxSeriesX.jpg'
import Macb from './macBook.jpg'
import { CountProvider,CountContext } from "./Shopping/context";
import Globel from './Shopping/NewCompo';


function Shop(){
    const Value=useSelector((State)=>State.Value);
    // const ValObj= useContext(
    //   CountContext
    // );
    // console.log( ValObj);
 const {count,setCount}=useContext(CountContext);
 const incriment=()=>{
  setCount(count+1)
 }

    // const dispatch=useDispatch();
    return(<>
       {/* <h1>{ ValObj.value}</h1> */}
       {/* <Globel  /> */}
       {/* <h1>{count}</h1> */}
       {/* <button onClick={incriment}>Change</button> */}
    <h1 style={{color:"",textAlign:"center",fontFamily:"initial",fontSize:"45px",}}><u>My WebStore</u></h1>
        <table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '60%',alignItems:"center" }}>
          <tr style={{fontStyle:"italic",fontSize:"20px"}}>
            <th style={{ border: '1px solid black', padding: '8px' }}>Product</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Price</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Product Ditals</th>
            {/* <th style={{ border: '1px solid black', padding: '8px' }}>Add To Cart</th> */}
            
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' , textAlign:"center"}}><img src={asus} style={{ width: '120px', height: '140px',border:"2px solid black",borderRadius:"5%" }} /><br/>Asus Rog 8 Pro<br/><br/> <button
            onClick={()=>{
                store.dispatch(plusOneEvryTime(1));
                console.log("Update value");
            }}>Add</button>&nbsp;&nbsp;
            
            <button 
            onClick={()=>{
              store.dispatch(reset ());
            }}
            > Reset </button>&nbsp;&nbsp;

            <button onClick={()=>{
              store.dispatch(minusOneEvryTime(1));
              console.log("Update value");
            }}>Remove</button><br/><br/>
            <Link to="/AddCart"> Add To Cart</Link>
             </td>
            <td style={{ border: '1px solid black', padding: '8px' , textAlign:"center"}}>Rs.119,999</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>The ASUS ROG Phone 8 Pro is the latest gaming-focused smartphone from <br/>ASUS under its Republic of Gamers (ROG) lineup.<br/><br/>
            1.Processor: Qualcomm Snapdragon 8 Gen 3 (latest flagship chipset).<br/><hr/>
            2.GPU: Adreno GPU (optimized for gaming).<br/><hr/>
            3.RAM: 16GB (LPDDR5X) - 24GB <br/><hr/>
            4.Storage: 512GB (UFS 4.0) - 1TB<br/><hr/>
            5.Display: 6.8-inch AMOLED display with 1,440 x<br/>
            </td>
            {/* <td style={{ border: '1px solid black', padding: '8px',textAlign:"center" }}>
            <button
            onClick={()=>{
                store.dispatch(plusOneEvryTime(1));
                console.log("Update value");
            }}>Add</button>
            <Link to="/AddCart"> Add To Cart</Link>
            <button 
            onClick={()=>{
              store.dispatch(reset ());
            }}
            > Reset </button>

            <button onClick={()=>{
              store.dispatch(minusOneEvryTime(1));
              console.log("Update value");
            }}>Remove</button>
            </td> */}
          </tr>
          <tr>
          <td style={{ border: '1px solid black', padding: '8px' , textAlign:"center"}}><img src={Macb} style={{ width: '160px', height: '140px',border:"2px solid black",borderRadius:"5%" }} /><br/>Apple MacBook Pro<br/><br/> <button
            onClick={()=>{
                store.dispatch(plusOneEvryTime(1));
                console.log("Update value");
            }}>Add</button>&nbsp;&nbsp;
            
            <button 
            onClick={()=>{
              store.dispatch(reset ());
            }}
            > Reset </button>&nbsp;&nbsp;

            <button onClick={()=>{
              store.dispatch(minusOneEvryTime(1));
              console.log("Update value");
            }}>Remove</button><br/><br/>
            <Link to="/AddCart"> Add To Cart</Link></td>
            <td style={{ border: '1px solid black', padding: '8px' , textAlign:"center"}}>Rs.112,490</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>The MacBook Pro is Apple's high-performance laptop lineup, designed for professionals, <br/>creatives, and power users.<br/><br></br>
            1.MacBook Pro 14-inch (M2 Pro/M2 Max).<br/><hr/>
            2.MacBook Pro 16-inch (M2 Pro/M2 Max).<br/><hr/>
            3.Processor: Apple M2 Pro or M2 Max (up to 12-core)<br/>
             </td>
            {/* <td style={{ border: '1px solid black', padding: '8px',textAlign:"center" }}>
            <button
            onClick={()=>{
                store.dispatch(plusOneEvryTime(1));
                console.log("Update value");
            }}>Add</button>
            <Link to="/AddCart"> Add To Cart</Link>
            <button onClick={()=>{
              store.dispatch(reset ());
            }}>Reset</button>
            <button onClick={()=>{
              store.dispatch(minusOneEvryTime(1));
              console.log("Update value");
            }}>Remove</button>
            </td> */}
          </tr>
          <tr>
          <td style={{ border: '1px solid black', padding: '8px' , textAlign:"center"}}><img src={plays} style={{ width: '120px', height: '140px',border:"2px solid black",borderRadius:"5%" }} /><br/>PS5(Play Station 5)<br/> <br/> <button
            onClick={()=>{
                store.dispatch(plusOneEvryTime(1));
                console.log("Update value");
            }}>Add</button>&nbsp;&nbsp;
            
            <button 
            onClick={()=>{
              store.dispatch(reset ());
            }}
            > Reset </button>&nbsp;&nbsp;

            <button onClick={()=>{
              store.dispatch(minusOneEvryTime(1));
              console.log("Update value");
            }}>Remove</button><br/><br/>
            <Link to="/AddCart"> Add To Cart</Link></td>
            <td style={{ border: '1px solid black', padding: '8px' , textAlign:"center"}}>Rs.57,000</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>
              The PS5 is a next-generation gaming console that offers a range of features and <br/>
              capabilities that make it a must-have for gamers. Some of the key features of the PS5
              include:<br/><br/>
              1. Fast loading times: The PS5 uses a solid-state drive (SSD)<br/><hr/>
              2. Ray tracing: The PS5 supports ray tracing, which allows for more realistic lighting<br/><hr/>
              3. 8K resolution: The PS5 can output 8K resolution, making
              it ideal for large screens.<br/>
            </td>
            {/* <td style={{ border: '1px solid black', padding: '8px',textAlign:"center"  }}>
            <button
            onClick={()=>{
                store.dispatch(plusOneEvryTime(1));
                console.log("Update value");
            }}>Add</button>
            <Link to="/AddCart"> Add To Cart</Link>
            
            <button onClick={()=>{
              store.dispatch(reset ());
            }}>Reset</button>
            <button onClick={()=>{
              store.dispatch(minusOneEvryTime(1));
              console.log("Update value");
            }}>Remove</button>
            </td> */}
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' , textAlign:"center"}}><img src={Xbox} style={{ width: '160px', height: '140px',border:"2px solid black",borderRadius:"5%" }} /><br/>Xbox Series X<br/> <br/> <button
            onClick={()=>{
                store.dispatch(plusOneEvryTime(1));
                console.log("Update value");
            }}>Add</button>&nbsp;&nbsp;
            
            <button 
            onClick={()=>{
              store.dispatch(reset ());
            }}
            > Reset </button>&nbsp;&nbsp;

            <button onClick={()=>{
              store.dispatch(minusOneEvryTime(1));
              console.log("Update value");
            }}>Remove</button><br/><br/>
            <Link to="/AddCart"> Add To Cart</Link></td>
            <td style={{ border: '1px solid black', padding: '8px' , textAlign:"center"}}>Rs.70,000</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>
              The Xbox Series X is a next-generation gaming console that offers a range of features and capabilities that<br/>
              make it a must-have for gamers. Some of the key features of the Xbox Series X includ
              e:<br/><br/>
              1. Fast loading times: The Xbox Series X uses a solid-state drive (SSD)<br/><hr/>
              2. Ray tracing: The Xbox Series X supports ray tracing, which allows for more realistic<br/><hr/>
              3. 8K resolution: The Xbox Series X can output 8K resolution,
              making it ideal for large screens.<br/>
            </td>
            {/* <td style={{ border: '1px solid black', padding: '8px',textAlign:"center"  }}>
            <button
            onClick={()=>{
                store.dispatch(plusOneEvryTime(1));
                console.log("Update value");
            }}>Add</button>
            <Link to="/AddCart"> Add To Cart</Link>
            <button onClick={()=>{
              store.dispatch(reset ());
            }}>Reset</button>
            <button onClick={()=>{
              store.dispatch(minusOneEvryTime(1));
              console.log("Update value");
            }}>Remove</button>
            </td> */}
          </tr>
          <tr>
          <td style={{ border: '1px solid black', padding: '8px' , textAlign:"center"}}><img src={CgPc} style={{ width: '120px', height: '140px',border:"2px solid black",borderRadius:"5%" }} /><br/>Custom Gaming PC in Black<br/> <br/> <button
            onClick={()=>{
                store.dispatch(plusOneEvryTime(1));
                console.log("Update value");
            }}>Add</button>&nbsp;&nbsp;
            
            <button 
            onClick={()=>{
              store.dispatch(reset ());
            }}
            > Reset </button>&nbsp;&nbsp;

            <button onClick={()=>{
              store.dispatch(minusOneEvryTime(1));
              console.log("Update value");
            }}>Remove</button><br/><br/>
            <Link to="/AddCart"> Add To Cart</Link></td>
            <td style={{ border: '1px solid black', padding: '8px' , textAlign:"center" }}>Rs.100,000</td>
            <td style={{ border: '1px solid black', padding: '8px'  }}>
              The Custom Gaming PC in Black is a high-performance gaming computer that is designed to <br/>provide an immersiv
              e gaming experience. Some of the key features of the Custom Gaming PC in Black include:<br/>
              <br/>
              1. High-performance processor: The Custom Gaming PC in Black comes with a <br/>high-performance processor
              that is designed to provide fast and efficient performance.<br/><hr/>
              2. High-quality graphics card: The Custom Gaming PC in Black comes with a <br/>high-quality
              graphics card that is designed to provide high-quality graphics and fast performance.<br/><hr/>
              3. High-capacity storage: The Custom Gaming PC in Black comes with high-capacity
              
            </td>
            {/* <td style={{ border: '1px solid black', padding: '8px',textAlign:"center"  }}>
            <button
            onClick={()=>{
                store.dispatch(plusOneEvryTime(1));
                console.log("Update value");
            }}>Add</button>
            <Link to="/AddCart"> Add To Cart</Link>
            <button onClick={()=>{
              store.dispatch(reset ());
            }}>Reset</button>
            <button onClick={()=>{
              store.dispatch(minusOneEvryTime(1));
              console.log("Update value");
            }}>Remove</button>
            </td> */}
          </tr>
        </table>
        <h3>Added Products:-{Value}</h3>
      </>)
}




export default Shop;