import React from "react";
import { RxCross2 } from "react-icons/rx";
import CustomScroll from "../../scroll/CustomScroll";
import { FaFolderOpen } from "react-icons/fa";

const myStacksArr = [
    'Frontend development (Web)',
    '~React',
    '~State Management: Redux, Context + Hooks',
    '~Styling: Bootstrap, React-bootstrap, Tailwind',
    '',
    'Frontend development (Mobile)',
    '~React Native',
    '~Expo',
    '~Redux',
    '',
    'Backend development (Familiarity with):',
    '~Supabase (Very high level)',
    '~Express server (Mid-level)',
    '~Node JS (Mid-level)',
    '~SQL (postgreSQL, mySQL, SQLite e.t.c) (High-level)',
    '~NoSQL (MongoDB, Redis) (Mid-level)',
    '',
    'Currently learning',
    '~Ethical hacking',
]



export default function MyStacks({ onShowOffCanvasNav }){

    const displayMyStacks = myStacksArr.map((info, i) => (
        <p
            key={i}
            className={`${
                i == 0 ? 'txt-FFF' : myStacksArr[i-1] == '' ? 'txt-FFF' : 'txt-607B96'
            } d-flex align-items-center regular-txt`}
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
                className="border-bottom-light-1E2D3D border-right-light-1E2D3D d-flex align-items-stretch justify-content-start"
            >
                <div className="col-lg-4 col-md-4 col-10 p-3 d-flex align-items-center justify-content-between border-right-light-1E2D3D">
                    <p className="m-0 p-0 regular-txt txt-607B96">my-stacks</p>
                    <RxCross2 size={18} color="607B96" />
                </div>

                <div onClick={onShowOffCanvasNav} className="pointer d-lg-none col-2 d-md-block d-flex align-items-center justify-content-center">
                    <FaFolderOpen size={18} color="607B96" />
                </div>
            </div>

            <div style={{ overflowY: 'scroll'}}>
                <div className="px-5 py-4">
                    <div>
                        <p className="d-flex align-items-center txt-607B96 regular-txt mb-2">
                            <span className="">1</span>
                            <span className="mx-4">/**</span>
                        </p>
                        { displayMyStacks }
                        <p className="d-flex align-items-center txt-607B96 regular-txt mb-2">
                            <span className="">{myStacksArr.length+2}</span>
                            <span className="mx-4">**/</span>
                        </p>                        
                    </div>
                </div>
            </div>
        </div>
    )
}