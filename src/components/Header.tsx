import React from "react";
import { Container } from "react-bootstrap";

import Navigator from "./Navigator";

export default function Header() {
    return (
        <header>
            <Navigator />
            <Container id="about" className="mx-auto">
                <div className="row">
                    <div className="d-flex justify-content-start align-items-stretch flex-wrap">
                        <div id="profile-picture" className="d-flex justify-content-center align-items-center">
                            <img src="./images/profile_jj_picture_sans_fond.png" alt="Portrait de Jonathan" />
                        </div>
                        <div>
                            <h2 className="mb-5">Jonathan</h2>
                            <p>Développeur Web et Web Mobile</p>
                            <h3>
                                Mes faiblesses sont ce <br /> qui me rend{" "}
                                <span className="text-primary">plus fort</span> !!!
                                <br />
                                <span className="fs-6">et m'aide à m'adapter et à dépasser mes limites.</span>
                            </h3>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-2xl font-bold">Je suis développeur informatique</h1>
                        <p className="mt-10">
                            J’ai longtemps appris en autodidacte avant de faire valider mes compétences par un Titre
                            Professionnel de Développeur Web et Web Mobile (Bac +2).
                        </p>
                        <p className="mt-4">
                            Je conçois des outils numériques utiles, performants, pensés pour répondre aux besoins des
                            utilisateurs tout en respectant les objectifs des projets. Mon approche est pragmatique,
                            curieuse, et orientée vers un code propre, lisible et maintenable.
                        </p>
                        <p className="mt-4">
                            Mon parcours est peut-être atypique, mais il m’a permis de développer une grande capacité
                            d’adaptation, de la résilience, et une envie constante d’apprendre. Ce sont justement mes
                            faiblesses qui ont forgé ma force.
                        </p>
                        <p className="mt-4">
                            N'hésitez pas à me contacter directement via{" "}
                            <a
                                href="https://www.linkedin.com/in/jonathan-jeanniard/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline d-inline-flex align-items-center"
                            >
                                <i className="bi bi-linkedin me-1" aria-hidden="true"></i>
                                mon profil LinkedIn
                            </a>{" "}
                            si vous souhaitez échanger ou en savoir plus.
                        </p>
                    </div>
                </div>
            </Container>
        </header>
    );
}
