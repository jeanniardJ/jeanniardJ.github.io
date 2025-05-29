import React from 'react';

import { Toast, ToastContainer } from "react-bootstrap";


export default function ToastContextual({ message, type = "info"}: { message: string, type: string} )
{
    const [show, setShow] = React.useState(true);

    return (
        <ToastContainer 
            position="bottom-end" 
            className='p-3' 
            style={{ position: "fixed" }}
        >
            <Toast
                show={show}
                delay={3000} 
                autohide
                bg={type}
                onClose={() => setShow(false)}
            >
                <Toast.Body>
                {message}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
}
