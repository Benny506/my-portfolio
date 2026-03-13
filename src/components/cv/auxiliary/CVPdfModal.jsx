import { useRef } from "react";
import { Modal } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";
import { useReactToPrint } from "react-to-print";

export default function CVPdfModal({
    show,
    onHide,
    coreExpertise,
    technologies,
    work,
    leadership
}) {

    const printRef = useRef();

    const handlePrint = useReactToPrint({
        contentRef: printRef,
        documentTitle: "Benedict_Ufeh_Olom_CV"
    });

    return (
        <Modal centered size="lg" show={show} onHide={onHide}>
            <div className="cv-pdf-modal">

                {/* TOP BAR */}
                <div className="d-flex align-items-center justify-content-between cv-pdf-topbar">
                    <p className="m-0 p-0 regular-txt cv-pdf-topbar-title">
                        PDF preview
                    </p>

                    <div className="d-flex align-items-center gap-2">

                        <button
                            type="button"
                            className="cv-pdf-btn"
                            onClick={handlePrint}
                        >
                            print
                        </button>

                        <RxCross2
                            size={20}
                            color="#0D0D0D"
                            onClick={onHide}
                            className="pointer"
                        />

                    </div>
                </div>

                {/* PRINTABLE CONTENT */}
                <div ref={printRef} className="cv-pdf-page">

                    <div className="d-flex flex-wrap align-items-start justify-content-between gap-3">
                        <div className="col-lg-7 col-12">
                            <p className="m-0 p-0 cv-pdf-name">
                                Benedict Ufeh Olom
                            </p>

                            <p className="m-0 p-0 cv-pdf-role mt-1">
                                Frontend Engineer | React & React Native
                            </p>

                            <p className="m-0 p-0 cv-pdf-sub mt-2">
                                Open to Global Remote Roles
                            </p>
                        </div>

                        <div className="col-lg-4 col-12">
                            <p className="m-0 p-0 cv-pdf-meta">
                                olomufeh@gmail.com
                            </p>

                            <p className="m-0 p-0 cv-pdf-meta mt-1">
                                GitHub: Benny506
                            </p>

                            <p className="m-0 p-0 cv-pdf-meta mt-1">
                                Portfolio: /projects
                            </p>
                        </div>
                    </div>

                    <div className="cv-pdf-divider mt-4" />

                    <div className="cv-pdf-section mt-4">
                        <p className="m-0 p-0 cv-pdf-h">
                            Professional Summary
                        </p>

                        <p className="m-0 p-0 cv-pdf-p mt-2">
                            Frontend Engineer with 4+ years of professional experience (2021–Present) building production-grade web and mobile applications. Specialized in scalable React architectures, secure payment workflows, real-time systems, and performance-optimized user interfaces.
                        </p>
                    </div>

                    <div className="cv-pdf-grid mt-4">

                        <div className="cv-pdf-col">
                            <p className="m-0 p-0 cv-pdf-h">Core Expertise</p>

                            <div className="mt-2">
                                {coreExpertise.flatMap((b) => [b.title, ...b.items]).map((t, i) => (
                                    <p key={i} className="m-0 p-0 cv-pdf-li">{t}</p>
                                ))}
                            </div>
                        </div>

                        <div className="cv-pdf-col">
                            <p className="m-0 p-0 cv-pdf-h">Technologies</p>

                            <div className="mt-2 cv-pdf-tags">
                                {technologies.map((t, i) => (
                                    <span key={i} className="cv-pdf-tag">{t}</span>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="cv-pdf-section mt-4">
                        <p className="m-0 p-0 cv-pdf-h">
                            Professional Experience
                        </p>

                        <div className="mt-2">
                            {work.map((w, i) => (
                                <div key={i} className={`cv-pdf-block ${i !== 0 ? 'mt-3' : ''}`}>
                                    <p className="m-0 p-0 cv-pdf-subh">{w.title}</p>

                                    <div className="mt-2">
                                        {w.bullets.map((b, idx) => (
                                            <p key={idx} className="m-0 p-0 cv-pdf-li">
                                                • {b}
                                            </p>
                                        ))}
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="cv-pdf-grid mt-4">

                        <div className="cv-pdf-col">
                            <p className="m-0 p-0 cv-pdf-h">
                                Technical Leadership
                            </p>

                            <div className="mt-2">
                                {leadership.map((t, i) => (
                                    <p key={i} className="m-0 p-0 cv-pdf-li">
                                        • {t}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="cv-pdf-col">
                            <p className="m-0 p-0 cv-pdf-h">
                                Languages
                            </p>

                            <p className="m-0 p-0 cv-pdf-li mt-2">
                                English – Fluent
                            </p>
                        </div>

                    </div>

                    <div className="cv-pdf-footer mt-4">
                        <p className="m-0 p-0 cv-pdf-footnote">
                            This is a PDF-style preview.
                        </p>
                    </div>

                </div>
            </div>
        </Modal>
    );
}