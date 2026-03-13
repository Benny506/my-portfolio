import { motion as Motion } from "motion/react";

export default function CVSection({ id, title, children }) {
    return (
        <Motion.section
            id={id}
            className="mt-5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
        >
            <div className="cv-section-header mb-3">
                <Motion.div
                    aria-hidden="true"
                    className="cv-section-line"
                    initial={{ opacity: 0.4, backgroundPositionX: "0%" }}
                    whileInView={{ opacity: 1, backgroundPositionX: ["0%", "200%"] }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                />
                <p className="m-0 p-0 extra-small-txt txt-FFF">{title}</p>
            </div>
            {children}
        </Motion.section>
    )
}
