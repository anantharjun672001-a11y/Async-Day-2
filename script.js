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

/* async function apicall(){
    try {
        const res=await fetch("https://jsonplaceholder.typicode.com/users");
        const data=await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
        
    }
}
apicall() */

//json print with using loop

/* async function apicall() {
    try {
        const res=await fetch("https://jsonplaceholder.typicode.com/users");
        const data=await res.json();
        for(let i=0;i<data.length;i++){
            console.log(data[i].id);
            console.log(data[i].name);
              console.log(data[i].email);
                console.log(data[i].phone);
                  console.log(data[i].address.city);
                    console.log(data[i].address.zipcode);
                      console.log(data[i].company.name);
                        console.log(data[i].website);
        }
    } catch (error) {
        console.log(error);
    }
}
apicall() */

//print fetch using with dom

const division = document.createElement("div");
async function foo() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    for (let i = 0; i < data.length; i++) {
      const div = document.createElement("div");
      div.innerHTML = `
           <div class="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-96">
  <div class="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
    <img class="w-full h-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oghbsuzggpkknQSSU-Ch_xep_9v3m6EeBQ&s" alt="profile-picture" />
  </div>
  <div class="p-6 text-center">
    <h4 class="mb-1 text-xl font-semibold text-slate-800">
     ${data[i].name}
    </h4>
    <p
      class="text-sm font-semibold text-slate-500 uppercase">
      ${data[i].email} 
    </p>
    <p
      class="text-sm font-semibold text-slate-500 uppercase">
      ${data[i].phone} 
    </p>
    <p
      class="text-sm font-semibold text-slate-500 uppercase">
      ${data[i].address.city} 
    </p>
    <h4 class="mb-1 text-xl font-semibold text-slate-800">
     ${data[i].company.name}
    </h4>
   <h4 class="mb-1 text-xl font-semibold text-slate-800">
     ${data[i].website}
    </h4>
  </div>
  <div class="flex justify-center p-6 pt-2 gap-7">
    <button class="min-w-32  rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Follow
    </button>
  </div>
</div>
`;
      division.classList.add("flex", "flex-wrap", "gap-10");
      division.append(div);
      document.body.append(division);
    }
  } catch (error) {
    console.log(error);
  }
}
foo();