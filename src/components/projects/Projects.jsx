import React, { useState } from 'react'
import Navigation from '../navigation/Navigation'
import ProjectsNav from './ProjectsNav'
import './css/projects.css'
import Footer from '../footer/Footer'
import ProjectsRouter from './ProjectsRouter'
import { Offcanvas } from 'react-bootstrap'
import { RxCross2 } from 'react-icons/rx'


export default function Projects(){

    const [showOffCanvasNav, setShowOffCanvasNav] = useState(false)

    const onShowOffCanvasNav = () => setShowOffCanvasNav(true)
    const onHideOffCanvasNav = () => setShowOffCanvasNav(false)

    return (
        <div style={{ overflowY: 'auto' }} className='about-bg'>
            <div style={{ minHeight: '10vh' }} className=''>
                <Navigation />
            </div>

            <div 
                style={{ minHeight: '80vh' }} 
                className='home-section-bg h-100 w-100 d-flex flex-wrap align-items-start justify-content-between'
            >
            
                <div 
                    style={{ minHeight: '80vh' }} 
                    className='col-lg-2 col-md-2 h-100 d-lg-block d-md-block d-none'
                >
                    <ProjectsNav />
                </div>

                <div 
                    style={{ minHeight: '80vh' }} 
                    className='col-lg-10 col-md-10 col-12 h-100'
                >
                    <ProjectsRouter onShowOffCanvasNav={onShowOffCanvasNav} />
                </div>
            </div>    

            <div style={{ minHeight: '10vh' }} className=''>
                <Footer />
            </div>    

            <Offcanvas show={showOffCanvasNav} >
                <div className='home-bg'>
                    <div className='nav-container'>
                        <div className='px-3 d-flex align-items-center justify-content-between border-bottom-light-1E2D3D'>
                            <p className='py-3 m-0 p-0 regular-txt txt-607B96'>projects</p>
                            <RxCross2 size={23} color='#607B96' onClick={onHideOffCanvasNav} />
                        </div>

                        <ProjectsNav onHideOffCanvasNav={onHideOffCanvasNav} />                        
                    </div>                
                </div> 
            </Offcanvas>                            
        </div>
    )
}