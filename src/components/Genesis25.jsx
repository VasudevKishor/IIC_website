import GenesisNavbar from "../components/GenesisNavbar"
import GenesisHome from "./GenesisHome"
import AboutGenesis from "./AboutGenesis"
import Exodus from "./Exodus"
import Fair from "./Fair"
import Workshops from "./Workshops"
export default function Genesis25(){
    return(
        <>
            <GenesisNavbar/>
            <GenesisHome />
            <AboutGenesis/>
            <Exodus/>
            <Fair />
            <Workshops />
        </>
    )
}