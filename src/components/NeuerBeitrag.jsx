const { useState } = require("react")

const NeuerBeitrag = (props) => {
    const [username, setUserName] = useState('')
    const [beitragsBild, setBeitragsBild] = useState(null)

    return (
        <form action={props.action} method={props.method}>
            <input type="text" name="username" id="" placeholder="Erstelle einen neuen Beitrag" />
            <input type="file"></input>
        </form>
    )
}

export default NeuerBeitrag