import React, { useState } from "react";
import CustomScroll from "../scroll/CustomScroll";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { IoChevronForward, IoMailOutline, IoChevronDown } from "react-icons/io5";
import { FaFolderClosed, FaPhone, FaFileCode  } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { Collapse } from 'react-bootstrap';
import { useLocation, useNavigate } from "react-router-dom";



export default function AboutNav({ onHideOffCanvasNav }){

    const navigate = useNavigate()
    const navigateTo = path => {
        navigate(path)

        return onHideOffCanvasNav && onHideOffCanvasNav()
    }
    const goToPersonalInfo = () => navigateTo('/about-me/')
    const goToMyStacks = () => navigateTo('/about-me/my-stacks')
    const goToHighSchoolEducation = () => navigateTo('/about-me/high-school-education')
    const goToCollegeEducation = () => navigateTo('/about-me/college-education')

    const location = useLocation()
    const pathname = location.pathname

    const [showPersonalInfo, setShowPersonalInfo] = useState(true)
    const [showContactInfo, setShowContactInfo] = useState(true)
    const [showEducationInfo, setShowEducationInfo] = useState(false)
    const pathnameLower = pathname.toLowerCase()
    const activeNav = pathnameLower.includes('my-stacks')
        ? 'my-stacks'
        : pathnameLower.includes('high-school-education')
            ? 'high-school-education'
            : pathnameLower.includes('college-education')
                ? 'college-education'
                : 'personal-info'
    const isEducationRoute = activeNav.includes('education')

    const toggleShowPersonalInfo = () => setShowPersonalInfo(prev => !prev)
    const toggleShowContactInfo = () => setShowContactInfo(prev => !prev)
    const toggleShowEducationInfo = () => setShowEducationInfo(prev => !prev)
    const openContactModal = () => window.dispatchEvent(new Event('open-contact-modal'))

    return (
        <div
            style={{ minHeight: '80vh' }} 
        >
            <CustomScroll>
                <div 
                    style={{ minHeight: '80vh' }} 
                    className='h-100 border-right-light-1E2D3D'
                >
                    <div 
                        onClick={toggleShowPersonalInfo} 
                        className={`${showPersonalInfo && 'mb-3'} pointer border-bottom-light-1E2D3D p-3 d-flex align-items-center`}
                    >
                        {
                            showPersonalInfo
                            ?
                                <FaCaretDown size={18} color='#fff' />
                            :
                                <FaCaretUp size={18} color='#fff' />
                        }
                        <p className='txt-FFF regular-txt m-0 p-0 px-2'>personal-info</p>
                    </div>

                    <Collapse in={showPersonalInfo}>
                        <div className='border-bottom-light-1E2D3D px-3'>
                            <div 
                                onClick={goToPersonalInfo}
                                className='pointer d-flex align-items-center mb-3'
                            >
                                <IoChevronForward size={18} color='#607B96' />
                                <FaFileCode size={18} color='#E99287' className='mx-1' />
                                <p className={`${activeNav == 'personal-info' ? 'txt-FFF' : 'txt-607B96'} regular-txt m-0 p-0 px-1`}>bio</p>
                            </div>
                            <div 
                                onClick={goToMyStacks}
                                className='pointer d-flex align-items-center mb-3'
                            >
                                <IoChevronForward size={18} color='#607B96' />
                                <FaFileCode size={18} color='#43D9AD' className='mx-1' />
                                <p className={`${activeNav == 'my-stacks' ? 'txt-FFF' : 'txt-607B96'} regular-txt m-0 p-0 px-1`}>stacks</p>
                            </div>
                            <div onClick={toggleShowEducationInfo} className='pointer d-flex align-items-center mb-3'>
                                {
                                    showEducationInfo
                                    ?
                                        <IoChevronDown size={18} color='#607B96' />
                                    :
                                        <IoChevronForward size={18} color='#607B96' />
                                }
                                <FaFolderClosed size={18} color='#3A49A4' className='mx-1' />
                                <p className={`${activeNav.includes('education') ? 'txt-FFF' : 'txt-607B96'} regular-txt m-0 p-0 px-1`}>education</p>
                            </div>
                            <Collapse in={showEducationInfo || isEducationRoute}>
                                <div className='px-4'>
                                    <div 
                                        onClick={goToHighSchoolEducation}
                                        className='pointer d-flex align-items-center mb-3'
                                    >
                                        <PiStudentBold size={18} color='#81A1C1' />
                                        <p className={`${activeNav == 'high-school-education' ? 'txt-FFF' : 'txt-607B96'} regular-607B96 m-0 p-0 px-1`}>high-school</p>
                                    </div>
                                    <div 
                                        onClick={goToCollegeEducation}
                                        className='pointer d-flex align-items-center mb-3'
                                    >
                                        <PiStudentBold size={18} color='#81A1C1' />
                                        <p className={`${activeNav == 'college-education' ? 'txt-FFF' : 'txt-607B96'} regular-607B96 m-0 p-0 px-1`}>university</p>
                                    </div>
                                </div>                                
                            </Collapse>
                        </div>                        
                    </Collapse>

                    <div 
                        onClick={toggleShowContactInfo} 
                        className={`${showContactInfo && 'mb-3'} pointer border-bottom-light-1E2D3D p-3 d-flex align-items-center`}
                    >
                        {
                            showContactInfo
                            ?
                                <FaCaretDown size={18} color='#fff' />
                            :
                                <FaCaretUp size={18} color='#fff' />
                        }
                        <p className='txt-FFF regular-txt m-0 p-0 px-2'>contact-info</p>
                    </div>   

                    <Collapse in={showContactInfo}>
                        <div className='mx-3'>
                            <div onClick={openContactModal} className='pointer d-flex align-items-center mb-3'>
                                <IoMailOutline size={18} color='#607B96' />
                                <p className='txt-607B96 regular-txt m-0 p-0 mx-2'>olomufeh @ gmail.com</p>
                            </div>
                            <div onClick={openContactModal} className='pointer d-flex align-items-center mb-3'>
                                <FaPhone size={18} color='#607B96' />
                                <p className='txt-607B96 regular-txt m-0 p-0 px-2'>+234 7010915889</p>
                            </div>
                        </div>
                    </Collapse>                 
                </div>
            </CustomScroll>
        </div>
    )
}
