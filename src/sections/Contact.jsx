import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                'service_v8q7lxj',
                'template_y98uvrs',
                {
                    from_name: form.name,
                    to_name: 'Aryan',
                    from_email: form.email,
                    to_email: 'QmN2S@example.com', // replace with your real email
                    message: form.message
                },
                'oJ5BOPt7nn7Onz7ju'
            );

            alert('Thank you, I will get back to you as soon as possible.');
            setForm({ name: '', email: '', message: '' }); // reset form
        } catch (error) {
            console.error(error);
            alert('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="c-space my-20">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img
                    src="/assets/terminal.png"
                    alt="terminal"
                    className="absolute inset-0 min-h-screen"
                />

                <div className="contact-container relative z-10">
                    <h3 className="head-text mt-9">Let's Connect</h3>
                    <p className="text-white-500 text-lg">
                        Whether you're looking to build something new, improve your existing
                        projects, or bring a unique project idea to life, I'm here to help you
                        succeed. Let's create something exceptional together!
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Enter your name"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Your email"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Hi, I wanna give you a job..."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img
                                src="/assets/arrow-up.png"
                                alt="arrow-right"
                                className="field-btn_arrow"
                            />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
