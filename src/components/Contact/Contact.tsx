import React from "react";
import { Button, Container, Form, Col, Card } from "react-bootstrap";

import ToastContextual from "../ToastContextual";

export default function Contact() {
    const [validated, setValidated] = React.useState(false);
    const email = "jonathan@jja-dev.fr";
    const api_url = "https://127.0.0.1:8000/contact/api?"
    //const api_url = "https://jja-dev.fr/contact/api"

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget as HTMLFormElement;
        
        if(process.env.NODE_ENV === "development") {
            console.log("form", form);
            console.log("form.checkValidity()", form.checkValidity());
        }

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        if (form.checkValidity()) {
            let formData = new FormData(form);

            console.debug("formData", formData.getAll("formName"));

            const objet = "Message from jonathanjeanniard.me";
            let name = formData.get("formName") as string;
            let email = formData.get("formEmail") as string;
            let phone = formData.get("formPhone") as string;
            let message = formData.get("formMessage") as string;

            // Send email "https://jja-dev.fr/contact/api"
            fetch(api_url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    formObject: objet,
                    formName: name,
                    formEmail: email,
                    formPhone: phone,
                    formMessage: message,
                }),
            })
                .then((response) => {
                    if(!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .catch((error) => {
                    console.error("Error:", error);
                    return error;
                });

            setValidated(false);

            form.reset();
    
        }

    };

    return (
        <Container id="contact" className="mt-5">
            <Card className="p-5">
                <div className="d-flex justify-content-between align-items-start">
                    <h2 className="mb-5 w-25">Contact</h2>
                    <div className="d-flex flex-row gap-3 p-1 fs-4">
                        <span>
                            <a href="https://jja-dev.fr">
                                <i className="bi bi-globe"></i>
                            </a>
                        </span>
                        <span>
                            <a href="https://www.malt.fr/profile/jonathanjeanniard">
                                <i className="bi bi-briefcase"></i>
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
                </div>
                <div>
                    <p>
                        If you would like to get in touch with me, please email
                        me at <a href={`mailto:${email}`}>{email}</a> or use the
                        form below:
                    </p>
                    <Form
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                        <Form.Group
                            controlId="formName"
                            className="mb-3"
                            as={Col}
                        >
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="formName"
                                placeholder="Enter your name"
                                required
                            />
                        </Form.Group>
                        <Form.Group
                            controlId="formEmail"
                            className="mb-3"
                            as={Col}
                        >
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                name="formEmail"
                                placeholder="Enter your email"
                                required
                            />
                        </Form.Group>
                        <Form.Group
                            controlId="formPhone"
                            className="mb-3"
                            as={Col}
                        >
                            <Form.Label>Phone:</Form.Label>
                            <Form.Control
                                type="tel"
                                name="formPhone"
                                placeholder="Enter your phone number"
                            />
                        </Form.Group>
                        <Form.Group controlId="formMessage" className="mb-3">
                            <Form.Label>Message:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                name="formMessage"
                                placeholder="Enter your message"
                                required
                            />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>
                </div>
            </Card>
        </Container>
    );
}
