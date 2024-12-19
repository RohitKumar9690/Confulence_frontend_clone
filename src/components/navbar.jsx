import { PiLinkSimpleFill, PiStarFill } from "react-icons/pi";
import { FaBell, FaChevronRight, FaExternalLinkAlt, FaGithub, FaLinkedin, FaPlus, FaQuestionCircle, FaSearch, FaUser } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowDropright } from "react-icons/io";
import { useState } from "react";
import { AiOutlineTeam } from "react-icons/ai";
import GridMenu from "./reuseable-components/gridMenu";
import RecentDocsHomepage from "./reuseable-components/homepage-recentsdocuments";
import { CgNotes } from "react-icons/cg";
import { LiaBlogger, LiaFlipboard } from "react-icons/lia";
import { TbFileDatabase } from "react-icons/tb";
import { GoPlus } from "react-icons/go";

const Navbar = () => {
    const [isMenu, SetisMenu] = useState(false);
    const [isTapped, setIsTapped] = useState(false);
    const [isSpacesTapped, setIsSpacesTapped] = useState(false);
    const [isTeamTapped, setIsTeamTapped] = useState(false);
    const [isAppTapped, setIsAppTapped] = useState(false);
    const [isCreate, setIsCreate] = useState(false);
    const [isProfileMenu, setIsProfileMenu] = useState(false);
    const recentDocs = ['Document 1', 'Document 2', 'Document 3', 'Document 4']; // Example docs
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    const filteredDocs = recentDocs.filter(doc =>
        doc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const toggleDropdown = (dropdown) => {
        switch (dropdown) {
            case "recent":
                setIsTapped(prev => !prev);
                break;
            case "spaces":
                setIsSpacesTapped(prev => !prev);
                break;
            case "teams":
                setIsTeamTapped(prev => !prev);
                break;
            case "apps":
                setIsAppTapped(prev => !prev);
                break;
            case "menu":
                SetisMenu(prev => !prev);
                break;
            case "create":
                setIsCreate(prev => !prev);
                break;
            case "profile":
                setIsProfileMenu(prev => !prev);
                break;
            case "mobile":
                setIsMobileMenuOpen(prev => !prev);
                break;
            default:
        }
        if (dropdown !== "recent") setIsTapped(false);
        if (dropdown !== "spaces") setIsSpacesTapped(false);
        if (dropdown !== "teams") setIsTeamTapped(false);
        if (dropdown !== "apps") setIsAppTapped(false);
        if (dropdown !== "menu") SetisMenu(false);
        if (dropdown !== "create") setIsCreate(false);
        if (dropdown !== "profile") setIsProfileMenu(false);

    };

    return (<>
        <div className="bg-white shadow-sm sticky top-0 z-10">
            <div className="px-4 py-0 flex justify-between items-center">
                <nav className="flex items-center space-x-3">
                    <button className={`p-1 rounded-full ${isMenu ? 'bg-blue-50 hover:bg-blue-100' : ' text-gray-600 hover:bg-gray-300'}`}  > <CgMenuGridO size={25} className={`${isMenu ? ' text-blue-700' : ' text-gray-600'}`} onClick={() => toggleDropdown("menu")} />
                        {isMenu && <div className="absolute top-12 left-4 bg-white shadow-md p-2 rounded-md items-center">
                            <GridMenu />
                        </div>
                        }</button>
                    <Link to="/" className="flex hover:bg-gray-200 text-2xl font-semibold px-2 py-1 rounded-md"> <span className="mr-2"><svg fill="none" height="32" viewBox="0 0 32 32" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#357DE8" d="M25.769 20.234c-6.584-3.183-8.507-3.66-11.282-3.66-3.254 0-6.028 1.355-8.507 5.16l-.406.622c-.333.513-.407.696-.407.915s.11.403.517.659l4.18 2.598c.222.146.407.22.592.22.222 0 .37-.11.592-.44l.665-1.024c1.036-1.574 1.96-2.086 3.144-2.086 1.036 0 2.257.293 3.773 1.025l4.365 2.049c.443.22.924.11 1.146-.403l2.071-4.537c.222-.512.074-.842-.444-1.098M6.572 12.22c6.584 3.184 8.507 3.66 11.281 3.66 3.255 0 6.03-1.354 8.507-5.16l.407-.622c.333-.512.407-.695.407-.915s-.11-.402-.518-.658l-4.18-2.598c-.221-.147-.406-.22-.591-.22-.222 0-.37.11-.592.44l-.666 1.024c-1.035 1.573-1.96 2.086-3.144 2.086-1.035 0-2.256-.293-3.772-1.025L9.346 6.183c-.444-.22-.924-.11-1.146.402l-2.072 4.538c-.222.512-.074.841.444 1.098"></path>
                    </svg></span><span className="hidden md:block">Confluence</span></Link>

                    <Link className=" text-gray-600 text-sm px-1 py-1 rounded font-semibold hover:bg-gray-300" to="/">
                        Home
                    </Link>
                    <div className={` hidden md:block  px-1 py-1 rounded text-sm font-semibold ${isTapped ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' : ' text-gray-600 hover:bg-gray-300'}`} >
                        <div className="flex items-center">  Recent<IoIosArrowDown size={12} className=" ml-1" onClick={() => toggleDropdown('recent')} />
                        </div>
                    </div>

                    {isTapped && (
                        <div className={`absolute w-auto bg-white shadow-lg rounded-md border border-gray-300  ${isMobileMenuOpen ? "top-20 left-60 z-20" : "top-12 left-60 z-10"}`}>
                            <RecentDocsHomepage />
                            {/* View All Link */}
                            <div className="bg-white items-center mt-1 mb-1">
                                <Link className=" hover:bg-gray-200 flex py-3 px-4 " to="/recents">
                                    View all
                                </Link>
                            </div>
                        </div>
                    )}
                    <div className={`hidden md:block items-center px-1 py-1 rounded text-sm font-semibold ${isSpacesTapped ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' : ' text-gray-600 hover:bg-gray-300'}`} to="#">
                        <div className="flex items-center"> Spaces <IoIosArrowDown size={12} className="ml-1" onClick={() => toggleDropdown('spaces')} /></div>
                    </div>
                    {isSpacesTapped && (
                        <div className={`absolute w-48 bg-white shadow-lg rounded-md border border-gray-300 ${isMobileMenuOpen ? "top-28 left-60 z-20" : "top-12 left-72 z-10"}`}>
                            <div>
                                <h2 className="ml-2 py-2 text-sm text-gray-700 font-mono">STARRED</h2>

                            </div>
                            <div class="mt-4">
                                <button class="w-full py-2 text-gray-700 hover:bg-gray-100">
                                    View all spaces
                                </button>
                                <button class="w-full py-2 text-gray-700 hover:bg-gray-100 mb-1">
                                    Create a space
                                </button>
                            </div>
                        </div>
                    )}
                    <div className={`hidden md:block items-center px-1 py-1 rounded text-sm font-semibold ${isTeamTapped ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' : ' text-gray-600 hover:bg-gray-300'}`}>
                        <div className="flex items-center"> Teams <IoIosArrowDown size={12} className="ml-1" onClick={() => toggleDropdown('teams')} /></div>

                    </div> {isTeamTapped && (
                        <div className={`absolute top-12 w-auto shadow-lg bg-white rounded-md z-10 ${isMobileMenuOpen ? "top-36 left-60 z-20" : "top-12 left-72 z-10"}`}>
                            <div>
                                <h2 className="ml-2 py-2 text-sm text-gray-700 font-mono">Your Collaborators</h2>
                                <h1 className="p-4 text-gray-700">members </h1>
                            </div>
                            <div class="border-t-2 border-gray-200 border-b-2">
                                <button class="flex w-full py-3 px-6 text-gray-700 items-center hover:bg-gray-100 mt-1">
                                    <FaPlus size={13} className="mr-4" />  invite people to confulence
                                </button>
                                <button class="flex items-center w-full py-3 px-6  text-gray-700 hover:bg-gray-100 mb-1">
                                    <AiOutlineTeam className="mr-2" /> Create a Team
                                </button>
                            </div>
                            <button class="flex w-full py-3 px-6  text-gray-700 hover:bg-gray-100 mt-2 mb-2">
                                Search people and Teams
                            </button>
                        </div>
                    )}
                    <div className={`hidden md:block items-center px-1 py-1 rounded text-sm font-semibold ${isAppTapped ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' : ' text-gray-600 hover:bg-gray-300'}`}>
                        <div className="flex items-center">Apps <IoIosArrowDown
                            size={12}
                            className="ml-1"
                            onClick={() => toggleDropdown("apps")} /></div>

                    </div> {isAppTapped && (
                        <div className={`absolute w-48 bg-white shadow-lg rounded-md border border-gray-300 ${isMobileMenuOpen ? "top-44 left-64 z-20" : "top-12 left-96 z-10"}`}>
                            <div class="mt-4">
                                <button class="w-full py-2 text-gray-700 hover:bg-gray-100">
                                    App 1
                                </button>
                                <button class="w-full py-2 text-gray-700 hover:bg-gray-100 mb-1">
                                    App 2
                                </button>
                            </div>
                        </div>
                    )}
                    <Link className="hidden md:block text-gray-600 text-sm  px-1 py-1 rounded font-semibold hover:bg-gray-300" to="/template">
                        Templates
                    </Link> {/* Mobile "More" Button */}
                    <button
                      className={`md:hidden text-sm px-1 py-1 rounded font-semibold  ${isMobileMenuOpen ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' : ' text-gray-600 hover:bg-gray-300'}`} 
                        onClick={() => toggleDropdown("mobile")}
                    >
                       <div className="flex items-center">More <IoIosArrowDown size={12} className="ml-1" />
                       </div> 
                    </button>
                    <button className="flex items-center bg-blue-600 text-white rounded-sm py-2 px-3 text-sm font-semibold m-2" onClick={() => toggleDropdown("create")}>
                        <BsPlusLg className="mr-2" size={17} /><span className="hidden md:block">Create</span>
                        {
                            isCreate && (
                                <div className="absolute top-12 m-2 w-48 bg-white shadow-lg rounded-md border border-gray-300 z-10">
                                    {/* Page Item */}
                                    <div className="flex items-center p-2 space-x-2 hover:bg-gray-100">
                                        <CgNotes size={20} className="mr-1 text-blue-700" />
                                        <span className="text-gray-800">Page</span>
                                    </div>

                                    {/* Whiteboard Item */}
                                    <div className="flex items-center space-x-2 p-2 hover:bg-gray-100">
                                        <LiaFlipboard size={20} className="mr-1 text-green-700" />
                                        <span className="text-gray-800">Whiteboard</span>
                                    </div>

                                    {/* Database Item */}
                                    <div className="flex items-center space-x-2 p-2 hover:bg-gray-100">
                                        <TbFileDatabase size={20} className="mr-1 text-purple-400" />
                                        <span className="text-gray-800">Database</span>
                                    </div>

                                    {/* Blog Item */}
                                    <div className="flex items-center space-x-2 p-2 hover:bg-gray-100">
                                        <LiaBlogger size={20} className="mr-1 text-yellow-400" />
                                        <span className="text-gray-800">Blog</span>
                                    </div>

                                    {/* Smart Link Item */}
                                    <div className="flex items-center space-x-2 p-2 hover:bg-gray-100">
                                        <PiLinkSimpleFill size={20} className="mr-1 text-gray-400" />
                                        <span className="text-gray-800">Smart Link</span>
                                    </div>

                                    {/* Space Item with border top */}
                                    <div className="border-t pb-1 pt-1">
                                        <div className="flex items-center space-x-2 p-2 hover:bg-gray-100">
                                            <GoPlus size={20} className="mr-1 text-blue-400" />
                                            <span className="text-gray-800">Space</span>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    </button>

                </nav>

                {/* Right section with buttons and user avatar */}
                <div className="flex items-center space-x-4">
                    <button className="flex text-blue-500 border items-center py-1 px-2 border-blue-500">
                        <PiStarFill className="mr-2" />
                      <span className="hidden md:block">Premium</span>  
                    </button>
                    <button className="text-gray-600">
                        <FaSearch />
                    </button>
                    <button className="text-gray-600">
                        <FaQuestionCircle />
                    </button>
                    <button className="text-gray-600">
                        <FaBell />
                    </button>



                    {/* Mobile Menu Dropdown */}
                    {isMobileMenuOpen && (
                        <div className="absolute top-12 left-44 bg-white shadow-md rounded-md z-10 w-auto">
                            <div className={`flex items-center text-sm p-2 ${isTapped ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' : ' text-gray-600 hover:bg-gray-300'}`} onClick={() => toggleDropdown('recent')}>
                                Recent <FaChevronRight className="ml-4" size={12} />
                            </div>
                            <div className={`flex items-center text-sm p-2 ${isSpacesTapped ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' : ' text-gray-600 hover:bg-gray-300'}`} onClick={() => toggleDropdown('spaces')}>
                                Spaces <FaChevronRight className="ml-4" size={12} />
                            </div>
                            <div className={`flex items-center text-sm p-2 ${isTeamTapped ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' : ' text-gray-600 hover:bg-gray-300'}`} onClick={() => toggleDropdown('teams')}>
                                Teams <FaChevronRight className="ml-4" size={12} />
                            </div>
                            <div className={`flex items-center text-sm  p-2 ${isAppTapped ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' : ' text-gray-600 hover:bg-gray-300'}`} onClick={() => toggleDropdown('apps')}>
                                Apps <FaChevronRight className="ml-4" size={12} />
                            </div>
                            <div className={`flex items-center text-sm text-gray-900 hover:bg-gray-100 p-2`} onClick={() => toggleDropdown('recent')}>
                                <Link className="text-sm text-gray-900 hover:bg-gray-100" to="/template">Templates</Link>
                            </div>
                        </div>
                    )}
                    <img
                        alt="User avatar"
                        className="rounded-full"
                        height="30"
                        src="https://storage.googleapis.com/a1aa/image/iN2desGUbBR8BSm1uvQiMi82dCyeffWtJsWg7JPrd7quRqUPB.jpg"
                        width="30"
                        onClick={() => toggleDropdown("profile")}
                    />
                    {
                        isProfileMenu && (
                            <div className="absolute top-12 right-2 w-64 bg-white shadow-lg shadow-gray-500 rounded-md  z-10">
                                <div className="">
                                    {/* Account Section */}
                                    <div className="mb-1">
                                        <h2 className="text-xs font-semibold text-gray-600 mt-3 ml-3">
                                            Account
                                        </h2>
                                        <div className="flex items-center p-3">
                                            <img
                                                alt="Profile picture"
                                                className="w-7 h-7 rounded-full"
                                                height="30"
                                                src="https://storage.googleapis.com/a1aa/image/fGtTyLs6ervjHUf6NbKGdSUKQbXgBJmXnGeNtpBJ6p6ixaxPB.jpg"
                                                width="30"
                                            />
                                            <div className="ml-1 p-2">
                                                <p className="text-xs font-medium text-gray-900">
                                                    username
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    usergmail@gmail.com
                                                </p>
                                            </div>
                                        </div>
                                        <div className="justify-between items-center flex hover:bg-gray-100 p-2">
                                            <span className="text-sm " to="/">
                                                Manage Account
                                            </span>
                                            <FaExternalLinkAlt className="mr-2" size={10} />
                                        </div>
                                    </div>

                                    {/* Help us improve Section */}
                                    <div className="border-t border-b border-gray-200  ">
                                        <h2 className="text-xs font-semibold text-gray-600 p-2 ">
                                            Help us improve
                                        </h2>
                                        <a className="text-sm text-gray-900 block  hover:bg-gray-100 p-2 mb-1" href="#">
                                            Send feedback
                                        </a>
                                    </div>

                                    {/* Confluence Section */}
                                    <div className="border-b border-gray-200">
                                        <h2 className="text-xs font-semibold text-gray-600 mt-3 ml-2">
                                            Confluence
                                        </h2>
                                        <ul className="mt-2 mb-1">
                                            <li>
                                                <a className="flex text-sm text-gray-900 hover:bg-gray-100 p-2" href="#">
                                                    Personal Space
                                                </a>
                                            </li>
                                            <li>
                                                <a className="flex text-sm text-gray-900  hover:bg-gray-100 p-2" href="#">
                                                    Profile
                                                </a>
                                            </li>
                                            <li>
                                                <a className="flex text-sm text-gray-900 hover:bg-gray-100 p-2" href="#">
                                                    Tasks
                                                </a>
                                            </li>
                                            <li>
                                                <a className="flex text-sm text-gray-900 hover:bg-gray-100 p-2" href="#">
                                                    Personal settings
                                                </a>
                                            </li>
                                            <li className="flex justify-between items-center hover:bg-gray-100 p-2">
                                                <a className="flex text-sm text-gray-900 " href="#">
                                                    Theme
                                                </a>
                                                <FaChevronRight size={10} className="text-gray-500 mr-2" />
                                            </li>
                                            <li>
                                                <a className="flex text-sm text-gray-900 hover:bg-gray-100 p-2" href="#">
                                                    Slack
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mb-1 mt-1">
                                        <a className="flex p-2 text-sm text-gray-900 hover:bg-gray-100" href="#">
                                            Log Out
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    </>
    )
}
export default Navbar