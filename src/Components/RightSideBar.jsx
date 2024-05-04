import React from 'react'
import { FaRegLightbulb } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { TiDeviceLaptop } from "react-icons/ti";
export const RightSideBar = () => {

  const iconsStyle = {
    width: "100px", height: "100px", border: "5px solid black", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center"
  }
   
   const iconWidth = {
    width : "200px"
   }
  return (
    <div style={{ width: "80%", height: "100%" }}>
      <div style={{ width: "100%", height: "80%" }}>
        <div style={{ width: "100%", height: "35%",  display: "flex" }}>
          <div style={{  width: "50%", height: "100%", padding: "10px",  borderRight : "2px solid black" }}>
            <h1 className='font-bold text-5xl m-2'>Priyanka Shaw</h1>
            <p className='text-2xl m-2'>Full Stack web Eveloper</p>
          </div>
          <div style={{  width: "50%", height: "100%", display: "flex", flexDirection: "column" , padding:"10px"}}>
            <p className='sm'>In publishing and graphic design,  Ctypeface without relying on meaningful conten Ctypeface without relying on meaningful content v Ctypeface without relying on meaningful contentt.</p>
            <div className='flex justify-between font-bold'>
              <h3>Email : </h3>
              <p>priyankashaw680@gmail.com</p>
            </div>
            <div className='flex justify-between font-bold'>
              <h3>Website : </h3>
              <p>mywebsite.com</p>
            </div>
          </div>
        </div>
        <div style={{ width: "100%", height: "35%", display: "flex" , borderTop  :"2px solid black" , borderBottom  :"2px solid black", }}>

          <div style={{  width: "100%", height: "100%", display: "flex", justifyContent: "space-around", flexDirection: "column" }}>

            <div className='flex'>
              <h3 className='font-bold' >Present : </h3>
              <p style={{ marginLeft: "30px" }}>  Ctypeface without relying on meaningful conten Ctypeface without relying on </p>
            </div>
            <br />
            <div className='flex'>
              <h3 className='font-bold'>2020 2021 : </h3>
              <p style={{ marginLeft: "30px" }}>  Ctypeface without relying on meaningful conten Ctypeface without relying on </p>
            </div>
            <br />
            <div className='flex'>
              <h3 className='font-bold'>2022 2023 : </h3>
              <p style={{ marginLeft: "30px" }}>  Ctypeface without relying on meaningful conten Ctypeface without relying on </p>
            </div>
          </div>

        </div>
        <div style={{ width: "100%", height: "30%",  display: "flex", borderBottom : "solid black"}}>
          <div style={{  width: "50%", height: "100%", display: "flex", justifyContent: "space-between", flexDirection: "column", padding: "10px", borderRight : "2px solid black"}}>
            <div className='flex justify-between'>
              <h3 className='font-bold' > Writting :  </h3>
              <p style={{ marginLeft: "30px" }}>✔️✔️✔️✔️✔️</p>
            </div>

            <div className='flex justify-between'>
              <h3 className='font-bold'>Editing : </h3>
              <p style={{ marginLeft: "30px" }}>✔️✔️✔️✔️✔️</p>
            </div>

            <div className='flex justify-between'>
              <h3 className='font-bold'>Social Media : </h3>
              <p style={{ marginLeft: "30px" }}>✔️✔️✔️✔️✔️</p>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-bold'>Research : </h3>
              <p style={{ marginLeft: "30px" }}>✔️✔️✔️✔️✔️</p>
            </div>

            <div className='flex justify-between'>
              <h3 className='font-bold'>SEO : </h3>
              <p style={{ marginLeft: "30px" }}>✔️✔️✔️✔️✔️</p>
            </div>
          </div>
          <div style={{  width: "50%", height: "100%", display: "flex", justifyContent: "space-between", flexDirection: "column", padding: "10px" }}>
            <div className='flex justify-between'>
              <h3 className='font-bold'>Zapire : </h3>
              <p style={{ marginLeft: "30px" }}>✔️✔️✔️✔️✔️</p>
            </div>

            <div className='flex justify-between'>
              <h3 className='font-bold'>Spoke : </h3>
              <p style={{ marginLeft: "30px" }}>✔️✔️✔️✔️✔️</p>
            </div>
            <div className='flex justify-between'>
              <h3 className='font-bold'>nDash : </h3>
              <p style={{ marginLeft: "30px" }}>✔️✔️✔️✔️✔️</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", height: "20%", display: "flex", justifyContent: "space-between" }}>
        <div style={iconsStyle}>
          <MdWork className='text-7xl text-cyan-500'/>
        </div>
        <div style={iconsStyle}>
          <TfiAnnouncement className='text-7xl text-cyan-500'/>
        </div>
        <div style={iconsStyle}>
          <TiDeviceLaptop className='text-7xl text-cyan-500'/>
        </div>
        <div style={iconsStyle}>
          <FaRegLightbulb className='text-7xl text-cyan-500' />
        </div>
      </div>
    </div>
  )
}
