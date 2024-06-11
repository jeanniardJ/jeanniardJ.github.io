import React from "react";

import { Container } from "react-bootstrap";

export default function Footer() {
    return (
        <footer className="mt-5">
            <Container>
                <div className="d-flex justify-content-center align-items-center">
                    <p className="text-center">
                        &copy; {new Date().getFullYear()} Jonathan Jeanniard at <a href="https://jja-dev.fr">jja-dev.fr</a>, All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
