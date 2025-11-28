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

/* const res = fetch("https://jsonplaceholder.typicode.com/users");
//console.log(res);
res.then((data)=>data.json())
.then((result)=>console.log(result))
.catch((error)=>console.log(error))

 */

// Fetch in async

/* async function apicall() {
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await res.json();
    console.log(data);
    
}
apicall()
 */

//fetch with error handling

async function apicall(){
    try {
        const res=await fetch("https://jsonplaceholder.typicode.com/users");
        const data=await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
        
    }
}
apicall()