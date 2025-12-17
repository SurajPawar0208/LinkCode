import { useState } from "react";
import './FormHandle.css';

export default function FormHandle() {
    const [name, setName] = useState("");

    function uppercase(e) {
        e.preventDefault();
        setName(name.toUpperCase());
    }

    function lowercase(e) {
        e.preventDefault();
        setName(name.toLowerCase());
    }

    function count(e) {
        e.preventDefault();
        setName(`Character count: ${name.length}`);
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
