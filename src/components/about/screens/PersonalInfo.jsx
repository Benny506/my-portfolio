import React from "react";
import { RxCross2 } from "react-icons/rx";
import { FaFolderOpen } from "react-icons/fa";
import CustomScroll from "../../scroll/CustomScroll";

const personalInfoArr = [
    'About me.',
    'FullStack developer',
    'Stacks are react, node, sql, express.',
    '5 years of professional experience.',
    'CTO at Control Genesis LTD.',
    'Great team player',
    'Fast learner',
    'Possess a high value output.',
    'Extremely time concious.'
]



export default function PersonalInfo({ onShowOffCanvasNav }){

    const displayPersonalData = personalInfoArr.map((info, i) => (
        <p
            key={i}
            className="d-flex align-items-center txt-607B96 regular-txt"
        >
            <span className="">
                {i+2}
            </span>

            <span className="mx-5">
                <span>*</span>
                <span className="mx-2">{info}</span>
            </span>
        </p>
    ))

    return (
        <div 
            style={{ maxHeight: '80vh', minHeight: '80vh' }}
            className="w-100 h-100 d-flex flex-column justify-content-between"
        >
            <div 
                className="border-bottom-light-1E2D3D border-right-light-1E2D3D d-flex align-items-stretch justify-content-lg-start justify-content-md-between justify-content-between"
            >
                <div className="col-lg-4 col-md-10 col-10 p-3 d-flex align-items-center justify-content-between border-right-light-1E2D3D">
                    <p className="m-0 p-0 regular-txt txt-607B96">personal-info</p>
                    <RxCross2 size={18} color="607B96" />
                </div>

                <div onClick={onShowOffCanvasNav} className="pointer d-lg-none col-2 col-md-2 d-md-flex d-flex align-items-center justify-content-center">
                    <FaFolderOpen size={18} color="607B96" />
                </div>
            </div>

            <div className="overflow-lg-auto overflow-md-auto overflow-auto">
                <div className="px-lg-5 px-md-5 px-4 py-lg-4 py-md-4 py-4">
                    <div>
                        <p className="d-flex align-items-center txt-607B96 regular-txt mb-2">
                            <span className="">1</span>
                            <span className="mx-4">/**</span>
                        </p>
                        { displayPersonalData }
                        <p className="d-flex align-items-center txt-607B96 regular-txt mb-2">
                            <span className="">{personalInfoArr.length + 2}</span>
                            <span className="mx-4">**/</span>
                        </p>                        
                    </div>
                </div>
            </div>
        </div>
    )
}