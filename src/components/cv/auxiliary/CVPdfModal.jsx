import { useRef } from "react";
import { Modal } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";
import { useReactToPrint } from "react-to-print";
import { projectData } from "../../projects/auxiliary/projectsData";

export default function CVPdfModal({
    show,
    onHide,
    coreExpertise,
    technologies,
    work,
    leadership
}) {

    const printRef = useRef();

    const githubUrl = "https://github.com/Benny506"
    const portfolioUrl = "https://example.com/portfolio"
    const digitalPreviewUrl = `${globalThis?.location?.origin ?? ""}/#/my-cv` || "#/my-cv"
    const linkedInUrl = "https://www.linkedin.com/in/ufeholom/"

    const handlePrint = useReactToPrint({
        contentRef: printRef,
        documentTitle: "Benedict_Ufeh_Olom_CV"
    });

    const normalize = (value) => `${value ?? ""}`.toLowerCase().replace(/[^a-z0-9]+/g, "")

    const workKey = (title) => {
        const t = normalize(title)
        if (t.includes("lavendercare")) return "lavendercare"
        if (t.includes("awambe")) return "awambe"
        if (t.includes("scrap2style")) return "scrap2style"
        if (t.includes("flexxxa")) return "flexxxa"
        if (t.includes("leash")) return "leash"
        if (t.includes("myunimap") || t.includes("myuni") || t.includes("unimap")) return "myunimap"
        return ""
    }

    const findProjectForTitle = (title) => {
        const t = normalize(title)
        if (t.includes("awambe")) return projectData.find((p) => p.name === "awambe")
        if (t.includes("scrap2style")) return projectData.find((p) => p.name === "scrap-2-style")
        if (t.includes("flexxxa")) return projectData.find((p) => normalize(p.name) === "flexxxa")
        if (t.includes("lavendercare")) return projectData.find((p) => p.name === "lavendercare")
        if (t.includes("leash")) return projectData.find((p) => p.name === "leash")
        return null
    }

    const getProjectLinks = (project) => {
        if (!project) return []
        const ecosystemLinks = (project.ecosystem ?? [])
            .filter((e) => e?.previewLink && e?.availability !== "unavailable")
            .map((e) => {
                return {
                    label: e.name,
                    href: e.previewLink,
                }
            })

        const mainLink = project.previewLink
            ? [{
                label: "Main preview",
                href: project.previewLink,
            }]
            : []

        const merged = [...ecosystemLinks]
        for (const l of mainLink) {
            if (!merged.some((m) => m.href === l.href)) merged.push(l)
        }
        return merged
    }

    const orderedWork = (() => {
        const order = ["lavendercare", "scrap2style", "awambe", "flexxxa", "leash", "myunimap"]
        const withIndex = work.map((w, idx) => {
            const key = workKey(w?.title)
            const orderIndex = key ? order.indexOf(key) : -1
            return { w, idx, orderIndex }
        })
        return withIndex
            .sort((a, b) => {
                const ax = a.orderIndex === -1 ? 999 : a.orderIndex
                const bx = b.orderIndex === -1 ? 999 : b.orderIndex
                if (ax !== bx) return ax - bx
                return a.idx - b.idx
            })
            .map((x) => x.w)
    })()

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

                    <div className="cv-pdf-card">
                        <div className="cv-pdf-header-row">
                            <div className="cv-pdf-header-left">
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

                            <div className="d-flex align-items-center gap-3 flex-wrap cv-pdf-header-right">
                                <p className="m-0 p-0 cv-pdf-meta">
                                    <a className="cv-pdf-link-badge" href="mailto:olomufeh@gmail.com">olomufeh@gmail.com ↗</a>
                                </p>

                                {/* <p className="m-0 p-0 cv-pdf-meta mt-1">
                                    GitHub: <a className="cv-pdf-link-badge" href={githubUrl} target="_blank" rel="noopener">Benny506 ↗</a>
                                </p> */}

                                <p className="m-0 p-0 cv-pdf-meta mt-1">
                                    <a className="cv-pdf-link-badge" href={portfolioUrl} target="_blank" rel="noopener">Portfolio ↗</a>
                                </p>

                                <p className="m-0 p-0 cv-pdf-meta mt-1">
                                    <a className="cv-pdf-link-badge" href={linkedInUrl} target="_blank" rel="noopener">LinkedIn ↗</a>
                                </p>

                                <p className="m-0 p-0 cv-pdf-meta mt-1">
                                    <a className="cv-pdf-link-badge" href={digitalPreviewUrl} target="_blank" rel="noopener">Digital preview ↗</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="cv-pdf-divider mt-4" />

                    <div className="cv-pdf-card cv-pdf-section mt-4">
                        <p className="m-0 p-0 cv-pdf-h">
                            Professional Summary
                        </p>

                        <p className="m-0 p-0 cv-pdf-p mt-2">
                            Frontend Engineer with 4+ years of professional experience (2021–Present) building production-grade web and mobile applications. Specialized in scalable React architectures, secure payment workflows, real-time systems, and performance-optimized user interfaces.
                        </p>
                    </div>

                    <div className="cv-pdf-grid mt-4">

                        <div className="cv-pdf-col cv-pdf-card">
                            <p className="m-0 p-0 cv-pdf-h">Core Expertise</p>

                            <div className="mt-2">
                                {coreExpertise.map((b, i) => (
                                    <div key={i} className={`${i !== 0 ? "mt-3" : ""} cv-pdf-expertise-block`}>
                                        <p className="m-0 p-0 cv-pdf-expertise-title">{b.title}</p>
                                        <div className="mt-2">
                                            {b.items.map((t, idx) => (
                                                <p key={idx} className="m-0 p-0 cv-pdf-expertise-li">
                                                    <span className="cv-pdf-dot">•</span> <span className="mx-2">{t}</span>
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="cv-pdf-col cv-pdf-card">
                            <p className="m-0 p-0 cv-pdf-h">Technologies</p>

                            <div className="mt-2 cv-pdf-tags">
                                {technologies.map((t, i) => (
                                    <span key={i} className="cv-pdf-tag">{t}</span>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="cv-pdf-card cv-pdf-section mt-4">
                        <p className="m-0 p-0 cv-pdf-h">
                            Professional Experience
                        </p>

                        <p className="m-0 p-0 cv-pdf-note mt-2">
                            All links are sign-in supported. Feel free to create accounts.
                        </p>

                        <div className="mt-2">
                            {orderedWork.map((w, i) => {
                                const project = findProjectForTitle(w.title)
                                const links = getProjectLinks(project)

                                return (
                                    <div key={i} className={`cv-pdf-exp-card cv-pdf-block ${i !== 0 ? 'mt-3' : ''}`}>
                                        <p className="m-0 p-0 cv-pdf-subh">{w.title}</p>

                                        <div className="mt-2">
                                            {w.bullets.map((b, idx) => (
                                                <p key={idx} className="m-0 p-0 cv-pdf-li">
                                                    • {b}
                                                </p>
                                            ))}
                                        </div>

                                        {
                                            links.length > 0 &&
                                            <div className="cv-pdf-links mt-2">
                                                {links.map((l, idx) => (
                                                    <a
                                                        key={`${l.href}-${idx}`}
                                                        className="cv-pdf-link-chip"
                                                        href={l.href}
                                                        target="_blank"
                                                        rel="noopener"
                                                    >
                                                        {l.label} ↗
                                                    </a>
                                                ))}
                                            </div>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="cv-pdf-grid mt-4">

                        <div className="cv-pdf-col cv-pdf-card">
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

                        <div className="cv-pdf-col cv-pdf-card">
                            <p className="m-0 p-0 cv-pdf-h">
                                Languages
                            </p>

                            <p className="m-0 p-0 cv-pdf-li mt-2">
                                English – Fluent
                            </p>
                        </div>

                    </div>

                    <div className="cv-pdf-card cv-pdf-footer mt-4">
                        <p className="m-0 p-0 cv-pdf-footnote">
                            This is a PDF-style preview.
                        </p>
                    </div>

                </div>
            </div>
        </Modal>
    );
}
