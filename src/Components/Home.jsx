import React, { useEffect, useRef } from 'react'
import Container from './Container'
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import $ from 'jquery';

 
function Home() {
    const myButton = useRef();
    gsap.registerPlugin(ScrollTrigger);
    // useEffect(() => {
    //   // const element = sectionRef.current;
  
    //   gsap.fromTo(element, 
    //     { opacity: 0, y: 50 }, 
    //     { 
    //       opacity: 1, 
    //       y: 0,
    //       scrollTrigger: {
    //         trigger: element,
    //         start: 'top 80%', // Animation starts when top of element is 80% from top of viewport
    //         end: 'top 30%', // Animation ends when top of element is 30% from top of viewport
    //         scrub: 1 // Smooth scrubbing, `true` to make the animation last more time
    //       }
    //     }
    //   );
    // }, []);

  const   handleClick = () => {
    $('#gupi').css("background-color", "red").slideUp().slideDown();
    console.log('handleClick triggered');
  }






  return (
 <>
 
          <div className='border-y m-3 w-full'>
                        <Container className=" border-x ">

              
 
        <h1 className="text-[145px] leading-[1] font-[AntonSC] font-bold ">
          WE HELP <span className="text-lime-500 blink">NFT</span>   PROJECTS LAUNCH.
        </h1>
 
      <div className="mt-10 flex justify-between w-full px-10 text-xs">
        <div className="flex items-center space-x-2">
          <span className="material-icons">public</span>
          <span>BASED IN UNITED STATES & WORKING WORLDWIDE</span>
        </div>
        <div>/ YEARS OF BLOCKCHAIN EXPERIENCE</div>
        <div>/ &copy;2022 WEBTHREE ALL RIGHTS RESERVED</div>
      </div>
      <div className="mt-5 text-center">
        <p>
          Our mission is to help ensure the <span className="font-bold">integrity</span> of ...
        </p>
      </div>
 
    </Container>
    </div>


     <Container>


<div className='border rounded-full w-[200px] h-[200px] overflow-hidden scale-[0.8] animate origin-center'>  
  <img src="https://picsum.photos/200/300" alt=""  />
</div>
     </Container>
  

  </>
  )
}

export default Home
