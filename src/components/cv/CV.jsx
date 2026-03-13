import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import "./css/cv.css";
import { Offcanvas } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";
import { FaFolderOpen } from "react-icons/fa";
import { IoMailOutline, IoLogoGithub, IoLinkOutline, IoLogoLinkedin } from "react-icons/io5";
import CustomScroll from "../scroll/CustomScroll";
import { motion as Motion } from "motion/react";
import CVNav from "./auxiliary/CVNav";
import CVSection from "./auxiliary/CVSection";
import CVPdfModal from "./auxiliary/CVPdfModal";

export default function CV() {
    const navigate = useNavigate()
    const [showOffCanvasNav, setShowOffCanvasNav] = useState(false)
    const onShowOffCanvasNav = () => setShowOffCanvasNav(true)
    const onHideOffCanvasNav = () => setShowOffCanvasNav(false)

    const [showPdfModal, setShowPdfModal] = useState(false)
    const openPdfModal = () => setShowPdfModal(true)
    const closePdfModal = () => setShowPdfModal(false)

    const sections = useMemo(() => ([
        { id: "summary", title: "professional-summary" },
        { id: "expertise", title: "core-expertise" },
        { id: "experience", title: "professional-experience" },
        { id: "leadership", title: "technical-leadership" },
        { id: "tech", title: "technologies" },
        { id: "languages", title: "languages" },
    ]), [])

    const scrollToId = (id) => {
        const el = document.getElementById(id)
        if (!el) return
        el.scrollIntoView({ behavior: "smooth", block: "start" })
        onHideOffCanvasNav()
    }

    const contactLinks = [
        { label: "olomufeh@gmail.com", href: "mailto:olomufeh@gmail.com", Icon: IoMailOutline },
        { label: "GitHub", href: "https://github.com/Benny506", Icon: IoLogoGithub },
        { label: "Portfolio", to: "/projects", kind: "internal", Icon: IoLinkOutline },
        { label: "LinkedIn", href: "#/", Icon: IoLogoLinkedin },
    ]

    const coreExpertise = [
        {
            title: "Frontend Engineering",
            items: [
                "React, React Native",
                "Redux (advanced patterns), Context API, Custom Hooks",
                "Framer Motion and component-driven UI architecture",
            ],
        },
        {
            title: "Architecture & Performance",
            items: [
                "Scalable project structuring and architecture design",
                "Redux performance optimization and rendering efficiency",
                "Lazy loading, state synchronization strategies",
            ],
        },
        {
            title: "Systems & Integrations",
            items: [
                "Payment gateway integrations (Flutterwave, Paystack)",
                "Webhook verification and transactional consistency",
                "Real-time communication systems (Supabase Channels)",
                "QR-based ticket validation systems",
            ],
        },
    ]

    const work = [
        {
            title: "Awambe – Event Planning Ecosystem",
            bullets: [
                "Built an event planning platform with production-grade UI flows and scalable front-end architecture",
                "Integrated a vendor hiring dashboard synchronized with planner workflows for discovery, booking, and vendor engagement",
                "Implemented planner-to-vendor chat flows to support negotiation and coordination during event preparation",
                "Designed guest access flows using ticketing and invitation-based entry with validation-oriented UX patterns",
            ],
        },
        {
            title: "Scrap2Style – Ecommerce Platform",
            bullets: [
                "Engineered secure payment workflow integrating Flutterwave with webhook verification",
                "Designed full coupon and rewards engine from database to frontend logic",
                "Implemented stock concurrency management including wholesale purchase flows",
                "Built guest cart persistence with localStorage and server synchronization upon registration",
                "Developed analytics dashboard for monitoring product and sales metrics",
            ],
        },
        {
            title: "FlexXxa – Event & Social Platform (~1500 Users)",
            bullets: [
                "Designed QR-based ticket validation system with duplication prevention logic",
                "Built live event attendance tracking system for production environments",
                "Architected real-time check-in workflows with backend validation",
            ],
        },
        {
            title: "Leash – Focus Mode Enforcement Application",
            bullets: [
                "Engineered Android background enforcement system using UsageStatsManager",
                "Implemented overlay-based app blocking with countdown timer logic",
                "Designed shared group focus mode system with rule enforcement",
                "Built background listener service for foreground app detection",
            ],
        },
        {
            title: "LavenderCare – Therapy & Motherhood Mobile App",
            bullets: [
                "Integrated Paystack payment system via secure WebView",
                "Built real-time chat system (1–1 and group) using Supabase Channels",
                "Implemented presence indicators and unread message tracking",
                "Structured React Native architecture from scratch",
            ],
        },
        {
            title: "My-Uni-Map – Navigation Application",
            bullets: [
                "Integrated Google Maps SDK with custom native enhancements for optimized path rendering",
                "Improved map performance for real-time navigation use cases",
            ],
        },
    ]

    const leadership = [
        "Designed project architecture and folder structures across multiple production systems",
        "Selected and implemented state management strategies (Redux / Context)",
        "Collaborated with backend engineers on API contract definition",
        "Managed independent feature delivery timelines",
    ]

    const technologies = [
        "React",
        "React Native",
        "Redux",
        "Supabase",
        "PostgreSQL",
        "REST APIs",
        "Flutterwave",
        "Paystack",
        "Framer Motion",
        "Tailwind CSS",
        "Bootstrap",
    ]

    return (
        <div style={{ overflowY: "auto" }} className="about-bg">
            <div style={{ minHeight: "10vh" }}>
                <Navigation />
            </div>

            <div
                style={{ minHeight: "80vh" }}
                className="home-section-bg h-100 w-100 d-flex flex-wrap align-items-start justify-content-between"
            >
                <div style={{ minHeight: "80vh" }} className="col-lg-2 h-100 d-lg-block d-md-none d-none">
                    <CVNav sections={sections} onSelect={scrollToId} />
                </div>

                <div style={{ minHeight: "80vh" }} className="col-lg-7 col-md-12 col-12 h-100">
                    <div
                        style={{ maxHeight: "80vh", minHeight: "80vh" }}
                        className="w-100 h-100 d-flex flex-column"
                    >
                        <div className="border-bottom-light-1E2D3D border-right-light-1E2D3D d-flex align-items-stretch justify-content-between">
                            <div className="col-lg-6 col-md-10 col-10 p-3 d-flex align-items-center justify-content-between border-right-light-1E2D3D">
                                <p className="m-0 p-0 regular-txt txt-607B96">cv</p>
                                <RxCross2 size={18} color="607B96" />
                            </div>
                            <div onClick={onShowOffCanvasNav} className="pointer d-lg-none col-2 col-md-2 d-md-flex d-flex align-items-center justify-content-center">
                                <FaFolderOpen size={18} color="607B96" />
                            </div>
                        </div>

                        <CustomScroll>
                            <div className="px-lg-4 px-md-4 px-4 py-4">
                                <Motion.div
                                    className="cv-hero"
                                    initial={{ opacity: 0, y: 14 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.7 }}
                                    transition={{ duration: 0.55, ease: "easeOut" }}
                                >
                                    <Motion.div
                                        aria-hidden="true"
                                        className="cv-hero-glow"
                                        initial={{ opacity: 0.55, backgroundPositionX: "0%" }}
                                        whileInView={{ opacity: 1, backgroundPositionX: ["0%", "220%"] }}
                                        viewport={{ once: false, amount: 0.75 }}
                                        transition={{ duration: 3.0, repeat: Infinity, ease: "linear" }}
                                    />
                                    <p className="m-0 p-0 small-txt txt-607B96">Benedict Ufeh Olom</p>
                                    <p className="m-0 p-0 large-txt txt-FFF mt-2">Frontend Engineer</p>
                                    <p className="m-0 p-0 regular-txt txt-4D5BCE mt-2">React & React Native</p>
                                    <div className="d-flex flex-wrap align-items-center gap-2 mt-3">
                                        <span className="cv-pill extra-small-txt">Open to Global Remote Roles</span>
                                        <Motion.button
                                            type="button"
                                            className="cv-pill cv-pill-secondary extra-small-txt"
                                            initial={{ opacity: 0, scale: 0.98 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: false, amount: 0.75 }}
                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                            onClick={openPdfModal}
                                        >
                                            pdf-version
                                        </Motion.button>
                                    </div>
                                </Motion.div>

                                <div className="cv-contact-row mt-4">
                                    {contactLinks.map((c, i) => (
                                        c.kind === "internal"
                                            ? (
                                                <button
                                                    key={i}
                                                    type="button"
                                                    className="cv-contact-item cv-contact-btn"
                                                    onClick={() => navigate(c.to)}
                                                >
                                                    <c.Icon size={18} color="#607B96" />
                                                    <span className="small-txt txt-607B96">{c.label}</span>
                                                </button>
                                            )
                                            : (
                                                <a
                                                    key={i}
                                                    className="cv-contact-item"
                                                    href={c.href}
                                                    target={c.href.startsWith("http") ? "_blank" : undefined}
                                                    rel={c.href.startsWith("http") ? "noopener" : undefined}
                                                >
                                                    <c.Icon size={18} color="#607B96" />
                                                    <span className="small-txt txt-607B96">{c.label}</span>
                                                </a>
                                            )
                                    ))}
                                </div>

                                <CVSection id="summary" title="PROFESSIONAL SUMMARY">
                                    <p className="m-0 p-0 regular-txt txt-607B96">
                                        Frontend Engineer with 4+ years of professional experience (2021–Present) building production-grade web and mobile applications. Specialized in scalable React architectures, secure payment workflows, real-time systems, and performance-optimized user interfaces. Delivered products including Awambe—an event planning platform integrated with a vendor hiring dashboard, planner-to-vendor chat workflows, and ticket/invitation-based guest access flows. Strong background in designing state-heavy systems and owning full product lifecycles from architecture to deployment.
                                    </p>
                                </CVSection>

                                <CVSection id="expertise" title="CORE EXPERTISE">
                                    <div className="cv-grid-2">
                                        {coreExpertise.map((block, i) => (
                                            <Motion.div
                                                key={i}
                                                className="cv-card"
                                                initial={{ opacity: 0, y: 12 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.45 }}
                                                transition={{ duration: 0.5, ease: "easeOut", delay: Math.min(i * 0.05, 0.2) }}
                                            >
                                                <Motion.div
                                                    aria-hidden="true"
                                                    className="cv-card-shine"
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1, backgroundPositionX: ["0%", "220%"] }}
                                                    viewport={{ once: false, amount: 0.6 }}
                                                    transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
                                                />
                                                <p className="m-0 p-0 regular-txt txt-FFF">{block.title}</p>
                                                <div className="mt-3">
                                                    {block.items.map((txt, idx) => (
                                                        <p key={idx} className="m-0 p-0 small-txt txt-607B96 mb-2">
                                                            <span className="txt-4D5BCE">{">"}</span> <span className="mx-2">{txt}</span>
                                                        </p>
                                                    ))}
                                                </div>
                                            </Motion.div>
                                        ))}
                                    </div>
                                </CVSection>

                                <CVSection id="experience" title="PROFESSIONAL EXPERIENCE">
                                    <div className="cv-timeline">
                                        <div className="cv-timeline-dot" />
                                        <div className="cv-timeline-line" />
                                        <div className="cv-timeline-content">
                                            <p className="m-0 p-0 regular-txt txt-FFF">Frontend / Full-Stack Engineer</p>
                                            <p className="m-0 p-0 small-txt txt-607B96 mt-2">2021 – Present</p>
                                        </div>
                                    </div>

                                    <div className="cv-work-grid mt-4">
                                        {work.map((p, i) => (
                                            <Motion.div
                                                key={i}
                                                className="cv-work-card"
                                                initial={{ opacity: 0, y: 14 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.4 }}
                                                transition={{ duration: 0.55, ease: "easeOut" }}
                                            >
                                                <Motion.div
                                                    aria-hidden="true"
                                                    className="cv-work-glow"
                                                    initial={{ opacity: 0.45, backgroundPositionX: "0%" }}
                                                    whileInView={{ opacity: 1, backgroundPositionX: ["0%", "200%"] }}
                                                    viewport={{ once: false, amount: 0.6 }}
                                                    transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                                                />
                                                <p className="m-0 p-0 regular-txt txt-FFF">{p.title}</p>
                                                <div className="mt-3">
                                                    {p.bullets.map((b, idx) => (
                                                        <p key={idx} className="m-0 p-0 small-txt txt-607B96 mb-2">
                                                            <span className="txt-43D9AD">•</span> <span className="mx-2">{b}</span>
                                                        </p>
                                                    ))}
                                                </div>
                                            </Motion.div>
                                        ))}
                                    </div>
                                </CVSection>

                                <CVSection id="leadership" title="TECHNICAL LEADERSHIP">
                                    <div className="cv-card cv-card-plain">
                                        {leadership.map((t, i) => (
                                            <p key={i} className="m-0 p-0 small-txt txt-607B96 mb-2">
                                                <span className="txt-D6E225">•</span> <span className="mx-2">{t}</span>
                                            </p>
                                        ))}
                                    </div>
                                </CVSection>

                                <CVSection id="tech" title="TECHNOLOGIES">
                                    <div className="cv-tags">
                                        {technologies.map((t, i) => (
                                            <Motion.span
                                                key={i}
                                                className="cv-tag extra-small-txt"
                                                initial={{ opacity: 0, scale: 0.98 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: false, amount: 0.6 }}
                                                transition={{ duration: 0.35, ease: "easeOut", delay: Math.min(i * 0.02, 0.25) }}
                                            >
                                                {t}
                                            </Motion.span>
                                        ))}
                                    </div>
                                </CVSection>

                                <CVSection id="languages" title="LANGUAGES">
                                    <div className="cv-card cv-card-plain">
                                        <p className="m-0 p-0 regular-txt txt-FFF">English</p>
                                        <p className="m-0 p-0 small-txt txt-607B96 mt-2">Fluent</p>
                                    </div>
                                </CVSection>
                            </div>
                        </CustomScroll>
                    </div>
                </div>

                <div style={{ minHeight: "80vh" }} className="col-lg-3 h-100 d-lg-block d-md-none d-none">
                    <div style={{ maxHeight: "80vh", minHeight: "80vh" }} className="w-100 h-100 border-left-light-1E2D3D">
                        <div className="border-bottom-light-1E2D3D p-3">
                            <p className="m-0 p-0 regular-txt txt-607B96">highlights</p>
                        </div>
                        <CustomScroll>
                            <div className="p-3">
                                <Motion.div
                                    className="cv-side-card mb-3"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.65 }}
                                    transition={{ duration: 0.45, ease: "easeOut" }}
                                >
                                    <p className="m-0 p-0 regular-txt txt-FFF">Specialties</p>
                                    <div className="cv-tags mt-3">
                                        {["React", "React Native", "Payments", "Realtime", "Performance"].map((t, i) => (
                                            <span key={i} className="cv-tag extra-small-txt">{t}</span>
                                        ))}
                                    </div>
                                </Motion.div>

                                <Motion.div
                                    className="cv-side-card"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.65 }}
                                    transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
                                >
                                    <p className="m-0 p-0 regular-txt txt-FFF">Availability</p>
                                    <p className="m-0 p-0 small-txt txt-607B96 mt-2">Open to global remote roles</p>
                                    <div className="mt-3">
                                        <span className="cv-pill extra-small-txt">2021–Present</span>
                                    </div>
                                </Motion.div>
                            </div>
                        </CustomScroll>
                    </div>
                </div>
            </div>

            <div style={{ minHeight: "10vh" }}>
                <Footer />
            </div>

            <Offcanvas show={showOffCanvasNav} onHide={onHideOffCanvasNav}>
                <div className="home-bg">
                    <div className="nav-container">
                        <div className="px-3 d-flex align-items-center justify-content-between border-bottom-light-1E2D3D">
                            <p className="py-3 m-0 p-0 regular-txt txt-607B96">cv</p>
                            <RxCross2 size={23} color="#607B96" onClick={onHideOffCanvasNav} />
                        </div>
                        <CVNav sections={sections} onSelect={scrollToId} />
                    </div>
                </div>
            </Offcanvas>
            <CVPdfModal
                show={showPdfModal}
                onHide={closePdfModal}
                coreExpertise={coreExpertise}
                technologies={technologies}
                work={work}
                leadership={leadership}
            />
        </div>
    )
}
