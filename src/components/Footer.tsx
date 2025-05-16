// src/components/Footer.tsx
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold">Gihan Viduranga</h2>
                        <p className="text-gray-400 mt-2">Frontend Developer & UI/UX Designer</p>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-white transition">
                            <GithubIcon className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition">
                            <LinkedinIcon className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition">
                            <TwitterIcon className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition">
                            <DribbbleIcon className="w-6 h-6" />
                        </a>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Gihan Viduranga. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

// Social media icons
const GithubIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
);

const DribbbleIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-8.954-2.44c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 6.756 3.206 9.347 1.715 12.3c.95 1.902 2.41 3.57 4.19 4.825zm-5.52-7.117c.172.64.51 2.21 1.13 4.08.26-.55.78-1.7 1.54-2.77-.96-1.165-2.06-2.19-3.23-3.05-.18.9-.28 1.83-.28 2.76 0 .18.01.36.03.53.14-.56.45-1.35.81-2.55zm16.43-3.3c-1.5.9-3.18 1.65-4.98 2.23 1.05.53 2.04 1.15 2.96 1.85.3-.45.57-.93.8-1.42-.64-.5-1.3-.95-1.98-1.38.27-.07.54-.13.81-.18.66-.12 1.33-.18 2-.18.18 0 .36.01.54.03.1-.15.2-.3.28-.46-.4-.07-.8-.12-1.21-.15-.42-.02-.84-.03-1.25-.03-.45 0-.9.02-1.34.06-.1-.2-.2-.4-.3-.6-.75-.3-1.5-.58-2.28-.8.3-.77.6-1.52.87-2.24 2.17.85 4.3 1.9 6.3 3.15-.45.9-.99 1.76-1.6 2.56-.15.2-.3.4-.46.6.4.2.8.4 1.18.62.2-.3.4-.6.6-.9-.2-.15-.4-.3-.6-.45z"/>
    </svg>
);

export default Footer;