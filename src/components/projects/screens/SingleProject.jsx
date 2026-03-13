import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { projectData } from "../auxiliary/projectsData";
import { RxCross2 } from "react-icons/rx";
import { GoArrowUp, GoArrowUpRight } from "react-icons/go";
import { FaFolderOpen } from "react-icons/fa";
import FloatingBtn from "../../CustomBtns/FloatingBtn";
import { motion as Motion } from "motion/react";
import { Modal } from "react-bootstrap";


export default function SingleProject({ onShowOffCanvasNav }) {

    const params = useParams()

    const { name } = params

    const project = projectData.filter(project => project.name == name)[0]

    const [showPreviewModal, setShowPreviewModal] = useState(false)
    const [selectedPreview, setSelectedPreview] = useState(null)

    if (project) {

        const { name, Logo, projectStacks, description, previewLink, type, ecosystem } = project

        const toTitle = (value) => {
            const txt = `${value ?? ''}`.trim()
            if (!txt) return ''
            return txt.charAt(0).toUpperCase() + txt.slice(1)
        }

        const viewLiveProject = () => window.open(previewLink, '_blank', 'noopener')
        const viewEcosystemItem = (link) => link && window.open(link, '_blank', 'noopener')
        const closePreviewModal = () => {
            setShowPreviewModal(false)
            setSelectedPreview(null)
        }

        const displayProjectStacks = projectStacks.map((stack, i) => {
            const { name, Icon } = stack

            return (
                <div
                    key={i}
                    className="col-lg-3 col-md-4 col-5 d-flex flex-column align-items-center justify-content-center mb-4"
                >
                    <div className="mb-2">
                        <Icon />
                    </div>
                    <h2 className="m-0 p-0 medium-txt txt-607B96 text-center">{name}</h2>
                </div>
            )
        })

        const ecosystemItems = ecosystem?.filter(Boolean) ?? []
        const showEcosystem = ecosystemItems.length > 0

        const displayEcosystem = ecosystemItems.map((item, i) => {
            const { name, summary, previewLink, availability, Icon: EcosystemIcon } = item || {}

            const isUnavailable = availability === 'unavailable'
            const isClickable = !!previewLink && !isUnavailable
            const open = () => viewEcosystemItem(previewLink)

            return (
                <Motion.div
                    key={`${name ?? 'ecosystem'}-${i}`}
                    initial={{ opacity: 0, y: 18, scale: 0.99 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.35 }}
                    transition={{ duration: 0.55, ease: "easeOut", delay: Math.min(i * 0.06, 0.3) }}
                    onClick={isClickable ? open : undefined}
                    className={`ecosystem-card ${isClickable ? 'pointer' : 'ecosystem-card-disabled'} ${isUnavailable ? 'ecosystem-card-unavailable' : ''}`}
                    role={isClickable ? 'button' : undefined}
                    tabIndex={isClickable ? 0 : -1}
                    onKeyDown={(e) => {
                        if (!isClickable) return
                        if (e.key === 'Enter') open()
                        if (e.key === ' ') {
                            e.preventDefault()
                            open()
                        }
                    }}
                >
                    <Motion.div
                        aria-hidden="true"
                        className="ecosystem-card-shine"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, backgroundPositionX: ["0%", "220%"] }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                    />

                    <div className="d-flex align-items-start justify-content-between gap-3">
                        <Motion.div
                            className="ecosystem-card-icon"
                            initial={{ opacity: 0, y: 0 }}
                            whileInView={{ opacity: 1, y: [0, -4, 0] }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            {EcosystemIcon ? <EcosystemIcon /> : null}
                        </Motion.div>

                        <div className="ecosystem-card-arrow">
                            <GoArrowUpRight size={18} color={isClickable ? "#fff" : "#607B96"} />
                        </div>
                    </div>

                    <div className="mt-3">
                        <p className="m-0 p-0 regular-txt txt-FFF ecosystem-card-title">{name}</p>
                        <p className="m-0 p-0 small-txt txt-607B96 mt-2 ecosystem-card-summary">{summary}</p>
                    </div>

                    <div className="ecosystem-card-badge-row">
                        {
                            isUnavailable
                                ? <span className="ecosystem-badge ecosystem-badge-unavailable extra-small-txt">preview unavailable</span>
                                : isClickable
                                    ? <span className="ecosystem-badge ecosystem-badge-live extra-small-txt">live</span>
                                    : <span className="ecosystem-badge ecosystem-badge-soon extra-small-txt">link unavailable</span>
                        }
                    </div>
                </Motion.div>
            )
        })

        return (
            <div
                style={{ maxHeight: '80vh', minHeight: '80vh', overflowY: 'auto' }}
                className="w-100 h-100 d-flex flex-column justify-content-stretch"
            >
                <div
                    className="border-bottom-light-1E2D3D border-right-light-1E2D3D d-flex align-items-stretch justify-content-lg-start justify-content-md-between justify-content-between"
                >
                    <div className="col-lg-4 col-md-10 col-10 p-3 d-flex align-items-center justify-content-between border-right-light-1E2D3D">
                        <p className="m-0 p-0 regular-txt txt-607B96">{name}</p>
                        <RxCross2 size={18} color="607B96" />
                    </div>

                    <div onClick={onShowOffCanvasNav} className="pointer d-lg-none col-2 col-md-2 d-md-flex d-flex align-items-center justify-content-center">
                        <FaFolderOpen size={18} color="607B96" />
                    </div>
                </div>

                <div className="h-100 w-100">
                    <div className="px-lg-1 px-md-1 px-4 h-100 w-100">
                        <div className="w-100 py-4">
                            <div className="w-100 h-100 p-4 d-lg-block d-md-block d-flex flex-column align-items-center justify-content-center">
                                {
                                    description &&
                                    <Motion.p
                                        className="m-0 p-0 regular-txt txt-607B96 text-lg-start text-md-start text-center mb-4"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.6 }}
                                        transition={{ duration: 0.45, ease: "easeOut" }}
                                    >
                                        {description}
                                    </Motion.p>
                                }

                                <Motion.div
                                    className="preview-global-note mb-4"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.7 }}
                                    transition={{ duration: 0.45, ease: "easeOut" }}
                                >
                                    <Motion.div
                                        aria-hidden="true"
                                        className="preview-global-note-glow"
                                        initial={{ opacity: 0.5, backgroundPositionX: "0%" }}
                                        whileInView={{ opacity: 1, backgroundPositionX: ["0%", "220%"] }}
                                        viewport={{ once: false, amount: 0.7 }}
                                        transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
                                    />
                                    <p className="m-0 p-0 small-txt txt-607B96">
                                        Feel free to create accounts on any preview environment if you’d like to explore.
                                    </p>
                                </Motion.div>

                                <h4 className="m-0 p-0 regular-txt txt-607B96 text-lg-start text-md-start text-center mb-4">This project was developed using the following stacks</h4>
                                <div className="mb-5 d-flex align-items-center justify-content-lg-start justify-content-md-start justify-content-center flex-wrap">
                                    {displayProjectStacks}
                                </div>

                                {
                                    showEcosystem &&
                                    <div className="w-100 ecosystem-section mb-5">
                                        <div className="d-flex flex-wrap align-items-end justify-content-between gap-3 mb-4">
                                            <div>
                                                <p className="m-0 p-0 regular-txt txt-FFF">{toTitle(name)} ecosystem</p>
                                                <p className="m-0 p-0 small-txt txt-607B96 mt-2">Apps, dashboards, and systems powering the platform.</p>
                                            </div>
                                            <Motion.div
                                                className="ecosystem-pill"
                                                initial={{ opacity: 0, scale: 0.98 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: false, amount: 0.6 }}
                                                transition={{ duration: 0.45, ease: "easeOut" }}
                                            >
                                                <Motion.div
                                                    aria-hidden="true"
                                                    className="ecosystem-pill-glow"
                                                    initial={{ opacity: 0.6, backgroundPositionX: "0%" }}
                                                    whileInView={{ opacity: 1, backgroundPositionX: ["0%", "200%"] }}
                                                    viewport={{ once: false, amount: 0.7 }}
                                                    transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
                                                />
                                                <p className="m-0 p-0 extra-small-txt txt-FFF">{ecosystemItems.length} modules</p>
                                            </Motion.div>
                                        </div>

                                        <div className="ecosystem-grid">
                                            {displayEcosystem}
                                        </div>
                                    </div>
                                }

                                {
                                    ecosystemItems?.length === 0
                                    &&
                                    <div className="d-flex align-items-start justify-content-start">
                                        {
                                            <div onClick={viewLiveProject} className="pointer bg-1C2B3A p-2 rounded-3 d-flex align-items-center justify-content-between">
                                                <p className="m-0 p-0 mx-1 extra-small-txt txt-FFF">
                                                    {
                                                        type == 'app' ? 'Download APP' : 'Live preview'
                                                    }
                                                </p>
                                                <div className="mx-1">
                                                    <GoArrowUpRight size={18} color="fff" />
                                                </div>
                                            </div>
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <Modal centered show={showPreviewModal} onHide={closePreviewModal}>
                    <div className="bg-011221 preview-modal">
                        <div className="d-flex align-items-center justify-content-between border-bottom-light-1E2D3D px-3">
                            <p className="py-3 m-0 p-0 regular-txt txt-607B96">preview</p>
                            <RxCross2 size={20} color="#607B96" onClick={closePreviewModal} className="pointer" />
                        </div>

                        <div className="p-3">
                            <p className="m-0 p-0 regular-txt txt-FFF">{selectedPreview?.name}</p>
                            <p className="m-0 p-0 small-txt txt-607B96 mt-2">{selectedPreview?.summary}</p>

                            <div className="preview-modal-hint mt-3">
                                <p className="m-0 p-0 extra-small-txt txt-607B96">
                                    You can also create an account if you prefer.
                                </p>
                            </div>

                            <div className="mt-4 d-flex align-items-center justify-content-end gap-2">
                                <button onClick={closePreviewModal} className="extra-small-txt txt-FFF bg-1C2B3A p-2 rounded-3">
                                    cancel
                                </button>
                                <button
                                    onClick={() => {
                                        const link = selectedPreview?.previewLink
                                        closePreviewModal()
                                        if (link) viewEcosystemItem(link)
                                    }}
                                    className="extra-small-txt txt-FFF bg-1C2B3A p-2 rounded-3"
                                >
                                    continue
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>

                {/* <div className="d-lg-none d-md-none d-block">
                    <FloatingBtn icon="link" btnFunc={viewLiveProject} />
                </div>            */}
            </div>
        )
    }

    return <></>
}
