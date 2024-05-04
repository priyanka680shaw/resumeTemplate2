import { CgProfile } from "react-icons/cg";
import { MdWork } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";

export const LeftSideBar = () => {
  
  const iconsStyle = {
    width : "100px" , height : "100px", border : "5px solid black", borderRadius : "50%", display : "flex" , justifyContent : "center" , alignItems: "center" , alignContent  :  "center"
  }

 
  return (
   

    <div style={{width : "20%", height : "100%" , display : "flex" ,  justifyContent: "space-around", flexDirection  :"column" , alignItems : "center"}}>
            <div style={iconsStyle}>
              <CgProfile className='text-7xl text-cyan-500'/>
            </div>
            <div style={iconsStyle}>
              <MdWork className='text-7xl text-cyan-500'/>
            </div>
            <div style={iconsStyle}>
              <FaRegFileAlt className='text-7xl text-cyan-500'/>
            </div>
            <div style={iconsStyle}>
              <FaRegLightbulb className='text-7xl text-cyan-500'/>
            </div>
    </div>
  )
}
