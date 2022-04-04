import { React, useState, useEffect } from 'react';

export default function Note (props) {
    const [editMode, setEditMode] = useState(false)
    const [content, setContent] = useState(props.content)
    const handlers = props.handlers


    function handleEditModeChange () {
        setEditMode(editMode ? false : true)
    }

    function handleChange (e) {
        let value = e.target.value
        setContent(value)
    };

    useEffect(() => {
        editMode ? document.getElementById("textArea").focus() : console.log();
    })
    

    return (
        <div className="note" onClick={handleEditModeChange}>
            <div className="header">
                <div className="deleteContainer">
                    <input className="delete" type="button" onClick={handlers.handleDelete} id={props.id}/>
                </div>
            </div>
            <div className="textContainer">
                {editMode ? (
                    <textarea className="textArea" value={content} onChange={handleChange} id="textArea"></textarea>
                ) : (
                    <>
                    <p className="text">{content}</p>
                    </>
                )}
            </div>
            
        </div>
    )
} 