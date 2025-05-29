import React, { useState } from "react";
import { Container } from "react-bootstrap";

import ToastContextual from "../ToastContextual";

export default function Contact() {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");
    const [typeMsg, setTypeMsg] = useState("info");

    const email = "jonathan@jja-dev.fr";

    return (
        <Container id="contact" className="mt-5">
            <h2 className="mb-5">Contact</h2>
            <p>
                Si vous souhaitez me contacter pour discuter d’un projet, d’une collaboration, ou simplement échanger,
                n’hésitez pas à m’envoyer un email à{" "}
                <a className="text-primary" href={`mailto:${email}`}>
                    {email}
                </a>
                <br />
                Je répondrai avec plaisir à toutes vos questions ou propositions dans les plus brefs délais.
            </p>
            <div className="d-flex flex-row gap-3 p-1 fs-4">
                <span>
                    <a href="https://jja-dev.fr">
                        <i className="bi bi-globe"></i>
                    </a>
                </span>
                <span>
                    <a href="https://github.com/jeanniardJ">
                        <i className="bi bi-github"></i>
                    </a>
                </span>
                <span>
                    <a href="https://www.linkedin.com/in/jonathan-jeanniard/">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </span>
                <span>
                    <a href="https://twitter.com/jeanniardJ">
                        <i className="bi bi-twitter"></i>
                    </a>
                </span>
                <span>
                    <a href={`mailto:${email}`}>
                        <i className="bi bi-envelope"></i>
                    </a>
                </span>
            </div>
            {show && <ToastContextual message={message} type={typeMsg} />}
        </Container>
    );
}
