    class Article {
        constructor(title, author, content) {
            this.title = title;
            this.author = author;
            this.content = content;
        }
    }

    const article1 = new Article("Information Technology", "Eric Glendinning", "science");
    

    function displayObjects() {
        const objectsContainer = document.getElementById("objects-container");

        const articleElement = document.createElement("p");
        articleElement.textContent = `Article: ${article1.title} by ${article1.author}`;


        objectsContainer.appendChild(articleElement);
    }

    window.addEventListener("load", displayObjects);
