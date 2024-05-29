import React, { useEffect, useState } from "react";

import { Card, Button } from "react-bootstrap";

import Repository from "../../models/Repository";

async function fetchRepositories() : Promise<Repository[]>
{

    const response = await fetch(
        "https://api.github.com/users/jeanniardJ/repos"
    );

    const data = await response.json();
    const rowData = data.filter(
        (repo: any) =>
            !repo.fork &&
            !repo.private &&
            !repo.archived &&
            !repo.disabled &&
            !repo.name.includes("jeanniardJ.github.io") &&
            repo.description !== null
    );

    const repositories = await Promise.all(rowData.map(async (repo: any) => {
        let imageData = "./images/blank/blank_img_150.png";
        const imageUrl = `https://raw.githubusercontent.com/jeanniardJ/${repo.name}/main/${repo.name}.png`;

        await fetch(imageUrl)
        .then((response) => {
            if (response.ok && response.status === 200) {
                return (imageData = imageUrl);
            }
        })
        .catch((error) => {
            console.error(error);
        });

        return new Repository(
            repo.name,
            repo.description,
            repo.html_url,
            imageData
        );
    }));

    return repositories as Repository[];
}

function LayoutCars() {

    const [repos, setRepos] = useState<Repository[]>([]);
    useEffect(() => {
        fetchRepositories().then((repositories) => {
            setRepos(repositories);
        });
    }, []);

    return (<div className="row row-cols-1 row-cols-md-2 g-3">
        {repos.map((repo: Repository, index: number) => (
        <div className="col-md-6" key={index}>
            <Card>
                <Card.Body>
                    <Card.Title>{repo.getName()}</Card.Title>
                    <div className="row">
                        <Card.Text className="w-75">
                            {repo.description}
                        </Card.Text>
                        <Card.Img src={repo.getImage()} alt={repo.getName()} className="w-25 h-25"/>
                    </div>          
                </Card.Body>
                <Card.Footer>
                    <Button href={repo.html_url} target="_blank" rel="noreferrer">
                        Voir le dépôt
                    </Button>
                </Card.Footer>
            </Card>
        </div>
    ))}
    </div>);
}

export default function ListRepository() {
    return (
        <div id="repository">
            <h2 className="text-start text-white mb-5">Mes projets</h2>
            <LayoutCars/>
        </div>
    );
}
