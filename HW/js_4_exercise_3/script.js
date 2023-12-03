class Article {
    constructor(title, author, content) {
        this.title = title;
        this.author = author;
        this.content = content;
    }
}



const articles = [
    new Article("Think And Grow Rich", "Napoleon Hill", "Story"),
    new Article("Do It For Yourself", "Kara Cutruzzula", "Story"),
    new Article("Power", "Robert Greene ", "science")
];



function displayObjects() {
    const objectsContainer = document.getElementById("objects-container");

    const articleElements = articles.map(article => {
        const articleElement = document.createElement("p");
        articleElement.textContent = `Article: ${article.title} by ${article.author}`;
        return articleElement;
    });

    articleElements.forEach(articleElement => objectsContainer.appendChild(articleElement));
}

window.addEventListener("DOMContentLoaded", displayObjects);