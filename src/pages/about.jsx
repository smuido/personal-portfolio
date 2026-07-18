import './about.css'
import githubLogo from '../assets/github.svg'
import linkedinLogo from '../assets/linkedin.svg'
import instagramLogo from '../assets/instagram.svg'
import hobbiesImage from '../assets/hobbies.JPG'
import aboutImage from '../assets/abt-me.jpg'

import { aboutIntro, aboutParagraphs, careerDesiresParagraphs, hobbiesParagraphs } from '../structs/about'

const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/smuido',
        icon: githubLogo,
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/smaya-guido-60ba83304/',
        icon: linkedinLogo,
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/thetatertotz/',
        icon: instagramLogo,
    },
]

export default function AboutPage() {
    return (
        <main className="about-page">
            <section className="intro-section">
                <div className="about-media-column">
                    <div className="about-photo-slot" role="img" aria-label="Profile photo placeholder">
                        <img src={aboutImage} alt="Profile photo" />
                    </div>

                    <div className="about-socials" aria-label="Social links">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                className="about-social-link"
                                href={link.href}
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label={link.name}
                            >
                                <img src={link.icon} alt="" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="about-text-column">
                    <section className="about-subsection overview-section" aria-labelledby="overview-title">
                        <h2 id="overview-title">Overview</h2>
                        <p className="about-intro">{aboutIntro}</p>
                        <div className="intro-paras">{aboutParagraphs.map((para, index) => (
                            <p key={index}>{para}</p>
                        ))}</div>
                    </section>
                </div>
            </section>

            <section className="career-section about-subsection" aria-labelledby="career-desires-title">
                <h2 id="career-desires-title">Career Desires</h2>
                <div className="about-subsection-paras">
                    {careerDesiresParagraphs.map((para, index) => (
                        <p key={index}>{para}</p>
                    ))}
                </div>
            </section>

            <section className="hobbies-section" aria-labelledby="hobbies-title">
                <div className="about-subsection hobbies-text-column">
                        <h2 id="hobbies-title">Hobbies</h2>
                        <div className="about-subsection-paras">
                            {hobbiesParagraphs.map((para, index) => (
                                <p key={index}>{para}</p>
                            ))}
                        </div>
                </div>

                <div className="hobbies-image-slot">
                    <img
                        src={hobbiesImage}
                        alt="Hobbies photo"
                        className="hobby-slide-image"
                    />
                </div>
            </section>
        </main>
    )
}