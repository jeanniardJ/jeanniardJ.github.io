import React from "react";

import { Button, Container, Form, Col, Card } from "react-bootstrap";

import ToastService from "../Toast";

export default function Contact() {
    const [validated, setValidated] = React.useState(false);
    const email = "jonathan@jja-dev.fr";

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget as HTMLFormElement;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        console.log(event);

        if (form.checkValidity()) {
            const formData = new FormData(form);

            const name = formData.get("formName") as string;
            const email = formData.get("formEmail") as string;
            const message = formData.get("formMessage") as string;

            console.log(name, email, message);

            // Send email
            fetch("https://jja-dev.fr/api/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
            })
                .then((response) => {
                    if (response.ok) {
                        console.log("Email sent");
                    } else {
                        console.error("Email not sent");
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                });

            // Show toast
            ToastService({
                message: "Message sent",
                showToast: true,
                setShowToast: () => {},
            });
            
        }

        event.preventDefault();

        form.reset();
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
                                placeholder="Enter your email"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formMessage" className="mb-3">
                            <Form.Label>Message:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
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
