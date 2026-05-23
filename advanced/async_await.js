function fetchData(){ // database call or fetch api
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject({name:"chai-code",url:"http://chai-code.com"})
        }, 3000);
    })
}

// fetchData()
//     .then((data)=> console.log(data))
//     .catch((error)=>console.log(error))

// another way of doing
// async tells that this data might take time

async function getUserData(){
    try{
        console.log("Fetching user data.....");
        const userData = await fetchData(); // await will only be there if this is async function
        console.log("User data fetched successfully ")
        console.log("User data: ",userData);
    }
    catch(error){
        console.log("Error fetching data",error);
    }
}

getUserData()
