import './about.css'
import { aboutParagraphs } from '../structs/about'

export default function AboutPage() {
    return (
        <main className="about-page">
            <section className="intro-section">
                <h1>About Me</h1>
                <span className="intro-paras">{aboutParagraphs.map((para, index) => (
                    <p key={index}>{para}</p>
                ))}</span>
            </section>
        </main>
    )
}