let a = document.getElementById('btn2')
a.addEventListener('click', ()=>{
    document.body.innerHTML+=`<div id="div11">
    <form action="#" onsubmit="fetch()">
    <label for="name">Name</label>
    <input type="text" id="name">
     <br>
     <label for="phno">Phno</label>
     <input type="tel"  id="phno">
     <br>
     <label for="Email">Email</label>
     <input type="email"  id="Email">
     <br>
     <label for="Password">Password</label>
     <input type="password"  id="Password">
     <br>
     <input type="submit" value="submit">
     <input type="reset" value="Reset">
    </form>
    </div>`
})

function fetch(){
    let name = document.getElementById('name').value
    let phno = document.getElementById('phno').value
    let Email = document.getElementById('Email').value
    let password = document.getElementById('Password').value
   let body= document.body
   let div = document.createElement('div')
   div.innerHTML+=`<table border="1px">
   <tr>
   <td> ${( name)}</td>
   <td>${(phno)}</td>
   <td>${(Email)}</td>
   <td>${(password)}</td>
   </tr>
   </table>`
   body.appendChild(div)
   

}






let b = document.getElementById('btn3')
b.addEventListener('click', () =>{
    const element = document.getElementById('cards')
    element.remove()
})


