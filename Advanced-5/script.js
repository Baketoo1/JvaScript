// enter variables
const result = document.querySelector(".user-list");
const input = document.querySelector(".input-filter");
const userList = [];
getData();
input.addEventListener("input",function(e){
    dataFilter(e.target.value);
});
// function for loading data
async function getData(){
    const allUsers = await fetch("https://randomuser.me/api?results=50");
    // json = format for storing and transporting data
    const data = await allUsers.json();  
    // delete the HTML content
    result.innerHTML = "";
    data.results.forEach(user => {
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
            <div class="user-info">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>${user.location.city} ${user.location.country}</p>
            </div>
        `;
        result.appendChild(li);
        userList.push(li);
    });
}
// function for searching users from input
function dataFilter(inputText){
    userList.forEach(oneUser =>{
        if(oneUser.innerText.toLowerCase().includes(inputText.toLowerCase())){
            oneUser.classList.remove("hide");
        } else {
            oneUser.classList.add("hide");
        }
    });
}