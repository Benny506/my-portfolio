import { useState } from 'react';
import './css/about.css'
import CodeShowcase from './auxiliary/CodeShowcase';
import AboutRouter from './AboutRouter'
import { Offcanvas } from 'react-bootstrap';
import { RxCross2 } from 'react-icons/rx';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import AboutNav from './AboutNav';
import FloatingBtn from '../CustomBtns/FloatingBtn';
import { motion as Motion } from "motion/react";


export default function About(){

    const [showOffCanvasNav, setShowOffCanvasNav] = useState(false)
    const [showOffCanvasSnippet, setShowOffCanvasSnippet] = useState(false)

    const onShowOffCanvasNav = () => setShowOffCanvasNav(true)
    const onHideOffCanvasNav = () => setShowOffCanvasNav(false)

    const toggleOffCanvasSnippet = () => setShowOffCanvasSnippet(prev => !prev)
    const onHideOffCanvasSnippet = () => setShowOffCanvasSnippet(false)

    return (
        <div style={{ overflowY: 'auto' }} className='about-bg'>
            <div style={{ minHeight: '10vh' }} className=''>
                <Navigation />
            </div>

            <div 
                style={{ minHeight: '80vh' }} 
                className='home-section-bg h-100 w-100 d-flex flex-wrap align-items-start justify-content-between'
            >
            
                <Motion.div
                    style={{ minHeight: '80vh' }} 
                    className='col-lg-2 h-100 d-lg-block d-md-none d-none'
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.35 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                >
                    <AboutNav />
                </Motion.div>

                <Motion.div
                    style={{ minHeight: '80vh' }} 
                    className='col-lg-5 col-md-6 col-12 h-100'
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.35 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                >
                    <Motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.35 }}
                        transition={{ duration: 0.55, ease: "easeOut", delay: 0.06 }}
                    >
                        <AboutRouter onShowOffCanvasNav={onShowOffCanvasNav} />
                    </Motion.div>
                </Motion.div>

                <Motion.div
                    style={{ minHeight: '80vh' }} 
                    className='col-lg-5 col-md-6 col-12 d-lg-block d-md-block d-none'
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.35 }}
                    transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
                >
                    <Motion.div
                        initial={{ opacity: 0, scale: 0.99 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.35 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                    >
                        <CodeShowcase />
                    </Motion.div>
                </Motion.div>

            </div>                

            <div style={{ minHeight: '10vh' }} className=''>
                <Footer />
            </div>

            <div className='d-lg-none d-md-none d-block'>
                <Motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    <FloatingBtn icon={'code'} btnFunc={toggleOffCanvasSnippet} />
                </Motion.div>
            </div>

            <Offcanvas show={showOffCanvasNav} >
                <div className='home-bg'>
                    <div className='nav-container'>
                        <div className='px-3 d-flex align-items-center justify-content-between border-bottom-light-1E2D3D'>
                            <p className='py-3 m-0 p-0 regular-txt txt-607B96'>about-me</p>
                            <RxCross2 size={23} color='#607B96' onClick={onHideOffCanvasNav} />
                        </div>

                        <AboutNav onHideOffCanvasNav={onHideOffCanvasNav} />                        
                    </div>                
                </div> 
            </Offcanvas>

            <Offcanvas show={showOffCanvasSnippet} placement="end">
                <div className='home-bg'>
                    <div className='nav-container'>
                        <div className='px-3 d-flex align-items-center justify-content-between border-bottom-light-1E2D3D'>
                            <p className='py-3 m-0 p-0 regular-txt txt-607B96'>// code snippet showcase</p>
                            <RxCross2 size={23} color='#607B96' onClick={onHideOffCanvasSnippet} />
                        </div>

                        <CodeShowcase />                       
                    </div>                
                </div> 
            </Offcanvas>            
        </div>
    )
}
