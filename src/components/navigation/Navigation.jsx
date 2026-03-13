import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './css/navigation.css'
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Offcanvas } from 'react-bootstrap';
import ContactModal from '../contact/ContactModal';



const navLinks = [
    {
        title: '_home',
        path: '/'
    },
    {
        title: '_about-me',
        path: '/about-me'
    },
    {
        title: '_projects',
        path: '/projects'
    },
    {
        title: '_my CV',
        path: '/my-cv'
    },    
]



export default function Navigation(){

    const location = useLocation()
    const navigate = useNavigate()

    const navigateTo = (path) => navigate(path) 
    const goHome = () => navigateTo('/')
    const goToAboutMe = () => navigateTo('/about-me')
    const goToProjects = () => navigateTo('/projects')

    const activeNav = location.pathname.includes('about-me')
        ? '/about-me'
        : location.pathname.includes('projects')
            ? '/projects'
            :
            location.pathname.includes('my-cv')
            ? '/my-cv'
            : '/'

    const [showOffCanvasNav, setShowOffCanvasNav] = useState(false)
    const [showContactModal, setShowContactModal] = useState(false)

    const onShowOffCanvasNav = () => setShowOffCanvasNav(true)
    const onHideOffCanvasNav = () => setShowOffCanvasNav(false)
    const onShowContactModal = () => setShowContactModal(true)
    const onHideContactModal = () => setShowContactModal(false)

    useEffect(() => {
        const handler = () => setShowContactModal(true)
        window.addEventListener('open-contact-modal', handler)
        return () => window.removeEventListener('open-contact-modal', handler)
    }, [])

    const displayNavLinks = navLinks.map((link, i) => {
        const { title, path } = link

        const isActive = path == activeNav ? true : false

        const goToPath = () => navigateTo(path)

        return (
            <div 
                key={i}
                onClick={goToPath}
                className={
                    `
                        ${
                            i == 0
                            ?
                                'nav-link-txt-container'
                            :

                                'nav-link-container-border-right'
                        }
                        ${
                            isActive && 'nav-link-container-active'
                        }
                        d-lg-block d-md-block d-none
                    `
                }
            >
                <p
                    className={`p-0 nav-link-txt py-3 px-4 m-0 regular-txt txt-607B96 ${isActive && 'text-white'}`}
                >
                        {title}
                </p>
            </div>
        )
    })

    return (
        <div className='nav-container px-3'>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='py-3 col-lg-2'>
                    <p className='m-0 p-0 regular-txt txt-607B96'>benedict olom</p>
                </div>
                <div className='col-lg-7 d-lg-flex d-md-flex d-none justify-content-start'>
                    { displayNavLinks }
                </div>
                <div className='d-lg-flex d-md-flex d-none align-items-center justify-content-end col-lg-2'>
                    <p onClick={onShowContactModal} className={`p-0 py-3 px-4 m-0 pointer regular-txt border-left-light-1E2D3D txt-607B96 nav-link-txt ${activeNav == '/contact-me' && 'text-white'}`}>_contact-me</p>
                </div>
                <div className='d-lg-none d-md-none d-block'>
                    <AiOutlineMenu size={23} color='#607B96' onClick={onShowOffCanvasNav} />
                </div>
            </div>

            <Offcanvas show={showOffCanvasNav} onHide={onHideOffCanvasNav}>
                <div className='home-bg'>
                    <div className='nav-container px-3'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <p className='py-3 m-0 p-0 regular-txt txt-607B96'>benedict olom</p>
                            <RxCross2 size={23} color='#607B96' onClick={onHideOffCanvasNav} />
                        </div>
                    </div>
                    <div className=''>
                        <p onClick={goHome} className={`p-0 py-3 border-bottom-light-1E2D3D px-3 m-0 regular-txt txt-607B96 nav-link-txt ${activeNav == '/' && 'text-white'}`}>_hello</p>
                        <p onClick={goToAboutMe} className={`p-0 py-3 border-bottom-light-1E2D3D px-3 m-0 regular-txt txt-607B96 nav-link-txt ${activeNav == '/about-me' && 'text-white'}`}>_about-me</p>
                        <p onClick={goToProjects} className={`p-0 py-3 border-bottom-light-1E2D3D px-3 m-0 regular-txt txt-607B96 nav-link-txt ${activeNav == '/projects' && 'text-white'}`}>_projects</p>
                        <p onClick={() => { onShowContactModal(); onHideOffCanvasNav() }} className={`p-0 py-3 border-bottom-light-1E2D3D px-3 m-0 regular-txt txt-607B96 nav-link-txt ${activeNav == '/contact-me' && 'text-white'}`}>_contact-me</p>                        
                    </div>
                </div>
            </Offcanvas>

            <ContactModal show={showContactModal} onHide={onHideContactModal} />
        </div>
    )
}
