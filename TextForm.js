import React,{useState} from 'react'
// import PropTypes from 'prop-types';


export default function TextForm(props) {
    const [text,setText] = useState('');

    const upClick = ()=>{
        // console.log("CLicked me")
        let newText= text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }
    
    const handleOnChange =(event)=>{
        // console.log("on change")
        setText(event.target.value)
    }
    
    const downClick=()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase","success")
    }
    
    const clearText = ()=>{
        setText("")
        props.showAlert("Text Cleared","success")
        
    }

    const copyText =()=>{
        let copyText = document.getElementById("Writer")
        copyText.select()
        navigator.clipboard.writeText(copyText.value)
        props.showAlert("Copied to Clipboard !","success")
    }
    
    const removeSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Spaces removed","success")
        
        

    }
    
    return (
     <>
        
    <div>
        <div className={`container text-${props.mode==="light" ? "dark" : "light"}`}>
            <div className="mb-3 mt-5">
            <h1>Enter the text below ---</h1>
            <textarea className={`form-control text-${props.mode==="light" ? "dark" : "light"} bg-${props.mode}`} id="Writer" rows="8"  onChange={handleOnChange} value={text}></textarea>
            <br/>
            <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={upClick}>Convert to UpperCase</button>
            
            <button type="button"  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={downClick}>Convert to LowerCase</button>
            <button type="button"  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={clearText}>Clear Text</button>
            <button type="button"  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={copyText}>Copy Text</button>
            <button type="button"  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={removeSpace}>Remove Extra spaces</button>
            </div>
        </div>
    </div>

    <div className={`container my-4 text-${props.mode==="light" ? "dark" : "light"}`}>
        <h1>The Info</h1>
        <p>There are {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>Time taken to read --- {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the text to preview here"}</p>
    </div>
     </>   

)
}


