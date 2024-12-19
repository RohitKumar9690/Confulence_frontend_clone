import React from 'react'
import { AiOutlineProduct } from 'react-icons/ai';
import { FaGithub, FaGooglePlus, FaLinkedin } from 'react-icons/fa'
import { FaAndroid } from "react-icons/fa";
import { ImProfile } from 'react-icons/im';

const GridMenu = () => {
    return (
        <div className="flex">
            <div className=" bg-white p-4">
                <div className="flex items-center mb-6">
                    <div className=" bg-blue-200 mr-3 mb-4 text-sm p-1 rounded-full flex items-center justify-center text-blue-700 font-bold">
                        Me
                    </div>
                    <div >
                        <div className="font-bold text-lg">
                            Rohit kumar
                        </div>
                        <div className="text-sm text-gray-500">
                            rohit@gmail.com
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <div className="text-gray-500 text-xs font-bold mb-2">
                        CONTACT ME
                    </div>
                    <a href='https://github.com/RohitKumar9690' className="flex items-center mb-4">
                        <FaGithub className="w-6 h-6" height="24" width="24" />
                        <div className="ml-4 text-sm font-medium">
                            RohitKumar9690
                        </div>
                    </a>
                    <a href='https://www.linkedin.com/in/rohit-kumar-a40901274' className="flex items-center mb-4">
                        <FaLinkedin className="w-6 h-6" height="24" width="24" />
                        <div className="ml-4 text-sm font-medium">
                            ROHIT KUMAR
                        </div>
                    </a>
                    <a href='https://rohitkumar-portfolio-9690.netlify.app/' className="flex items-center mb-4">
                        <ImProfile className="w-6 h-6" height="24" width="24" />
                        <div className="ml-4 text-sm font-medium">
                            PORTFOLIO
                        </div>
                    </a>
                    <a href="mailto:rpal46515@gmail.com" className="flex items-center mb-4">
                        <FaGooglePlus className="w-6 h-6" height="24" width="24" />
                        <div className="ml-4 text-sm font-medium">
                            EMAIL
                        </div>
                    </a>


                </div>
                <div className="mb-6">
                    <div className="text-gray-500 text-xs font-bold mb-2">
                        RECOMMENDED FOR YOUR TEAM
                    </div>
                    <div className="flex items-center mb-4">
                        <FaAndroid className="w-6 h-6" height="24" width="24" />
                        <div className="ml-4">

                            <div className="text-sm font-medium">
                                app
                            </div>
                            <div className="text-xs text-gray-500">
                                Prioritize, collaborate, and deliver new ideas
                            </div>
                        </div>
                        <div className="ml-auto">
                            <i className="fas fa-ellipsis-h text-gray-500">
                            </i>
                        </div>
                    </div>
                    <div className="flex items-center mb-4">

                        <AiOutlineProduct className="w-6 h-6" height="24" width="24" />
                        <div className="ml-4 text-sm font-medium">
                            More products
                        </div>
                    </div>
                </div>
                {/* <div>
            <div className="text-gray-500 text-xs font-bold mb-2">
                MORE
            </div>
            <div className="flex items-center mb-4">
                <img alt="Jira icon" className="w-6 h-6" height="24" src="https://storage.googleapis.com/a1aa/image/exbohHEdyYxgAqBQscZQfQ3oeWtXPaLJeZgGs1Wmcwt1NSoPB.jpg" width="24" />
                <div className="ml-4 text-sm font-medium">
                    J
                </div>
            </div>
            <div className="flex items-center mb-4">
                <img alt="Confluence icon" className="w-6 h-6" height="24" src="https://storage.googleapis.com/a1aa/image/DyYMGQzQtWJPNB7DF21zm58MJLG72m6bKwMbDMhSjcX4IheJA.jpg" width="24" />
                <div className="ml-4 text-sm font-medium">
                    C
                </div>
            </div>
        </div> */}
            </div>
        </div>
    )
}

export default GridMenu