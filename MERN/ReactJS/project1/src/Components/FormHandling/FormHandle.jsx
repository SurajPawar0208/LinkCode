import { useState } from "react";
import './FormHandle.css';

export default function FormHandle() {
    const [name, setName] = useState("Enter Text to Convert");

    function uppercase(e) {
        e.preventDefault();
        setName(name.toUpperCase());
         alert(`Text Conerted to UpperCase`);
    }

    function lowercase(e) {
        e.preventDefault();
        setName(name.toLowerCase());
        alert(`Text Conerted to LowerCase`);
    }

    function count(e) {
        e.preventDefault();
        alert(`Character count: ${name.length}`);
    }

    return (
        <div className="form-handle-container">
            <h1>Form Handle</h1>
            <form className="form-handle-form">
                <textarea name="Enter Paragraph" className="textarea" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="button" value="Uppercase" onClick={uppercase} />
                <input type="button" value="Lowercase" onClick={lowercase} />
                <input type="button" value="Count" onClick={count} />
            </form>
            <textarea className="form-handle-result" value={name} readOnly />
        </div>
    );
}
