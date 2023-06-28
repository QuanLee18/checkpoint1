let name1= [];
let email_user=[];
function btn(){
    fetch('https://649abe31bf7c145d023966fa.mockapi.io/user')
    .then(response => response.json())
    .then(data => {
        for(i=0; i<data.length; i++){
            let html = `<div>`;
            html += `<img src = "${data[i].avatar}">`;
            html +=  `<h3> ${data[i].Username}</h3>`;
            name1.push(data[i].Username);
            html += `<h3> Price: ${data[i].email + "@gmail.com"}</h3>`;
            email_user.push(data[i].email);
            html += `<h3> ${data[i].phone}</h3>`;
            document.querySelector("#id1").innerHTML +=html;
            
        }
    })  
}