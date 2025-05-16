// src/components/ContactSection.tsx
const ContactSection = () => {
    return (
        <section id="contact" className="py-40 bg-white px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Get In <span className="text-purple-600">Touch</span>
                </h2>
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                        <p className="mb-6">
                            Feel free to reach out to me for any questions or opportunities!
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-purple-100 p-3 rounded-full">
                                    <MailIcon className="text-purple-600 w-6 h-6" />
                                </div>
                                <span>gihanvidu123@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-purple-100 p-3 rounded-full">
                                    <PhoneIcon className="text-purple-600 w-6 h-6" />
                                </div>
                                <span>076 676 0016</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-purple-100 p-3 rounded-full">
                                    <MapPinIcon className="text-purple-600 w-6 h-6" />
                                </div>
                                <span>Wadduwa,Sri Lanka</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition w-full"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

// You'll need to create or import these icons
const MailIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
    </svg>
);

const MapPinIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>
);

export default ContactSection;