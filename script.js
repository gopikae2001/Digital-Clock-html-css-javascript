    let month = document.getElementById("month");
	let year = document.getElementById("year");
	let hrs = document.getElementById("hrs");
	let min = document.getElementById("min");
	let sec = document.getElementById("sec");
	
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
	
	setInterval(()=>{
		let currentTime = new Date();
	
	month.innerHTML = monthNames[currentTime.getMonth()];
	year.innerHTML = currentTime.getFullYear();
	hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
	min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
	sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
	day.innerHTML = (currentTime.getDate() < 10 ? "0" : "") + currentTime.getDate();
            
},1000)
	