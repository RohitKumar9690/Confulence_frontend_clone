import React, { useState } from 'react'
import { FaChevronRight, FaComment, FaDotCircle, FaEye, FaLink, FaPencilAlt } from 'react-icons/fa'
import SharePage from '../components/reuseable-components/sharepage'
import { BsThreeDots } from "react-icons/bs";



const DocumentPage = () => {
  const [IsShare, SetisShare] = useState()
const [IsMoreOption,SetIsMoreOption] = useState()
  const shareHasndle = () => {
    SetisShare(!IsShare)
  }

  const MoreOption = () => {
    SetIsMoreOption(!IsMoreOption)
  }
  return (
    <div className=' flex-1 p-6 scrollable-content'>
      <div class="flex items-center justify-between p-2">
        <button class="bg-blue-500 text-white px-2 py-1 rounded">Space name</button>
        <div class="flex items-center space-x-3">
          <FaPencilAlt class="fas fa-pencil-alt text-gray-500" />
          <FaComment class="fas fa-comment text-gray-500" />
          <FaEye class="fas fa-eye text-gray-500" />
          <FaLink class="fas fa-link text-gray-500" />
          <button class="bg-blue-500 text-white px-2 py-1 rounded" onClick={shareHasndle}>Share</button>
          {IsShare && (
        <div className="fixed top-32 right-4 bg-white shadow-lg rounded-md border border-gray-300 z-10">
        <SharePage />
      </div>
      
          )
          }
          <button className="text-gray-700 px-2 py-1 rounded " onClick={MoreOption}><BsThreeDots/></button>
          {IsMoreOption && (
        <div className="fixed top-32 right-4 bg-white shadow-lg rounded-md border border-gray-300 z-10">
      <ul className="space-y-1 items-center">
        <li className="hover:bg-gray-100 p-2 rounded text-sm">Copy</li>
        <li className="hover:bg-gray-100 p-2 rounded text-sm">Move</li>
        <li className="hover:bg-gray-100 p-2 rounded flex justify-between items-center text-sm">
          <span>Export</span>
          <FaChevronRight size={10}/>
        </li>
        <li className="hover:bg-gray-100 p-2 rounded text-sm">Download</li>
        <li className="hover:bg-gray-100 p-2 rounded text-sm">Archive</li>
        <li className="hover:bg-gray-100 p-2 rounded flex justify-between items-center text-sm  border-t border-b border-gray-300">
          <span>Presenter mode</span>
          <div className="border border-gray-400 rounded px-1">r</div>
        </li>
        <li className="hover:bg-gray-100 p-2 rounded text-sm">Page history</li>
        <li className="hover:bg-gray-100 p-2 rounded flex justify-between items-center text-sm">
          <span>View ownership</span>
          <i className="fas fa-chevron-right"></i>
          <FaChevronRight size={10}/>
        </li>
        <li className="hover:bg-gray-100 p-2 rounded flex justify-between items-center text-sm">
          <span>Attachments</span>
          <i className="fas fa-chevron-right"></i>
          <FaChevronRight size={10}/>
        </li>
        <li className="hover:bg-gray-100 p-2 rounded flex justify-between items-center text-sm">
          <span>Resolved comments</span>
          <span className="bg-gray-200 text-sm text-gray-600 rounded-full px-1 ml-3">0</span>
        </li>
        <li className="hover:bg-gray-100 p-2 rounded flex justify-between items-center text-sm">
          <span>Advanced details</span>
          <i className="fas fa-chevron-right"></i>
          <FaChevronRight size={10}/>
        </li>
        <li className="hover:bg-gray-100 p-2 rounded text-sm  border-t border-b border-gray-300">Slack Notifications</li>
      </ul>
    </div>
          )
          }
        </div>
      </div>
      </div>
  )
}

export default DocumentPage