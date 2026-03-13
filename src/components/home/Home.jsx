import { Carousel } from 'react-bootstrap'
import CodeSnippets from '../codeSnippets/CodeSnippets'
import Navigation from '../navigation/Navigation'
import './css/home.css'
import Footer from '../footer/Footer'
import { motion as Motion } from "motion/react"


const languages = ['reactNative',  'nodeExpress', 'reactJS', 'reactHooks']


export default function Home(){

    const carouselItems = languages.map((lang, i) => (
        <Carousel.Item key={i}>
            <CodeSnippets language={lang} />
        </Carousel.Item>
    ))

    return (
        <div className='home-bg d-flex flex-column justify-content-between'>
            <div className='mb-lg-0 mb-md-0 mb-5'>
                <Navigation />
            </div>

            <div className='mb-lg-0 mb-md-0 mb-4 home-section-bg h-100 w-100 d-flex flex-wrap align-items-center justify-content-center'>
                <Motion.div
                    className='mx-2 mx-md-2 mx-0 mb-lg-0 mb-md-0 mb-4 col-lg-5 col-md-5 col-10'
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <Motion.div
                        className='mb-4'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                    >
                        <Motion.h6
                            className='m-0 p-0 small-txt txt-FFF mb-2'
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
                        >
                            Hi all. I'm a Software Dev (Frontend core)
                        </Motion.h6>
                        <Motion.h1
                            className='m-0 p-0 extra-large-txt txt-FFF mb-2'
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
                        >
                            Benedict Olom
                        </Motion.h1>
                        <Motion.h3
                            className='m-0 p-0 medium-txt txt-4D5BCE mb-2'
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, ease: "easeOut", delay: 0.16 }}
                        >
                            {'>'} Web
                        </Motion.h3>
                        <Motion.h3
                            className='m-0 p-0 medium-txt txt-4D5BCE'
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
                        >
                            {'>'} Mobile
                        </Motion.h3>
                    </Motion.div>
                    <Motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: "easeOut", delay: 0.25 }}
                    >
                        <p className='m-0 p-0 small-txt txt-607B96 mb-2'>// Github page</p>
                        <p className='m-0 p-0 small-txt'>
                            <span className='txt-4D5BCE'>const</span>{' '}
                            <span className='txt-43D9AD'>githubLink</span>{' '}
                            <span className='txt-FFF'>=</span>{' '}
                            <a className='txt-E99287' href='https://github.com/Benny506' target='_blank' rel="noopener">
                                "https://github.com/Benny506"
                            </a>
                        </p>
                    </Motion.div>
                </Motion.div>

                <Motion.div
                    className='mx-lg-2 mx-md-2 mx-0 col-lg-5 col-md-5 col-11'
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                >
                    <Motion.div
                        initial={{ opacity: 0, scale: 0.985 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.65, ease: "easeOut", delay: 0.18 }}
                    >
                        <Carousel fade controls={false}>
                            { carouselItems }
                        </Carousel>
                    </Motion.div>
                </Motion.div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}
