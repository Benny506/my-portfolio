import { Carousel } from 'react-bootstrap'
import CodeSnippets from '../codeSnippets/CodeSnippets'
import Navigation from '../navigation/Navigation'
import './css/home.css'
import Footer from '../footer/Footer'


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
                <div className='mx-2 mx-md-2 mx-0 mb-lg-0 mb-md-0 mb-4 col-lg-5 col-md-5 col-10'>
                    <div className='mb-4'>
                        <h6 className='m-0 p-0 small-txt txt-FFF mb-2'>Hi all. I am</h6>
                        <h1 className='m-0 p-0 extra-large-txt txt-FFF mb-2'>Benedict Olom</h1>
                        <h3 className='m-0 p-0 medium-txt txt-4D5BCE mb-2'>{'>'} Full-stack developer</h3>
                        <h3 className='m-0 p-0 medium-txt txt-4D5BCE'>{'>'} Mobile app developer</h3>
                    </div>
                    <div>
                        <p className='m-0 p-0 small-txt txt-607B96 mb-2'>// Github page</p>
                        <p className='m-0 p-0 small-txt'><span className='txt-4D5BCE'>const</span> <span className='txt-43D9AD'>githubLink</span> <span className='txt-FFF'>=</span> <a className='txt-E99287' href='https://github.com/Benny506' target='_blank'>"https://github.com/Benny506"</a></p>
                    </div>
                </div>

                <div className='mx-lg-2 mx-md-2 mx-0 col-lg-5 col-md-5 col-11'>
                    <Carousel fade controls={false}>
                        { carouselItems }
                    </Carousel>
                    {/* <CodeSnippets language={'reactHooks'} /> */}
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}