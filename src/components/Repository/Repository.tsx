import React, { useEffect, useState } from "react";

import { Card, Button, Carousel } from "react-bootstrap";

import Repository from "../../models/Repository";

async function fetchRepositories(): Promise<Repository[]> {
    const response = await fetch("https://api.github.com/users/jeanniardJ/repos");

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

    const repositories = await Promise.all(
        rowData.map(async (repo: any) => {
            let imageData = "./images/blank/blank_img_150.png";
            const imageUrl = `https://raw.githubusercontent.com/jeanniardJ/${repo.name}/main/${repo.name}.png`;

            await fetch(imageUrl)
                .then((response) => {
                    // Check if the image exists
                    if (response.ok && response.status === 200) {
                        return (imageData = imageUrl);
                    }
                    // If the image is not found, set a default image
                    return (imageData = "./images/blank/blank_img_150.png");
                })
                .catch((error) => {
                    console.error("Image not found:", error);
                });

            return new Repository(repo.name, repo.description, repo.html_url, imageData);
        })
    );

    return repositories as Repository[];
}

function chunkArray<T>(arr: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

function LayoutCars() {
    const [repos, setRepos] = useState<Repository[]>([]);
    const [chunkSize, setChunkSize] = useState<number>(4);

    useEffect(() => {
        fetchRepositories().then((repositories) => {
            setRepos(repositories);
        });
    }, []);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setChunkSize(2);
            } else {
                setChunkSize(4);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Group repos by chunkSize for each carousel slide
    const repoChunks = chunkArray(repos, chunkSize);

    return (
        <Carousel interval={5000} indicators={repoChunks.length > 1} controls={false} fade={true}>
            {repoChunks.map((chunk, idx) => (
                <Carousel.Item key={idx}>
                    <div className={`row row-cols-${chunkSize === 2 ? 1 : 2} row-cols-md-2 g-3`}>
                        {chunk.map((repo: Repository, index: number) => (
                            <div className="col" key={index}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{repo.getName()}</Card.Title>
                                        <div className="row">
                                            <Card.Text className="w-75">{repo.description}</Card.Text>
                                            <Card.Img
                                                src={repo.getImage()}
                                                alt={repo.getName()}
                                                className="w-25 h-25"
                                            />
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
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default function ListRepository() {
    return (
        <div id="repository">
            <LayoutCars />
        </div>
    );
}
