import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaJava, FaHospital, FaMobileAlt, FaPills, FaStore, FaUserMd, FaUserShield } from "react-icons/fa";
import { SiExpress, SiRedux, SiSupabase } from "react-icons/si";
import lavendercareLogo from '../../../assets/images/lavendercare/logo.png'
import scrap2styleLogo from '../../../assets/images/scrap2style/logo.jpeg'
import flexXxaLogo from '../../../assets/images/flexXxa/logo.png'
import awambeLogo from '../../../assets/images/awambe/logo.svg'

export const projectData = [
    {
        name: 'awambe',
        type: 'web',
        Logo: () => <img src={awambeLogo} className='col-lg-12 col-md-12 col-12' />,
        Icon: () => <FaReact size={18} color="#011221" />,
        description: "A bespoke solution for creating personalized events",
        imgClassName: 'all-projects-awambe-bg',
        ecosystem: [
            {
                name: 'Event Planner',
                summary: 'Core planning dashboard for events and bookings.',
                type: 'dashboard',
                Icon: () => <FaReact size={28} color="#D6E225" />,
                previewLink: 'https://event-planner.awambe.com/#/dashboard',
                availability: 'live',
                auth: {
                    emailEnv: 'VITE_AWAMBE_EVENT_PLANNER_EMAIL',
                    passwordEnv: 'VITE_AWAMBE_EVENT_PLANNER_PASSWORD'
                }
            },
            {
                name: 'Vendor Dashboard',
                summary: 'Vendor portal to manage hires, services, and requests.',
                type: 'dashboard',
                Icon: () => <FaUserMd size={28} color="#86E1F9" />,
                previewLink: 'https://vendor.awambe.com/#/',
                availability: 'live',
                auth: {
                    emailEnv: 'VITE_AWAMBE_VENDOR_EMAIL',
                    passwordEnv: 'VITE_AWAMBE_VENDOR_PASSWORD'
                }
            },
            {
                name: 'User Side',
                summary: 'Customer-facing site for exploring and booking events.',
                type: 'web',
                Icon: () => <FaStore size={28} color="#5565E8" />,
                previewLink: 'https://awambe.com',
                availability: 'live'
            },
        ],
        projectStacks: [
            {
                Icon: () => <FaReact size={80} color="#D6E225" />,
                name: 'React'
            },
            {
                Icon: () => <SiSupabase size={80} color="#4D5BCE" />,
                name: 'Supabase'
            },
            {
                Icon: () => <SiRedux size={80} color="#5565E8" />,
                name: 'Redux'
            },
        ],
        previewLink: 'https://event-planner.awambe.com/#/dashboard',
        path: '/projects/single-project/awambe'
    },
    {
        name: 'scrap-2-style',
        type: 'web',
        Logo: () => <img src={scrap2styleLogo} className='col-lg-12 col-md-12 col-12' />,
        Icon: () => <FaReact size={18} color="#011221" />,
        description: 'An Ecommerce platform. Supporting wholesale and retail',
        imgClassName: 'all-projects-scrap2style-bg',
        ecosystem: [
            {
                name: 'Admin Dashboard',
                summary: 'Preview is currently unavailable.',
                type: 'dashboard',
                Icon: () => <FaUserShield size={28} color="#5565E8" />,
                previewLink: null,
                availability: 'unavailable'
            },
        ],
        projectStacks: [
            {
                Icon: () => <FaReact size={80} color="#5565E8" />,
                name: 'React'
            },
            {
                Icon: () => <SiSupabase size={80} color="#D6E225" />,
                name: 'Supabase'
            },
            {
                Icon: () => <SiRedux size={80} color="#5565E8" />,
                name: 'Redux'
            },
        ],
        previewLink: 'https://scrap2style.com/#/landing-page',
        path: '/projects/single-project/scrap-2-style'
    },
    {
        name: 'lavendercare',
        type: 'app',
        Logo: () => <img src={lavendercareLogo} className='col-lg-12 col-md-12 col-12' />,
        Icon: () => <FaReact size={18} color="#5565E8" />,
        description: 'Mother-lifestyle application',
        imgClassName: 'all-projects-lavendercare-bg',
        ecosystem: [
            {
                name: 'Lavendercare App',
                summary: 'Patient-facing mobile experience for mothers and families.',
                type: 'app',
                Icon: () => <FaMobileAlt size={28} color="#D6E225" />,
                previewLink: 'https://apps.apple.com/us/app/lavendercare/id6755245847'
            },
            {
                name: 'Providers Dashboard',
                summary: 'Tools for providers to manage care and patient engagement.',
                type: 'dashboard',
                Icon: () => <FaUserMd size={28} color="#86E1F9" />,
                previewLink: 'https://provider.lavendercare.co/#/',
                availability: 'live',
                auth: {
                    emailEnv: 'VITE_LAVENDERCARE_PROVIDER_EMAIL',
                    passwordEnv: 'VITE_LAVENDERCARE_PROVIDER_PASSWORD'
                }
            },
            {
                name: 'Marketplace Dashboard',
                summary: 'Manage products, inventory, pricing, and orders.',
                type: 'dashboard',
                Icon: () => <FaStore size={28} color="#5565E8" />,
                previewLink: 'https://product-inventory.lavendercare.co/#/',
                availability: 'live',
                auth: {
                    emailEnv: 'VITE_LAVENDERCARE_MARKETPLACE_EMAIL',
                    passwordEnv: 'VITE_LAVENDERCARE_MARKETPLACE_PASSWORD'
                }
            },
            {
                name: 'Hospital Management System',
                summary: 'Operational tools for hospital workflows and administration.',
                type: 'system',
                Icon: () => <FaHospital size={28} color="#D6E225" />,
                previewLink: null,
                availability: 'unavailable'
            },
            {
                name: 'Pharmacy Dashboard',
                summary: 'Prescription management and fulfilment operations.',
                type: 'dashboard',
                Icon: () => <FaPills size={28} color="#86E1F9" />,
                previewLink: 'https://pharmacy.lavendercare.co',
                availability: 'live',
                auth: {
                    emailEnv: 'VITE_LAVENDERCARE_PHARMACY_EMAIL',
                    passwordEnv: 'VITE_LAVENDERCARE_PHARMACY_PASSWORD'
                }
            },
            {
                name: 'Admin Dashboard',
                summary: 'System oversight, roles, permissions, and analytics.',
                type: 'dashboard',
                Icon: () => <FaUserShield size={28} color="#5565E8" />,
                previewLink: null,
                availability: 'unavailable'
            },
        ],
        projectStacks: [
            {
                Icon: () => <FaReact size={80} color="#5565E8" />,
                name: 'React Native'
            },
            {
                Icon: () => <SiSupabase size={80} color="#D6E225" />,
                name: 'Supabase'
            },
            {
                Icon: () => <SiRedux size={80} color="#5565E8" />,
                name: 'Redux'
            },
        ],
        previewLink: 'https://apps.apple.com/us/app/lavendercare/id6755245847',
        path: '/projects/single-project/lavendercare'
    },
    {
        name: 'flexXxa',
        type: 'app',
        Logo: () => <img src={flexXxaLogo} className='col-lg-12 col-md-12 col-12' />,
        Icon: () => <FaReact size={18} color="#011221" />,
        description: "FlexXxa. You're all in one event hub. Find, and attend events with friends",
        imgClassName: 'all-projects-flexxxa-bg',
        ecosystem: [
            {
                name: 'Admin Dashboard',
                summary: 'Preview is currently unavailable.',
                type: 'dashboard',
                Icon: () => <FaUserShield size={28} color="#5565E8" />,
                previewLink: null,
                availability: 'unavailable'
            },
        ],
        projectStacks: [
            {
                Icon: () => <FaReact size={80} color="#5565E8" />,
                name: 'React Native'
            },
            {
                Icon: () => <SiSupabase size={80} color="#D6E225" />,
                name: 'Supabase'
            },
            {
                Icon: () => <SiRedux size={80} color="#5565E8" />,
                name: 'Redux'
            },
        ],
        previewLink: 'https://apps.apple.com/us/app/flexxxa/id6755444419',
        path: '/projects/single-project/flexXxa'
    },
]
