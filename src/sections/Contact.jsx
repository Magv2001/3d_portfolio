import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import { useLanguage } from "../i18n/useLanguage";
import ContactExperience from "../components/ContactExperience";

const Contact = () => {
    const { t } = useLanguage();
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // null | "success" | "error"

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setStatus(null);
        
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            )

            setFormData({ name: "", email: "", message: "" });
            setStatus("success");
        } catch(error) {
            console.error("EMAILJS ERROR,", error)
            setStatus("error");
        } finally {
            setLoading(false)
        }
    };

    return (
        <section id="contact" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader 
                    title={t("contact.title")}
                    sub={t("contact.sub")}
                />

                <div className="mt-16 grid-12-cols">
                    {/* Contact Form - Left Side */}
                    <div className="xl:col-span-5">
                        <div className="flex-center card-border rounded-xl p-10">
                            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7" ref={formRef}>
                                <div>
                                    <label htmlFor="name">{t("contact.name")}</label>
                                    <input 
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder={t("contact.namePlaceholder")}
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email">{t("contact.email")}</label>
                                    <input 
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder={t("contact.emailPlaceholder")}
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message">{t("contact.message")}</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        placeholder={t("contact.messagePlaceholder")}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    >
                                    </textarea>
                                </div>

                                <button type="submit" disabled={loading}>
                                    <div className="cta-button group">
                                        <div className="bg-circle" />
                                        <p className="text">{loading ? t("contact.sending") : t("contact.send")}</p>
                                        <div className="arrow-wrapper">
                                            <img src="/images/arrow-down.svg" alt="arrow" />
                                        </div>
                                    </div>
                                </button>

                                {status === "success" && (
                                    <p role="status" className="text-green-400">
                                        {t("contact.success")}
                                    </p>
                                )}
                                {status === "error" && (
                                    <p role="alert" className="text-red-400">
                                        {t("contact.error")}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* 3D Experience - Right Side */}
                    <div className="xl:col-span-7 min-h-96">
                        <div className="w-full h-full bg-[radial-gradient(circle_at_center,#1e3a5f_0%,#0b1622_80%)] hover:cursor-grab rounded-3xl overflow-hidden">
                            <ContactExperience />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
