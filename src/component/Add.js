import React from 'react';
import { useState } from 'react';

export default function Add(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            props.idfn()

            if (props.fn === 'Add') {
                if (props.idies.includes(title)) {
                    alert('This id is already present')
                } else {
                    const option = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 'id': title, 'desc': desc })
                    }
                    fetch("http://localhost:4000/post", option)
                        .then(res => console.log(res))
                        .catch(err => { console.error(err) })
                }

            } else if (props.fn === 'Update') {
                if (props.idies.includes(title)) {

                    const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 'id': 5, 'desc': 'This is the fifth row', 'update': 'Y' })
                    }
                    fetch("http://localhost:4000/post", requestOptions)
                        .then(res => console.log(res))
                } else {
                    alert('Please enter the id which is present')
                }
            }

            setTitle("");
            setDesc("");
        }
    }

    const cont = {
        height: "auto",
        display: 'flex',
        width: 'auto',
        'backgroundColor': '#ffffff',
        'alignContents': 'center',
        'flexDirection': 'column',
        'justifyContent': 'center',
        'boxShadow': '8px 8px 10px black, 2px 2px 3px black inset',

    }
    const main = {
        minHeight: '80vh'
    }

    return (
        <div style={main}>
            <div className="container m-5 p-5" style={cont}>
                <center><h3>{props.title}</h3></center>

                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Id</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Description</label>
                        <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                    </div>
                    <div className='d-grid gap-2 mt-5'><button type="submit" className="btn btn-success">{props.fn}</button></div>
                </form>
            </div>
        </div>

    );
}
