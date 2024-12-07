import React, { useState } from 'react';
import Container from './Container';
// import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Header = () => {
    const [sideBar, setSideBar] = useState(false);
    return (
        <div>
            <div className='w-full h-full fixed top-0  right-0 duration-1000'
                style={
                    {
                        right: sideBar ? "0" : "-100%",
                        background: "rgba(0,0,0,0.5)",
                        visibility: sideBar ? "visible" : "hidden",
                        opacity: sideBar ? 1 : 0,
                    }
                }>

                    <div className='border bg-[#95ff00] h-[100vh] right-[40%] w-[130px] absolute '>
                      <div className='ghomja text-9xl text-black font-bold  border  flex-col-reversenpm start
                        absolute left-[128px] animate-slide '>
                      <span className="mx-4 text-black">Web Three</span>
                <span className="mx-4">Web Three</span>
                <span className="mx-4">Web Three</span>
                <span className="mx-4">Web Three</span>
                <span className="mx-4">Web Three</span>
                <span className="mx-4">Web Three</span>
                <span className="mx-4">Web Three</span>
                        </div>
                    </div>
                <div className='w-[40%] right-0 absolute bg-black duration-[3s] h-full ' style={{
                    right: sideBar ? "0" : "-100%",
                }}>
                    <div className='flex justify-between p-9 border-b'>
                        <span>   <h1 className='text-[29px] font-bold text-[#dcdcdc] hover:text-[#95ff00]'> WEBTHREE® </h1>  </span>
                        <span className='p-4 bg-[#95ff00] border rounded-[100%]'><ImCross color='black' fontSize={20} onClick={() => { setSideBar(false) }} /> </span>
                    </div>
                    <div>
                        <ol className='p-12 mx-[230px] text-[50px] text-[#dcdcdc]'>
                            <li  className='hover:text-[#95ff00] home cursor-pointer'>
                                Home
                            </li>
                            <li className='hover:text-[#95ff00] home cursor-pointer' >Services</li>
                            <li className='hover:text-[#95ff00] home cursor-pointer' >Partners</li>
                            <li  className='hover:text-[#95ff00] home cursor-pointer'>Clients</li>
                            <li className='hover:text-[#95ff00] home cursor-pointer' >Contact</li>
                        </ol>
                    </div>
                </div>

            </div>
            <Container>

                <nav className='flex justify-between border-b p-2 m-3'>

                    <h1 className='text-[19px] font-bold text-[#dcdcdc] hover:text-[#95ff00]'> WEBTHREE® </h1>

                    <div>
                        <ul className='flex gap-16'>
                            <li>Home</li>
                            <li>Services</li>
                            <li>Partners</li>
                            <li>Clients</li>
                            <li>Contact</li>
                        </ul>
                    </div>


                    <div className='w-[50px]  border'>
                        <div className='w-full h-full ' >
                            <GiHamburgerMenu color='#95ff00' fontSize={35} className='cursor-pointer' onClick={() => { setSideBar(true) }} />
                        </div>


                    </div>

                </nav>



            </Container>
        </div>
    );
}

export default Header;
