import { Modal } from "react-bootstrap";
import { motion as Motion } from "motion/react";
import { RxCross2 } from "react-icons/rx";
import { IoCallOutline, IoMailOutline, IoLogoWhatsapp } from "react-icons/io5";
import "./css/contact.css";

export default function ContactModal({ show, onHide }) {
    const businessPhoneLocal = "07010915889"
    const personalPhoneLocal = "09095548706"

    const waBusiness = "2347010915889"
    const waPersonal = "2349095548706"

    const businessMessage = "Hello Benedict, I got your number from your portfolio website. I’d like to discuss a role/project with you."
    const personalMessage = "Hi Benedict, I found your number via your portfolio website. Quick question for you."

    const openCall = (phone) => {
        globalThis?.location && (globalThis.location.href = `tel:${phone}`)
    }

    const openWhatsApp = (waNumber, message) => {
        const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`
        globalThis?.open?.(url, "_blank", "noopener")
    }

    const openEmail = () => {
        const subject = "Hello Benedict (from your portfolio website)"
        const body = "Hi Benedict,%0D%0A%0D%0AI came across your portfolio website and would like to connect.%0D%0A%0D%0ARegards,"
        globalThis?.location && (globalThis.location.href = `mailto:olomufeh@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`)
    }

    return (
        <Modal centered show={show} onHide={onHide}>
            <div className="contact-modal">
                <div className="contact-modal-topbar">
                    <p className="m-0 p-0 regular-txt txt-607B96">contact</p>
                    <RxCross2 size={20} color="#607B96" onClick={onHide} className="pointer" />
                </div>

                <div className="contact-modal-body">
                    <Motion.div
                        className="contact-card"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <Motion.div
                            aria-hidden="true"
                            className="contact-card-shine"
                            initial={{ opacity: 0.6, backgroundPositionX: "0%" }}
                            animate={{ opacity: 1, backgroundPositionX: ["0%", "220%"] }}
                            transition={{ duration: 3.0, repeat: Infinity, ease: "linear" }}
                        />

                        <div className="d-flex align-items-start justify-content-between gap-3">
                            <div>
                                <p className="m-0 p-0 regular-txt txt-FFF">Business line</p>
                                <p className="m-0 p-0 small-txt txt-607B96 mt-2">{businessPhoneLocal}</p>
                                <p className="m-0 p-0 extra-small-txt txt-607B96 mt-2">Calls + WhatsApp supported</p>
                            </div>
                            <Motion.div
                                aria-hidden="true"
                                initial={{ opacity: 0.8, y: 0 }}
                                animate={{ opacity: 1, y: [0, -3, 0] }}
                                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                                className="contact-card-icon"
                            >
                                <IoCallOutline size={20} color="#86E1F9" />
                            </Motion.div>
                        </div>

                        <div className="contact-actions">
                            <button
                                type="button"
                                className="contact-action-btn"
                                onClick={() => openCall(businessPhoneLocal)}
                            >
                                <IoCallOutline size={18} color="#fff" />
                                <span className="extra-small-txt txt-FFF">call</span>
                            </button>
                            <button
                                type="button"
                                className="contact-action-btn"
                                onClick={() => openWhatsApp(waBusiness, businessMessage)}
                            >
                                <IoLogoWhatsapp size={18} color="#fff" />
                                <span className="extra-small-txt txt-FFF">whatsapp</span>
                            </button>
                        </div>
                    </Motion.div>

                    <Motion.div
                        className="contact-card"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
                    >
                        <Motion.div
                            aria-hidden="true"
                            className="contact-card-shine"
                            initial={{ opacity: 0.5, backgroundPositionX: "0%" }}
                            animate={{ opacity: 1, backgroundPositionX: ["0%", "220%"] }}
                            transition={{ duration: 3.1, repeat: Infinity, ease: "linear" }}
                        />

                        <div className="d-flex align-items-start justify-content-between gap-3">
                            <div>
                                <p className="m-0 p-0 regular-txt txt-FFF">Personal line</p>
                                <p className="m-0 p-0 small-txt txt-607B96 mt-2">{personalPhoneLocal}</p>
                                <p className="m-0 p-0 extra-small-txt txt-607B96 mt-2">WhatsApp only</p>
                            </div>
                            <Motion.div
                                aria-hidden="true"
                                initial={{ opacity: 0.8, y: 0 }}
                                animate={{ opacity: 1, y: [0, -3, 0] }}
                                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                                className="contact-card-icon"
                            >
                                <IoLogoWhatsapp size={20} color="#43D9AD" />
                            </Motion.div>
                        </div>

                        <div className="contact-actions">
                            <button
                                type="button"
                                className="contact-action-btn"
                                onClick={() => openWhatsApp(waPersonal, personalMessage)}
                            >
                                <IoLogoWhatsapp size={18} color="#fff" />
                                <span className="extra-small-txt txt-FFF">whatsapp</span>
                            </button>
                        </div>
                    </Motion.div>

                    <Motion.div
                        className="contact-card"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    >
                        <Motion.div
                            aria-hidden="true"
                            className="contact-card-shine"
                            initial={{ opacity: 0.45, backgroundPositionX: "0%" }}
                            animate={{ opacity: 1, backgroundPositionX: ["0%", "220%"] }}
                            transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
                        />

                        <div className="d-flex align-items-start justify-content-between gap-3">
                            <div>
                                <p className="m-0 p-0 regular-txt txt-FFF">Email</p>
                                <p className="m-0 p-0 small-txt txt-607B96 mt-2">olomufeh@gmail.com</p>
                                <p className="m-0 p-0 extra-small-txt txt-607B96 mt-2">Opens your default mail app</p>
                            </div>
                            <Motion.div
                                aria-hidden="true"
                                initial={{ opacity: 0.8, y: 0 }}
                                animate={{ opacity: 1, y: [0, -3, 0] }}
                                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                                className="contact-card-icon"
                            >
                                <IoMailOutline size={20} color="#5565E8" />
                            </Motion.div>
                        </div>

                        <div className="contact-actions">
                            <button
                                type="button"
                                className="contact-action-btn"
                                onClick={openEmail}
                            >
                                <IoMailOutline size={18} color="#fff" />
                                <span className="extra-small-txt txt-FFF">email</span>
                            </button>
                        </div>
                    </Motion.div>
                </div>
            </div>
        </Modal>
    )
}

