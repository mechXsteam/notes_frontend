import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ListItem from "../components/ListItem";
import AddButton from "../components/AddButton";

import baseUrl from '../url'
console.log(baseUrl)


export default function NoteListPage() {
    const [notes, setNotes] = useState([])
    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setNotes(data)
            })
    }, [])

    return <div className={"notes"}>
        <div className={"notes-header"}>
            <h2 className={"notes-title"}>&#9782; Notes</h2>
            <p className={"notes-count"}>{notes.length}</p>
        </div>
        <div className={"notes-list"}>
            {notes.map((note) => {
                return <Link to={`note/${note.id}`}><ListItem key={note.id} note={note}/></Link>
            })}
        </div>
        <AddButton/>
    </div>


}