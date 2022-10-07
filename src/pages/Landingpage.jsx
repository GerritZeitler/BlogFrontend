import HeaderImg from "../img/headerimg.avif"
import BeitraegeListe from "../components/BeitraegeListe"
import "./Landingpage.css"
import { Link } from 'react-router-dom';

const Landingpage = () => {
    return (
        <div>
            <img src={HeaderImg} alt="" />
            <h1>Hallo Welt</h1>
            <div className="imgFlex">

                <BeitraegeListe />
                {/* <Link to={"./Detailpage"}> <Beitrag /> </Link> */}

            </div>
        </div >
    )
}

export default Landingpage