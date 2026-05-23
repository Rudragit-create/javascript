// creation of the promise:

function fetchData(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let success = true;
            if(success){
                resolve("Data fetched successfully");
            }
            else{
                reject("Error to fetch data");
            }
        },2000)
    });
}


// consuming the promise:
fetchData()
    .then((data) =>  {
        console.log(data)
        return `rudra ${data}`
    })
    .then((data) => {
        console.log(data)
        return data.toUpperCase()
    })
    .then((data) => {console.log(data)})
    .catch((error) => {console.error(error)})
