import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function Repository() {
    const [repos, setRepos] = useState<any>([]);

    useEffect(() => {
        axios.get('https://api.github.com/users/jeanniardJ/repos')
            .then(response => {
                setRepos(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des dépôts :', error);
            });
    }, []);

    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.section
            id='repo'
            className='flex flex-wrap gap-36'
            variants={sectionVariants}
            initial='hidden'
            animate='visible'
        >
            {repos.map((repo: any) => (
                <motion.div
                    key={repo.id}
                    className='mb-10'
                    variants={itemVariants}
                >
                    <h3 className='text-5xl font-semibold mb-5'>{repo.name}</h3>
                    <div className='desc w-96 rounded-md p-5'>
                        <p>{repo.description}</p>
                    </div>
                </motion.div>
            ))}
        </motion.section>
    );
}