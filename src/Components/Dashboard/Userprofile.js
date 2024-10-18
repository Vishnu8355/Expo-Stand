import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import Asidebar from './Asidebar'


function Userprofile() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };




    return (
        <>
            <Navbar />
            <Asidebar />
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <main className="profile-page mt-56">
                        <section className="relative block h-500-px">
                            <div
                                className="absolute top-0 w-full h-full bg-center bg-cover"
                                style={{
                                    backgroundImage:
                                        'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")'
                                }}
                            >
                                <span
                                    id="blackOverlay"
                                    className="w-full h-full absolute opacity-50 bg-black"
                                />
                            </div>
                            <div
                                className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                                style={{ transform: "translateZ(0px)" }}
                            >
                                <svg
                                    className="absolute bottom-0 overflow-hidden"
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                    version="1.1"
                                    viewBox="0 0 2560 100"
                                    x={0}
                                    y={0}
                                >
                                    <polygon
                                        className="text-blueGray-200 fill-current"
                                        points="2560 0 2560 100 0 100"
                                    />
                                </svg>
                            </div>
                        </section>
                        <section className="relative py-16 bg-blueGray-200">
                            <div className="container mx-auto px-4">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                                    <div className="px-6">
                                        <div className="flex flex-wrap justify-center">
                                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                                <div className="relative">
                                                    <img
                                                        alt="..."
                                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThydjPP-iirqwIDHUkRCEo-n6zQGnPLR8nzA&s"
                                                        className=" rounded-full h-auto align-middle border-none  mt-1 -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                                <div className="py-6 px-3 mt-32 sm:mt-0">
                                                    <button
                                                        onClick={toggleModal}

                                                        className="bg-pink-500 font-[pippins] float-right mr-10 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                    >
                                                        update Profile
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="text-center mt-12">
                                            <h3 className="text-4xl font-semibold leading-normal mb-2 font-[poppins] text-blueGray-700 mb-2">
                                                Vishnu Tiwari
                                            </h3>
                                            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-[poppins]  font-bold uppercase">
                                                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                                                Noida Sector-66
                                            </div>
                                            <div className="mb-2 text-blueGray-600  font-[poppins]">
                                                <i className="fas fa-briefcase mr-2 text-lg  text-blueGray-400" />
                                                Frontend Developer
                                            </div>
                                            <div className="mb-2 text-blueGray-600 font-[poppins]">
                                                <i className="fas fa-university mr-2  text-lg text-blueGray-400" />
                                                ND Techland Pvt Ltd
                                            </div>

                                            <div className="w-full  px-4">
                                                <p className="mb-4 text-lg font-[poppins] text-center leading-relaxed text-blueGray-700">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                </p>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </section>
                    </main>




                </div>
            </div>



            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                    <div className="w-full   px-4">
                        <div className='flex justify-between'>
                        <h2 className="text-3xl mb-4 font-[poppins]">Register</h2>
                        <button
                            onClick={toggleModal}
                            className="h-8 px-2 text-white bg-red-600 rounded hover:bg-red-700"
                        >
                            X
                        </button>
                        </div>
                            
                           
                            <form action="#">
                                
                                <div className="mt-5">
                                    <input
                                        type="text"
                                        placeholder="Enter Name"
                                        className="border border-gray-400 py-1 px-2 w-full font-[poppins]"
                                    />
                                </div>
                                <div className="mt-5">
                                    <input
                                        type="text"
                                        placeholder="Enter Mobile No"
                                        className="border border-gray-400 py-1 px-2 w-full font-[poppins]"
                                    />
                                </div>
                                <div className="mt-5">
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        className="border border-gray-400 py-1 px-2 w-full font-[poppins]"
                                    />
                                </div>
                               
                               
                                
                                <div className="mt-5">
                                    <button className="w-full bg-purple-500 py-3 font-[poppins] text-xl text-center text-white">
                                        Submit Here
                                    </button>
                                </div>
                            </form>
                        </div>
                       
                    </div>
                </div>
            )}

        </>
    )
}

export default Userprofile





