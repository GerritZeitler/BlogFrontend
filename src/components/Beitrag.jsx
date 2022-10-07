

const Beitrag = (props) => {

    return (
        <>
            <div>
                <img src={`http://localhost:9898/${props.beitrag.Bild}`} alt="Bild" />
                <h3>{props.beitrag.Beitragstext}</h3>
            </div>
        </>
    )
}

export default Beitrag