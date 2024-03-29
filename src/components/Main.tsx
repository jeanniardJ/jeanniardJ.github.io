import React from 'react';

import Repository from './Repository/Repository';
import Skills from './Skill/Skills';
import Contact from './Contact/Contact';

export default function Main() {

    return (
        <main className='container mx-auto px-12 text-white pt-10'>
            <Repository />
            <Skills />
            <Contact />
        </main>
    );
};
