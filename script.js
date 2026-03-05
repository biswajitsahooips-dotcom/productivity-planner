const tasks = [
{
time: "6:00 AM",
title: "Wake Up",
desc: "Start the day and stretch"
},
{
time: "7:00 AM",
title: "Eat Fruit",
desc: "Healthy breakfast"
},
{
time: "7:30 AM",
title: "Read Book",
desc: "Study or read for 30 minutes"
},
{
time: "9:00 AM",
title: "Coding Practice",
desc: "Practice programming"
}
];

const timeline = document.getElementById("timeline");

tasks.forEach(task => {

const item = document.createElement("div");
item.className = "timeline-item";

item.innerHTML = `

<div class="dot"></div>

<div class="card">

<h3>${task.title}</h3>

<p><b>${task.time}</b></p>

<p>${task.desc}</p>

</div>

`;

timeline.appendChild(item);

});
