 let form 
 let reposList
 document.addEventListener("DOMContentLoaded", ()=>{
    form = document.getElementById('github-form')
    form.addEventListener("submit",function (e) {
        let search = document.getElementById('search').value 
           e.preventDefault()
           form.reset()

        joinedName = search.split(" ").join("")
            // alert(originalName)
            fetch("https://api.github.com/users/"+joinedName)
            .then((res)=>res.json())
            .then((data)=>{
                // console.log(data)
                document.getElementById("repos-list").innerHTML = `
                <h1>${data.login}</h1>
                 <img src="${data.avatar_url}/"> 
                 <figcaption><a target="_blank" href="https://github.com/${joinedName}"> <h1>Click Here to See My Site!<h1>
                 </figcaption> </a>

                `
                //can move the <a></a> around the image or text to set the link 
            })
         fetch("https://api.github.com/users/"+joinedName+'/repos')
         .then((res)=>res.json())
         .then((data2)=>{
            //console.log(data2)
            data2.forEach(repos => {
              repos.name
              reposList = document.querySelector('#repos-list')
              let li = document.createElement("li")
              li.textContent = `${repos.name}`
              reposList.appendChild(li)
               
               
            });
            
         })
        })
})




// let form 
// let reposForm
// document.addEventListener("DOMContentLoaded", ()=>{
//    form = document.getElementById('github-form')
//    form.addEventListener("submit",function (e) {
//        let search = document.getElementById('search').value 
//           e.preventDefault()
//           form.reset()

//        joinedName = search.split(" ").join("")
//            // alert(originalName)
//            fetch("https://api.github.com/users/"+joinedName)
//            .then((res)=>res.json())
//            .then((data)=>{
//                // console.log(data)
//                reposForm = document.getElementById("repos-list")
//                let card = document.createElement("div")
//                card.innerHTML = `
//                <h1>${data.login}</h1>
//                <a target="_blank" href="https://github.com/${joinedName}"> <img src="${data.avatar_url}/"> </a>
//                `
//                reposForm.appendChild(card)
//            })
//         fetch("https://api.github.com/users/"+joinedName+'/repos')
//         .then((res)=>res.json())
//         .then((data2)=>{
//            console.log(data2)
//         })
//        })
// })

