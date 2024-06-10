import React, { useEffect } from 'react';

import { Toast } from "react-bootstrap";

export function setToastMessage(message: string) {
    return (
        <Toast
            show={true}
            onClose={() => {}}
            delay={3000}
            autohide
            style={{
                position: "absolute",
                top: 0,
                right: 0,
            }}
        >
            <Toast.Body>{message}</Toast.Body>
        </Toast>
    );
}

export default function ToastContextual() {
    const [show, setShow] = React.useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <Toast
            show={show}
            onClose={() => setShow(false)}
            delay={3000}
            autohide
            style={{
                position: "absolute",
                top: 0,
                right: 0,
            }}
        >
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
    );
}

