import React, {useState} from 'react'
import Globe from "react-globe.gl";
import Button from '../components/Button';


const About = () => {

    const [hasCopied, setHasCopied] = useState(false);
    const handelCopy = () => {
        navigator.clipboard.writeText("aryantomar.tomar12@gmail.com");

        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }
    return (
        <section className = "c-space my-20" id = "about">
            <div className = "grid xl:grid-cols-3 xl:grid-rows-6
            md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className = "col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src = "/assets/grid1.png" alt = "grid-1" className="w-full
                        sm:h-[279px] h-fit object-contain" />

                        <div>
                            <p className = "grid-headtext">Hey I am Aryan!</p>
                            <p className = "grid-subtext">Pre-Final B.Tech CSE AIML Student with practical experience
                                in Software Development, AI, and DSA. Proficient in Machine
                                Learning, Frontend Development, and problem-solving. A
                                proactive learner with strong teamwork skills, focused on
                                building scalable tech solutions and driving innovation.</p>
                        </div>
                    </div>
                </div>


                <div className = "col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src = "/assets/grid2.png" alt = "grid-1" className="w-full
                        sm:h-[279px] h-fit object-contain" />

                        <div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
                                <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                                    I craft data-driven, interactive, and 3D-powered web applications using
                                    cutting-edge tools and frameworks.
                                </p>

                                <div className="flex flex-wrap justify-center gap-3">
                                    {[
                                        "Data Science",
                                        "Machine Learning",
                                        "MERN Stack",
                                        "React.js",
                                        "Next.js",
                                        "React Three Fiber",
                                        "Python",
                                        "SQL / NoSQL"
                                    ].map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm border border-gray-700 hover:bg-gray-700 transition"
                                        >
                                        {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>


                        </div>
                    </div>
                </div>



                <div className = "col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className = "rounded-3xl w-full
                        sm:h-[326px] h-fit flex justify-center items-center">

                            <Globe
                            height ={326}
                            width = {326}
                            backgroundColor ="rgba(0, 0, 0, 0)"
                            backgroundImageOpacity = {0.5}
                            showAtmosphere = {true}
                            showGraticules={true}
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

                            />

                        </div>

                        <div>
                            <p className = "grid-headtext">I work remotely across most timezones.</p>
                            <p className = "grid-subtext">I am based in India,
                                with remote work available globally.</p>
                            <Button name = "Contact Me" isBeam={true} containerClass={"w-full mt-10"}/>

                        </div>
                    </div>
                </div>

                <div className = "xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src = "/assets/grid3.png" alt = "grid-3" className="w-full
                        sm:h-[266px] h-fit object-contain" />

                        <div>
                            <p className = "grid-headtext">My passion for coding</p>
                            <p className = "grid-subtext">I love solving problems and building things
                                through code. Coding isn't just my profession - it's my passion.</p>
                        </div>

                    </div>
                </div>

                <div className = "xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src = "/assets/grid4.png" alt = "grid-4" className="w-full
                        mid-h:[126px] sm:h-[266px] h-fit object-cover sm:object-top" />

                        <div className="space-y-2">

                            <p className = "grid-subtext text-center">Contact Me</p>
                            <div className="copy-container" onClick={handelCopy}>
                                <img src={hasCopied ? '/assets/tick.svg': '/assets/copy.svg'} alt="copy" />
                                <p className="lg:text-xl md:text-xl font-medium
                                text-gray_gradient text-white">aryantomar.tomar12@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}
export default About
