import { useEffect, useState } from "react"
import Beitrag from '../components/Beitrag'

const BeitraegeList = () => {
    const [beitraege, setBeitraege] = useState([])

    useEffect(() => {
        fetch('http://localhost:9898/beitraege')
            .then(res => res.json())
            .then(data => setBeitraege(data))
    }, [])

    return (
        <section className="">
            {beitraege.map((beitrag, key) =>
                <Beitrag key={key} beitrag={beitrag} />)}
        </section>
    )
}

export default BeitraegeList