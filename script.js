let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let goals = JSON.parse(localStorage.getItem("goals")) || [];

function save(){
localStorage.setItem("tasks",JSON.stringify(tasks));
localStorage.setItem("goals",JSON.stringify(goals));
}

function addTask(){

let name=document.getElementById("taskName").value;
let time=document.getElementById("taskTime").value;
let day=document.getElementById("taskDay").value;

if(name==="") return;

tasks.push({name,time,day,done:false});

save();
display();
}

function toggleDone(i){

tasks[i].done=!tasks[i].done;

save();
display();
}

function display(){

let planner=document.getElementById("planner");
planner.innerHTML="";

let done=0;

tasks.forEach((t,i)=>{

if(t.done) done++;

planner.innerHTML+=`

<div class="task">

<b>${t.day}</b>

<div>${t.time}</div>

<div style="text-decoration:${t.done?"line-through":"none"}">

${t.name}

</div>

<button onclick="toggleDone(${i})">✔ Done</button>

</div>

`;

});

let progress=(done/tasks.length)*100 || 0;

document.getElementById("progress").style.width=progress+"%";
}

function addGoal(){

let goal=document.getElementById("goalInput").value;

goals.push(goal);

save();

displayGoals();
}

function displayGoals(){

let list=document.getElementById("goalList");

list.innerHTML="";

goals.forEach(g=>{
list.innerHTML+=`<li>${g}</li>`;
});
}

function toggleDark(){

document.body.classList.toggle("dark");

}

display();
displayGoals();
