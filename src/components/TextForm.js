import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleupCLick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleloCLick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearCLick = () =>{
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let t = text.split(/[ ]+/);
        setText(t.join(" "));
    }
    return (
        <>
        <div className='container my-3'  style = {{color : props.mode === 'dark'?'white':'black'}}>
        <h1>Enter the Text Here</h1>
        <div className='mb-3'>
        <textarea className="form-control" id="myBox" rows = "8" value={text} onChange={handleOnChange} style = {{color : props.mode === 'dark'?'white':'black', backgroundColor : props.mode === 'light'?'white':'black'}}></textarea>  
        </div>
        
        <button className="btn btn-primary mx-2" onClick={handleupCLick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleloCLick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearCLick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary" onClick={handleCopy}>Copy</button>
        </div>
        <div className="container my-3"  style = {{color : props.mode === 'dark'?'white':'black'}}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
        </>
        )
}
