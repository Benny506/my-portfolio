import React from "react";
import { FaCode } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import './css/customBtns.css'


export default function FloatingBtn({ icon, btnFunc }){

    const onBtnClick = () => btnFunc && btnFunc()

    return (
        <div className="w-100 d-flex align-items-center justify-content-end">
            <div onClick={onBtnClick} className="bg-1E2D3D p-3 rounded-circle floating-btn-container">
                {
                    icon == 'code'
                    ?
                        <FaCode color="#FFF" size={25} />
                    :
                    icon == 'link'
                    ?
                        <FiLink color="#FFF" size={25} />   
                    :
                        <></>
                }
            </div>
        </div>
    )
}