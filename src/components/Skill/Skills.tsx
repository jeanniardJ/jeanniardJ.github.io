import React, { useState, useEffect } from 'react';
import WordCloud from 'react-d3-cloud';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

import '../../assets/components/skills.scss';


export default function Skills() {

    const [skills] = useState<string[]>([
        'Html', 'Css', 'Php', 'Symfony', 'JavaScript', 'TypeScript', 'React', 'HTML', 'CSS', 'Node.js', 'SQL', 'Git',
        'Anticipation des technologies émergentes (robotique, IoT, intelligence artificielle, blockchain)',
        'Cartographie du système d\'information',
        'Elaboration de la stratégie informatique',
        'Définition des indicateurs clés de performance',
        'Gestion de projet agile',
        'Solutions innovantes',
        'Architecture business intelligence',
        'Stratégie big data',
        'Modèles statistiques et de data science',
        'Data visualisation',
        'Création d\'un entrepôt de données',
        'Conception d\'architecture applicative',
        'Développement d\'applications',
        'Tests de solutions applicatives',
        'Intégration continue',
        'Veille technologique pour l\'infrastructure du SI',
        'Collecte des besoins des directions métiers',
        'Analyse stratégique de l\'entreprise',
        'Identification des informations sensibles et des risques',
        'Présentation de propositions de projet au comité de direction',
        'Tableaux de bord de suivi de performance',
        'Communication efficace',
        'Processus de communication régulier',
        'Animation de réunions à distance',
        'Gestion du travail à distance',
        'Collecte des besoins en données des directions métiers',
        'Collecte des besoins métiers des utilisateurs',
        'Conduite du changement',
        'Migration vers le cloud',
        'Surveillance des infrastructures',
        'Maintenance évolutive et corrective',
        'Administration de plateforme EMM (gestion de la mobilité d\'entreprise)'
    ]);

    const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);

    const [data, setData] = useState(skills.map((skill, index) => ({
        text: skill,
        value: Math.random() * 5,
    })));

    useEffect(() => {
        const interval = setInterval(() => {
            setData(skills.map((skill, index) => ({
                text: skill,
                value: Math.random() * 15,
            })));
        }, 2000); // Change le nuage de mots toutes les 2 secondes

        return () => clearInterval(interval);
    });

    return (
        <section>
            <h2>Skills</h2>
            <WordCloud
                data={data}
                width={900}
                height={400}
                font="Times Sans Serif"
                fontStyle="italic"
                fontWeight="bold"
                fontSize={(word) => Math.log2(word.value) * 5}
                spiral="archimedean"
                rotate={(word) => word.value % 360}
                padding={2}
                fill={(d, i) => schemeCategory10ScaleOrdinal(i)}
            />
        </section>
    );

}
