import React from 'react'

const Footer = () => {
    return (
        <section className="c-space pt-7 pb-5
        border-t border-black-300 flex justify-between flex-wrap gap-5">
            <div  className={"text-white-500 flex gap-2"}>
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>

            </div>

            <div className="flex gap-3">
                {/* GitHub */}
                <a href="https://github.com/aryantomarrr" target="_blank" rel="noopener noreferrer">
                    <div className="social-icon mr-2">
                        <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
                    </div>
                </a>

                {/* Twitter */}
                <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
                    <div className="social-icon mr-2">
                        <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
                    </div>
                </a>

                {/* Instagram */}
                <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer">
                    <div className="social-icon mr-2">
                        <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
                    </div>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/aryan-singh-tomar-2b494b1a0/" target="_blank" rel="noopener noreferrer">
                    <div className="social-icon mr-2">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
                            alt="linkedin"
                            className="w-1/2 h-1/2"
                        />


                    </div>
                </a>


            </div>

            <p className="text-white-500">2025 Aryan Singh Tomar All rights reserved</p>

        </section>
    )
}
export default Footer
