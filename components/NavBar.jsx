import React, { useReducer, useState, useRef } from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import Link from "next/link";
import Image from "next/image"
const NavBar = () => {
//    const ref=useRef(null)

//     const [mobNavLinks, setMobNavLinks] = useState("");
// const [Dropdown, setDropdown] = useState("")
//   const navLinksToggle = () => {
//     mobNavLinks === "none" ? setMobNavLinks("block") : setMobNavLinks("none");
//   };
//   const dropdowntoogel = () => {
//     // Dropdown === "none" ? setDropdown("block") : setDropdown("none");
//   };
   
//   useEffect(()=>{
//     document.addEventListener('click' , handleclickoutside,true)
//   },[])

//   const refone= ref;
//    const handleclickoutside=(e)=>{
//     if(!refone.current.contains(e.target)){
//       // setMobNavLinks("none")
//       setDropdown("none")
//     }else{
//       // setMobNavLinks("block")
//       setDropdown("block")
//     }
//    } 


const [toggleNavBar, setToggleNavBar] = useState(false)
const [toggleul, setToggleul] = useState(false)
var dropDownRef = useRef()
var dropDownRef2 = useRef()
var dropDownRef3 = useRef()
  return (
    
   <>
    {/* <div className="NavBar">
      <nav>
        <div className="logo">
          <Link href="/">
            <Image className="width" width="200" height="70" src="/logos.png" alt="" />
          </Link>
        </div>
        <div className="barsDiv" onClick={navLinksToggle}>
          <div className="bars">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="navLinks" style={{ display: mobNavLinks }}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
             
            </li>
            <div className="dropdown"
             ref={refone}
             >
              <button
                className="dropdown-toggle"
               
                onClick={dropdowntoogel}
              >
               Services
              </button>
              <div
                className="dropdown-menu"
              
                style={{ display: Dropdown }}
              >
                <Link className="dropdown-item" href="/Converter/Binary">
                  Binary To Decimal
                </Link>
                <Link className="dropdown-item" href="/Converter/TextBinary">
                Text to Binary
                </Link>
                <Link className="dropdown-item" href="/Converter/Hexatobinary">
                Hexa to Binary
                </Link>
                
                
              </div>
            </div>
            <li>
              <Link href="/About">About Us</Link>
            </li>
            <li>
              <Link href="/Contactus">Contact Us</Link>
            </li>
            <li>
              <Link href="/Privacy">Privacy And Policy</Link>
            </li>
            
            <li>
            <Link href="/Disclaimer">Disclaimer</Link>
            </li>
            <li>
              <Link href="/Blogs">Blogs</Link>
              
            </li>
            
          </ul>
        </div>
      </nav>
    </div> */}


<div className="NavBar">
        <nav>
        <div className="logo">
          <Link href="/">
            <Image className="width" width="200" height="70" src="/logos.png" alt="" />
          </Link>
        </div>
          <div className="navLinks">
            <ul style={{ top: toggleNavBar ? "100%" : "-1000%" }} >
              <li>
                <Link href='/'>Home</Link>

              </li>
              <li className='services_one'>
                <Link href="">services
                <i  className="fa-solid fa-angle-down"></i>
                </Link>
                <ul className='dropDownList'>
                  <li><Link style={{ color: 'black', marginBottom: '4px', fontWeight:'500' }} href='/Converter/Binary' className='drop-downitem' > Binary To Decimal</Link></li>
                  <li><Link style={{ color: 'black', marginBottom: '4px', fontWeight:'500' }} href='/Converter/TextBinary' className='drop-downitem' >Text to Binary</Link></li>
                  <li><Link style={{ color: 'black', marginBottom: '4px', fontWeight:'500' }} href='/Converter/Hexatobinary' className='drop-downitem' >  Hexa to Binary</Link></li>
                 

                </ul>
              </li>
              <li className='services_two'>
                <Link ref={dropDownRef} onClick={() => setToggleul(!toggleul)} href="">What we Help
                <i ref={dropDownRef2} className="fa-solid fa-angle-down"></i>
                </Link>
                <ul style={{ display: toggleul ? 'block' : 'none', overflowY: 'scroll', height: '185px', border: '1px solid',width:'100%',borderRadius:'4px' }} ref={dropDownRef3} className='dropDownList'>
                  <li style={{ margin: '15px 0px' }}><Link href="/Converter/Binary">Binary To Decimal</Link></li>
                  <li style={{ margin: '15px 0px' }}><Link href="/Converter/TextBinary">Text to Binary</Link></li>
                  <li style={{ margin: '15px 0px' }}><Link href="/Converter/Hexatobinary">Hexa to Binary</Link></li>
                 
                </ul>
              </li>
              <li>
              <Link href="/About">About Us</Link>

              </li>
              <li>
              <Link href="/Contactus">Contact Us</Link>

              </li>
              <li>
              <Link href="/Privacy">Privacy And Policy</Link>

              </li>
              <li>
              <Link href="/Disclaimer">Disclaimer</Link>

              </li>
              <li>
              <Link href="/Blogs">Blogs</Link>
              
              </li>


            </ul>
            <OutsideClickHandler
              onOutsideClick={(event) => {
                if ((dropDownRef.current != event.target) && (dropDownRef2.current != event.target) && (dropDownRef3.current != event.target)) {
                  setToggleNavBar(false)
                }
              }}
            >
              <i onClick={() => setToggleNavBar(!toggleNavBar)} className='fa-solid fa-bars'></i>
            </OutsideClickHandler>
          </div>
        
        </nav>
      </div>
   </>
  )
}

export default NavBar