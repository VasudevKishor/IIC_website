import "../styles/Workshops.css"
export default function Workshops(){
    return(
        <>
            <section className="workshop-title" id="workshop">
                <h2>WORK</h2>
                <h2 style={{marginLeft:"15vw"}}>SHOPS</h2>
            </section>

            <section className="workshop-1-text">
                <div className="workshop-1-details">
                    <h3>Business Model Canvas (BMC) </h3>
                    <p>
                    This workshop will introduce students to the Business Model Canvas (BMC), a strategic tool for visualizing and analyzing business ventures. Participants will learn to dissect and understand the nine key building blocks of a successful business – from identifying target customers and crafting compelling value propositions to defining revenue streams and key partnerships. Through interactive exercises and real-world case studies, students will gain practical experience in developing and refining their own business models. This workshop is crucial for aspiring entrepreneurs and innovators, providing them with a framework to articulate, evaluate, and ultimately realize their business ideas.
                    </p>
                    <p className="register-now">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSehmHE4RHbrNg1gihd0jas22SrBNjHCExCGPruSmzWmTcjrhw/viewform?usp=dialog">Register Now!</a>
                    </p>
                </div>
            </section>
        </>
    )
}