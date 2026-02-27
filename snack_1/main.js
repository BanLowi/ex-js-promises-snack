/*

Ottieni il titolo di un post con una Promise.

Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}
Bonus: Ottieni l'intero post con l'autore
Crea una funzione getPost(id) che recupera l'intero post.
Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.

*/

const apiURL = `https://dummyjson.com/posts/`

function getPostTitle(id) {

    const post = new Promise((resolve, reject) => {

        const fetchData = fetch(apiURL + id)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
            .finally(() => console.log("Terminato"))
    })

    return post
}

getPostTitle(1)
    .then(obj => console.log(obj))
    .catch(err => console.log(err))