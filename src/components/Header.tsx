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
				<div>
					<img src="./images/jj_logo_blanc.png" alt="" />
				</div>
				<div>
					<h2>Jonathan</h2>
					<p>Développeur Web et Web Mobile</p>
				</div>
			</div>
			<div className="mt-5">
				<h1 className="text-2xl font-bold">
					Freelance en réalisation de sites web sur mesure.
				</h1>
				<p className="mt-10">
					En tant que freelance en création de sites web sur mesure, je suis
					passionné par la conception et le développement numérique. Mon
					objectif est de fournir des solutions uniques et personnalisées à
					mes clients, en mettant en œuvre mes compétences en développement
					web. Fort de mon expérience, je m'efforce de créer des sites web
					qui répondent aux besoins spécifiques de chaque client tout en
					offrant une expérience utilisateur optimale. Mon engagement envers
					mon travail se reflète dans chaque projet que je réalise, et je
					suis constamment à la recherche de nouvelles opportunités pour
					développer mes compétences et offrir des solutions innovantes.
				</p>
			</div>
        </div>
      </Container>
    </header>
  );
}
