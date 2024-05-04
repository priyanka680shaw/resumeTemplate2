
import { LeftSideBar } from "./Components/LeftSideBar/LeftSideBar"
import { RightSideBar } from "./Components/RightSideBar"
function App() {
  return (
    <>
    <div className="w-full h-screen flex ">
      <div className=" bg-slate-300 m-2 flex" style={{margin : "auto" , height  :"650px" , width  :"900px" , padding : "10px"}}>
         <LeftSideBar/>
         <RightSideBar/>
      </div>
    </div>
      
    </>
  )
}

export default App
