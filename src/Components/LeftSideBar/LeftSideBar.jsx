import { CgProfile } from "react-icons/cg";
import { MdWork } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";

export const LeftSideBar = () => {
  
  const iconsStyle = {
    width : "100px" , height : "100px", border : "5px solid black", borderRadius : "50%", display : "flex" , justifyContent : "center" , alignItems: "center" , alignContent  :  "center"
  }

  const iconWidth = {
    width : "200px"
   }
  
  return (
   

    <div style={{width : "20%", height : "100%" , display : "flex" ,  justifyContent: "space-around", flexDirection  :"column" , alignItems : "center"}}>
            <div style={iconsStyle}>
              <CgProfile style={iconWidth}/>
            </div>
            <div style={iconsStyle}>
              <MdWork style={iconWidth}/>
            </div>
            <div style={iconsStyle}>
              <FaRegFileAlt style={{width : "100px"}}/>
            </div>
            <div style={iconsStyle}>
              <FaRegLightbulb style={iconWidth}/>
            </div>
    </div>
  )
}
