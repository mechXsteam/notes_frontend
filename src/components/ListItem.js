import {Link} from "react-router-dom";

function getDate(note) {
    return new Date(note).toLocaleDateString()
}

function getTitle(body) {
    let title = body.split('\n')[0]
    if (title.length > 20) {
        return title.slice(0, 20)
    }
    return title
}

export default function ListItem(props) {
    const {note} = props

    return <Link to={`/note/${note.id}`}>
        <div className={"notes-list-item"}>
            <h3>{getTitle(note.body)}</h3>
            <p>{getDate(note.updated_at)}</p>
        </div>
    </Link>
}