import React,{useState} from 'react';
import { BsMicMute } from "react-icons/bs";
import { FaRegHandPaper } from "react-icons/fa";
import { CiVideoOff } from "react-icons/ci";
import { BsChatLeftText } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import MyModal from './MyModel';


const VideoInterview = () => {
const  [showMyModel , setShowMyModal] = useState(false);
const handleOnclose = () => setShowMyModal(false)
 return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-950 p-4 flex justify-center items-start min-h-screen">
      <div className="bg-gradient-to-b from-gray-400 to-gray-600 p-6 rounded-lg shadow-lg w-full max-w-4xl max-h-max">
        {/* Left section (Person in Black) */}
        <div className="flex flex-row justify-between space-x-4">
          <div className="flex-1 flex items-center justify-center bg-blue-700 p-4 rounded-lg">
            <div className="text-white text-center">
              <img src="path_to_black_suit_person_image" alt="Person" className="w-48 mx-auto rounded-lg mb-4" />
              {/* Text below the image */}
              <p>Interviewer</p>
            </div>
          </div>
          <MyModal onclose={handleOnclose} visible={showMyModel}/>  
          {/* Right section (Person on Video Call) */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="bg-gray-300 w-full h-48 rounded-lg flex justify-center items-center mb-4">
              <img src="path_to_interviewee_image" alt="Interviewee" className="w-40 h-40 rounded-lg object-cover" />
            </div>

            {/* Icons for the control */}
            <div className="flex space-x-4">
              <button className="bg-gray-200 p-2 rounded-full">
                <BsMicMute/> 
              </button>
              <button className="bg-gray-200 p-2 rounded-full">
                <FaRegHandPaper/> 
              </button>
              <button className="bg-gray-200 p-2 rounded-full">
                <CiVideoOff />
              </button>
              <button className="bg-gray-200 p-2 rounded-full">
                <BsChatLeftText/>
              </button>
              <button className="bg-red-600 p-2 rounded-full" onClick={() => setShowMyModal(true)}>
                < MdCancel/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoInterview;
