import React from 'react';

import ListRepository from './Repository/Repository';
import Skills from './Skill/Skills';
import Contact from './Contact/Contact';

export default function Main() {

    return (
        <main className="container mt-5">
            <ListRepository />
            <Skills />
            <Contact />
        </main>
    );
};
