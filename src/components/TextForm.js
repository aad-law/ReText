import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("UPPERCASE was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UPPERCASE", "success");
    }
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success");

    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Text has been cleared", "success");

    }
    const capitalizeSentences = () => {
        let newText = text.toLowerCase().split(".").map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1) + "").join(".");
        setText(newText);
        props.showAlert("Converted into sentance form", "success");

    }
    const inverseSentanceClick = () => {
        let newText = text.toUpperCase().split(".").map(sentence => sentence.charAt(0).toLowerCase() + sentence.slice(1) + "").join(".");
        setText(newText);
        props.showAlert("Converted to iNVERSE form", "success");

    }
    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipbord", "success");

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space has been removed", "success");

    }

    const handleOnChange = (event) => {
        console.log("state change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    // text="new twxt" .........wrong way to change text
    // setText("new text")...Correct way to change text
    return (
        <>
            < div className='container my-2' style={{
                color: props.mode === 'dark' ? 'white' : 'black'
            }}
            >

                <h1 className='mb4'>{props.heading}</h1>
                <div className="container mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === 'light' ? 'white' : '#172336',
                            color: props.mode === 'light' ? 'black' : 'white'
                        }}
                        id="myBox" rows="3"></textarea>
                    <button disabled={text.length === 0} className="btn btn-primary my-4 mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-4 mx-2" onClick={handleDownClick}>Convert to lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-4 mx-2" onClick={handleClearClick}> clear</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-4 mx-2" onClick={capitalizeSentences}> Sentance case</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-4 mx-2" onClick={inverseSentanceClick}> iNVERSE</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-4 mx-2" onClick={copyToClipboard}>Copy to clipbord</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-4 mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
                </div>
                <div className='container my-2' >

                    <h3 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Your text summary</h3>
                    <p><b>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words,{text.length}characters</b></p>
                    <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minimun read</p>
                    <h2>Preview</h2>
                    <p>{text.length > 0 ? text : "Nothing to preview"}</p>
                </div>
            </div>
        </>
    )
}
