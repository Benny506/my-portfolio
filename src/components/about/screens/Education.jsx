import React from "react";
import { RxCross2 } from "react-icons/rx";
import CustomScroll from "../../scroll/CustomScroll";
import { FaFolderOpen } from "react-icons/fa";

const highSchoolEducation = [
    'High School Education',
    'University Of Calabar secondary school',
    '(U.C.I.D.S.S)',
    '',
    'Graduated in October 2021/2022 session'
]

const collegeEducation = [
    'College Education',
    'University Of Calabar',
    'U.N.I.C.A.L',
    '',
    'Studying Computer Science',
    '300lvl',
    'Graduating in September 2025'
]



export default function Education({ type, onShowOffCanvasNav }){

    const getEducation = () => type == 'highSchool' ? highSchoolEducation : collegeEducation

    const displayEducation = getEducation().map((info, i) => (
        <p
            key={i}
            className={`d-flex txt-607B96 align-items-center regular-txt`}
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
            className="w-100 h-100 d-flex flex-column border-right-light-1E2D3D"
        >
            <div 
                className="border-bottom-light-1E2D3D border-right-light-1E2D3D d-flex align-items-stretch justify-content-start"
            >
                <div className="col-lg-4 col-md-4 col-10 p-3 d-flex align-items-center justify-content-between border-right-light-1E2D3D">
                    <p className="m-0 p-0 regular-txt txt-607B96">education</p>
                    <RxCross2 size={18} color="607B96" />
                </div>

                <div onClick={onShowOffCanvasNav} className="pointer d-lg-none col-2 d-md-block d-flex align-items-center justify-content-center">
                    <FaFolderOpen size={18} color="607B96" />
                </div>
            </div>

            <div style={{ overflowY: 'auto'}}>
                <div className="px-5 py-4">
                    <div>
                        <p className="d-flex align-items-center txt-607B96 regular-txt mb-2">
                            <span className="">1</span>
                            <span className="mx-4">/**</span>
                        </p>
                        { displayEducation }
                        <p className="d-flex align-items-center txt-607B96 regular-txt mb-2">
                            <span className="">{type == 'highSchool' ? highSchoolEducation.length+2 : collegeEducation.length+2}</span>
                            <span className="mx-4">**/</span>
                        </p>                        
                    </div>
                </div>
            </div>
        </div>
    )
}