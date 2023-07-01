import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ReactComponent as Arrow} from "../assets/arrow-left.svg";

import baseUrl from '../url'

export default function NotePage() {
    const {id} = useParams()
    const [note, setNote] = useState("")
    useEffect(() => {
        if (id === 'new') {
            return
        }
        fetch(`${baseUrl}/${id}`)
            .then(res => res.json())
            .then(data => setNote(data))
    }, [id])

    function updateNote() {
        fetch(`${baseUrl}/${id}/update`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        }).then(res => res.json())
            .then(data => console.log(data))
    }

    const navigate = useNavigate()

    function handleSubmit() {
        updateNote()
        navigate('/')
    }

    function deleteNote() {
        fetch(`${baseUrl}/${id}/delete`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(navigate('/'))
    }

    function createNote() {
        fetch(`${baseUrl}/create`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        }).then(res => res.json())
            .then(data => console.log(data))
    }

    let handleCreatePost = () => {
        console.log('NOTE:', note)
        if (id !== 'new' && note.body === '') {
            deleteNote()
        } else if (id !== 'new') {
            updateNote()
        } else if (id === 'new' && note.body !== null) {
            createNote()
        }
        navigate('/')
    }

    return <div className={"note"}>
        <div className={"note-header"}>
            <h3>
                <Arrow onClick={handleSubmit}/>
            </h3>
            {id !== 'new' ? (
                <button onClick={deleteNote}>DELETE</button>
            ) : (
                <button onClick={handleCreatePost}>DONE</button>
            )
            }
        </div>
        <textarea value={note?.body} onChange={(e) => {
            setNote({...note, 'body': e.target.value})
        }}>
    </textarea></div>
}