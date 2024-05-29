export default class Repository {
    name: string;
    description: string;
    html_url: string;
    image: string;

    constructor(name: string, description: string, html_url: string, image: string) {
        this.name = name;
        this.description = description;
        this.html_url = html_url;
        this.image = image;
    }

    getName() {
        return this.name.replace(/-/g, " ").replace(/_/g, " ");
    }

    getImage() {
        return this.image;
    }
}