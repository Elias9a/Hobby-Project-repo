const date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
document.getElementById("today-date").innerHTML = date;