function fetchData(id) {

    const result = fetch(`https://dummyjson.com/posts/${id}`)
        .then(resolve => resolve.json())
        .then(data => console.log(data))

    return result
}

const getUser = (id) => {

    const fetchPromise = new Promise((resolve, reject) => {

        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(obj => resolve(obj))
            .catch(reject);
    })

    return fetchPromise
}


getUser(2)
    .then(obj => console.log(obj))
    .catch(err => console.log(err))


fetchData(4)
    .then(obj => console.log(obj))
    .catch(err => console.log(err))