import React,{useState} from 'react'

export default function TextBar(props) {
    const [text, setText] = useState("");

    const handleOnChange=(e)=>{
        setText(e.target.value)
    }
    const handleOnClickforUp=()=>{
        // console.log("btn called")
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Text changed to UpperCase","success")

    }
    const handleOnClickforLow=()=>{
        // console.log("btn called")
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Text changed to LowerCase","success")

    }
    const handleOnClickforReset=()=>{
        setText("")
        props.showAlert("Text is reset","success")

    }
    const textSplitter=()=>{
        if(text==='')    return 0;
        return text.split(' ').length
    }
  return (
    <div style={{color: props.AppMode==='dark'?'white':'black'}}>
        <div className="mb-3 container my-4" >
            <h1>{props.heading}</h1>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" style={{backgroundColor:props.AppMode==='light'?'white':'black',color: props.AppMode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} ></textarea>
            <button type="button" className="btn btn-primary my-3 mx-1" onClick={handleOnClickforUp}>Convert to uppercase</button>
            <button type="button" className="btn btn-primary my-3 mx-1" onClick={handleOnClickforLow}>Convert to lowercase</button>
            <button type="button" className="btn btn-primary my-3 mx-1" onClick={handleOnClickforReset}>Reset</button>
        </div>
        <div className="container">
            <h2>Your Text Summary</h2>
            <p>{textSplitter()} words and {text.length} characters</p>
            <p>{0.008*text.length} minutes is Average Reading Time</p>
            <h2>Preview</h2>
            <p>{text===''?"Enter text to preview here":text}</p>
        </div>
    </div>
  )
}
