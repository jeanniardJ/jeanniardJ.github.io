import React, { useState, useEffect } from 'react';

import { Container } from 'react-bootstrap';



export default function Skills() {

    const [skillsArray, setSkill] = useState<any>([]);

    const skills = [
        'html5',
        'css3',
        'javascript',
        'typescript',
        'react',
        'nodejs',
        'npm-original',
        'sass',
        'bootstrap',
        'jquery',
        'git',
        'github',
        'docker',
        'php',
        'mysql',
        'android',
        'symfony',
    ];

    const sizes = ["small", "medium", "large"];

    const getRandomSize = () => {
        const randomIndex = Math.floor(Math.random() * sizes.length);
        return sizes[randomIndex];
    };

    useEffect(() => {
        setSkill(
            skills.map((skill) => {
                return {
                    skill: skill,
                    size: getRandomSize(),
                };
            })
        );
    }, []);

    return (
        <Container id="skill" className="mt-5">
            <h2>Skills</h2>
            <div className="skills">
                {skillsArray.map((skill: any, index: number) => (
                    <span key={index} className={`skill-bubble ${skill.skill} ${skill.size}`}>
                        {skill.skill === 'npm-original' ? (
                            <i className={`devicon-${skill.skill}-wordmark colored`}></i>
                        ) : (
                            <i className={`devicon-${skill.skill}-plain colored`}></i>
                        )}
                    </span>
                ))}
            </div>
        </Container>
    );

}
