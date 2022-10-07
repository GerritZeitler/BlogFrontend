import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Admintool = () => {
    const [beitragsText, setBeitragsText] = useState('')
    const [beitragsBild, setBeitragsBild] = useState(null)
    const nav = useNavigate()
    const sendData = () => {
        console.log('object');
        const form = new FormData()
        form.append('beitragstext', beitragsText)
        form.append('beitragsbild', beitragsBild)



        fetch('http://localhost:9898/beitraege', {
            method: 'POST',
            body: form
        })
            .then(res => res.status === 200 ? nav('/') : null)
    }
    return (
        <main class="">
            <h1 className="">Servus</h1>
            <section className="">
                <input className="" type="text" name="beitragstext" id="" placeholder="Schreibe hier deinen Beitrag" onChange={(e) => setBeitragsText(e.target.value[0])} />
                <div className="">
                    <input className="hidden" type="file" name="beitragsbild" id="beitragsbild" onChange={(e) => setBeitragsBild(e.target.files)} />
                    <label className="p" htmlFor="beitragsbild">Zeig uns dein Lieblingsbild</label>
                </div>
                <button className="" onClick={sendData}>Gib es mir</button>

            </section>

        </main>
    )
}

export default Admintool