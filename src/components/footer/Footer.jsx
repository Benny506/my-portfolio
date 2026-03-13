import { useNavigate } from 'react-router-dom';
import './css/footer.css'
import { FaGithub, FaGithubAlt } from "react-icons/fa";
import { IoDocument } from 'react-icons/io5';


export default function Footer(){


    const goToGithubPage = () => window.open('https://github.com/Benny506', '_blank')

    const navigate = useNavigate('')


    return (
        <div style={{ minHeight: '10vh', maxHeight: '10vh' }} className='footer-container px-2 m-0 py-0'>
            <div style={{ minHeight: '10vh', maxHeight: '10vh' }} className='d-flex justify-content-between'>
                <div className='d-flex'>
                    <div className='d-flex align-items-center'>
                        <p className='m-0 p-0 regular-txt txt-607B96'>Find me in: </p>
                    </div>
                    <div className='d-flex align-items-center border-horizontal-light-1E2D3D px-3 mx-3'>
                        <p onClick={goToGithubPage} className='pointer m-0 p-0'> <FaGithubAlt size={20} color="#607B96" /> </p>
                    </div>
                </div>

                <div 
                    onClick={() => navigate('/my-cv')}
                    className='pointer d-flex border-left-light-1E2D3D px-3 align-items-center justify-content-center'
                >
                    <p className='m-0 p-0 px-1 regular-txt txt-607B96'>My CV</p>
                    <IoDocument size={20} color="#607B96" />
                </div>
            </div>
        </div>
    )
}