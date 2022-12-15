import React, { useState } from 'react'
import { FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'
const Navbar = () => {

    const [nav , setNav] = useState(true)
    const [color , setColor] = useState('bg-black')

    const links=[

        {

            id:1,
            link:"home"
        },
        {

            id:2,
            link:"about"
        },
        {

            id:3,
            link:"works"
        },
        {

            id:4,
            link:"experience"
        }
        ,
        {

            id:5,
            link:"contact"
        }
    ]





    const OnScroll = () =>{


        if(window.scrollY > 703){


            setColor('bg-red-300')

        }
        if(window.scrollY <= 703){

            setColor('bg-black')

        }
    }

    window.addEventListener('scroll', OnScroll)
  return (

    <>
    
    <div className={`flex justify-between items-center w-full h-20 text-white ${color} sticky top-0`}>
      <h1 className='text font-signature pl-3'> </h1>
<ul className='hidden md:flex'>    


      {links.map( ({id , link}) => (


      <li key={id} className='px-4 cursor-pointer capitalize text-gray-500 font-medium hover:scale-105'>
        <Link to={link} smooth duration={500}>{link}</Link>
        </li>

       ))}
</ul>



    <div onClick={() => { setNav(!nav)}} className='cursor-pointer z-10 text-gray-500 pr-4  md:hidden'> 

    
    { nav ? <FaBars size={30} /> : <FaTimes size={30} /> }

    </div>



{!nav && ( <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b  from-black to-gray-800 text-gray-500'>
{links.map( ({id , link}) => (


<li key={id} className='px-4 cursor-pointer capitalize text-4xl py-6'>
<Link onClick={ () => { setNav(!nav)}} to={link} smooth duration={500}>{link}</Link>

</li>

 ))}
</ul>) }

    </div>
    

    </>
  )
}

export default Navbar
