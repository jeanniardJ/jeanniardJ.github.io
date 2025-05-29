import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Skills() {
    return (
        <Container id="skill" className="mt-5">
            <div className="text-center mb-5">
                <p>
                    Je suis actuellement à la recherche d’un <span className="text-primary">poste en CDI</span> au sein
                    d’une équipe.
                </p>
                <p>
                    Mon objectif est d’intégrer une entreprise qui valorise le code propre, la sécurité applicative et
                    l’amélioration continue. J’accorde une grande importance à l’impact du numérique sur les
                    utilisateurs finaux, en proposant des solutions stables, testées, accessibles et sécurisées.
                </p>
                <p>
                    Curieux, rigoureux et adaptable, je suis prêt à m’investir pleinement dans des projets qui ont du
                    sens et à monter en compétence sur de nouvelles technologies selon les besoins de l’équipe.
                </p>
            </div>
            <Row className="justify-content-center mt-4 gap-3 gap-md-0">
                <Col xs={3} md={1}>
                    <span className="skill-bubble small">
                        <i className="devicon-linux-plain colored"></i>
                    </span>
                </Col>
                <Col xs={3} md={1}>
                    <span className="skill-bubble small">
                        <i className="devicon-windows8-original colored"></i>
                    </span>
                </Col>
                <Col xs={3} md={1}>
                    <span className="skill-bubble small">
                        <i className="devicon-docker-plain colored"></i>
                    </span>
                </Col>
                <Col xs={3} md={1}>
                    <span className="skill-bubble small">
                        <i className="devicon-apache-plain colored"></i>
                    </span>
                </Col>
                <Col xs={3} md={1}>
                    <span className="skill-bubble small">
                        <i className="devicon-git-plain colored"></i>
                    </span>
                </Col>
                <Col xs={3} md={1}>
                    <span className="skill-bubble small">
                        <i className="devicon-github-plain colored"></i>
                    </span>
                </Col>
                <Col xs={3} md={1}>
                    <span className="skill-bubble small">
                        <i className="devicon-php-plain colored"></i>
                    </span>
                </Col>
                <Col xs={3} md={1}>
                    <span className="skill-bubble small">
                        <i className="devicon-mysql-plain colored"></i>
                    </span>
                </Col>
            </Row>
            <Row className="justify-content-center mt-4 gap-3 gap-md-0">
                <Col xs={3} md={1}>
                    <span className="skill-bubble small">
                        <i className="devicon-html5-plain colored"></i>
                    </span>
                </Col>
                <Col xs={3} md={1}>
                    <span className="skill-bubble small">
                        <i className="devicon-css3-plain colored"></i>
                    </span>
                </Col>
                <Col xs={3} md={1}>
                    <span className="skill-bubble small">
                        <i className="devicon-javascript-plain colored"></i>
                    </span>
                </Col>
                <Col xs={3} md={1}>
                    <span className="skill-bubble small">
                        <i className="devicon-jquery-plain colored"></i>
                    </span>
                </Col>
                <Col xs={3} md={1}>
                    <span className="skill-bubble small">
                        <i className="devicon-sass-original colored"></i>
                    </span>
                </Col>
                <Col xs={3} md={1}>
                    <span className="skill-bubble small">
                        <i className="devicon-bootstrap-plain colored"></i>
                    </span>
                </Col>
            </Row>
            <Row className="justify-content-center mt-4 gap-3 gap-md-0">
                <Col xs={3} md={1}>
                    <span className="skill-bubble small">
                        <i className="devicon-npm-original-wordmark colored"></i>
                    </span>
                </Col>
                <Col xs={3} md={1}>
                    <span className="skill-bubble small">
                        <i className="devicon-react-plain colored"></i>
                    </span>
                </Col>
                <Col xs={3} md={1}>
                    <span className="skill-bubble small">
                        <i className="devicon-symfony-original colored"></i>
                    </span>
                </Col>
            </Row>
        </Container>
    );
}
