import React from 'react'

const DocsCard= () => {
  return (
    <div className="border border-solid border-gray-300 p-4 rounded-md mb-4">
                        <div className="flex mb-2">
                            <div className="w-full">
                                {/* User info section */}
                                <div className="flex justify-between items-center mb-4">
                                    <img
                                        alt="User avatar"
                                        className="rounded-full mr-4"
                                        height="30"
                                        src="https://storage.googleapis.com/a1aa/image/iN2desGUbBR8BSm1uvQiMi82dCyeffWtJsWg7JPrd7quRqUPB.jpg"
                                        width="30"
                                    />
                                    {/* User info and '5 recent actions' */}
                                    <div className="w-full">
                                        {/* Full-width border container */}
                                        <div className="border-b w-full border-solid border-gray-300">
                                            <div className="flex justify-between items-center py-2">
                                                <div className="flex items-center">
                                                    <span className="text-sm font-bold mx-1 text-gray-500">username</span>
                                                    <span className="text-sm font-normal mx-1 text-gray-500">updated 3 times</span>
                                                    • <span className="text-sm font-normal mx-1 text-gray-500">November 14, 2024</span>
                                                </div>
                                                <span className="text-gray-400 text-sm">
                                                    5 recent actions
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-blue-600 font-bold ml-12">Team name</h3>
                                <p className="text-gray-600  ml-12">
                                    owner name • department name
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-600  ml-12">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, doloremque quo, ullam tempore dicta maiores quod esse exercitationem corrupti assumenda quos est mollitia totam recusandae laudantium ut ipsum iste consectetur.
                        </p>
                    </div>
  )
}

export default DocsCard