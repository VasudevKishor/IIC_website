import genesisLogo from "../images/genesis-logo-transparent.png"
import "../styles/GenesisHome.css"
import { Link } from "react-router"
export default function GenesisHome(){
    return(
        <section className="genesis-home">
            <div className="genesis-image">
                <img src={genesisLogo} alt="" />
            </div>
            <div className="home-text">
                <h1>Genesis'25</h1>
                <Link to={"#"}>Register Now-&gt;</Link>
            </div>
        </section>
    )
}