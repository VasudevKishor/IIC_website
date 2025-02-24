import "../styles/AboutGenesis.css"
import campusImage from "../images/Campus4.jpg"
export default function AboutGenesis(){
    return(
        <>
            <section className="about-genesis" id="bitch">
                <div className="about-image">
                    <img src={campusImage} alt="" />
                </div>
                <div className="about-text">
                    <div className="about-card">
                        <h2>About GENESIS</h2>
                        <p>
                            Genesis 2025 is a three day event conducted by Institution’s Innovation Council, an initiative by the Ministry of Education to foster innovation and start-up culture in universities. This event serves as a celebration of ideas and innovation, giving students direct access to investors, mentors, and thought leaders. Participate in our flagship event, Exodus, a competition focused on pitching your best ideas and adapting to business scenarios. Expand your entrepreneurship knowledge by attending our workshops on Prototype/Process Development and Design, and Business Model Canvas. The ATAL Sarthi Project Showcase is also a part of Genesis’25, which will be a one-day exhibition designed to encourage young innovators to showcase their creative solutions in STEM, sustainability, entrepreneurship, and social impact.
                        </p>
                        <div className="about-links">
                            <a href="#exodus">Events</a>
                            <a href="#workshop">Workshops</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
