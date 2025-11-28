//Fetch
//  Syntax:fetch(url)

//Fetch Using Methods
// Syntax:
   /*  fetch("url",{
        methods:"POST"/"GET"/"PUT"/"DELETE",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            ...
        })
    }) */

//fetch in .then .catch

const res = fetch("https://jsonplaceholder.typicode.com/users");
//console.log(res);
res.then((data)=>data.json())
.then((result)=>console.log(result))
.catch((error)=>console.log(error))


