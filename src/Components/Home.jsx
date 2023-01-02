import React from 'react'
import HeroImage from '../assets/heroimg.jpg'
import { FaDownload } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const Home = () => {

  return (
    <div name="home" className='lg:h-screen bg-gradient-to-b from-black via-black to-gray-800 text-gray-500'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

                  <div className='flex flex-col justify-center h-full'>
                  <h1 className='text-1xl sm:text-3xl font-bold text-white pt-2 m-2 pb-2 inline-block'>Helo, World</h1>

                    <h1 className='text-3xl sm:text-6xl font-bold text-white pt-2 m-2 pb-2 inline-block'>Aniket Pratap Singh</h1>

                      <h1 className='text-2xl sm:text-4xl font-bold text-white pt-2 m-2 pb-2 inline-block'> and I'm a <span className='text-pink-600 inline-block' >
                         <Typewriter
                                                          options={{
                                                            strings: ['Fullstack Developer', 'Javascript Developer' , 'Frontend Developer' , 'Backend Developer' , 'React Developer'],
                                                            autoStart: true,
                                                            loop: true,
                                                            // cursor:String()
                                                          }}/>
                                                          </span>
                                                          </h1>



                                                                              
                                                        

                      <p> Responsible for working on both front-end and back-end development processes. Able to design, develop and maintain fully-fledged and function platforms with databases or servers.
                      </p>

                      <div>
                        <a href="Aniket Pratap Singh Resume.pdf" target='_blank'>
                        <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md justify-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer mt-3' >
                      Download Resume
                      <span className='px-2'>
                        <FaDownload />
                        
                      </span>
                    
                    </button>

                        </a>

                   
                      </div>
                  </div>



                  <div>

                  <img src={HeroImage} alt='mypic' className='rounded-2xl mx-auto w-2/3 md:w-half' style={{maxHeight:"148vh"}}/>

                  </div>
            </div>

      
    </div>
  )
}

export default Home
