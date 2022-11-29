import { useState } from "react";
import "./ContactInfo.css";

function ContactInfo() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    // Eventlistener für firstName input
    const handleFirstNameInput = (e) => {
        setFirstName(e.target.value);
    }

    // Eventlistener für lastName input
    const handleLastNameInput = (e) => {
        setLastName(e.target.value);
    }

    // Eventlistener für email input
    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div className="contactInfoWrapper">
            <div className="contactInput">
                <input onChange={handleFirstNameInput} type="text" />
                <input onChange={handleLastNameInput} type="text" />
                <input onChange={handleEmailInput} type="text" />
            </div>
            <div className="contactOutput">
                <p>Vorname: {firstName}</p>
                <p>Nachname: {lastName}</p>
                <p>Email: {email}</p>
            </div>
        </div>
    );
}

export default ContactInfo;