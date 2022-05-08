"use strict";

const pages = Array.from(document.getElementsByTagName("section"));
const navHeight = document.getElementsByTagName("nav")[0].clientHeight;

const sidebars = [];
pages.forEach(function(page, i) {
    const bar = document.createElement("div");
    bar.onclick = function() {
       scrollTo(0, page.offsetTop);
    };
    if(i === 0) bar.className = "active";

    document.getElementById("sidenav").appendChild(bar);
    sidebars.push(bar);
});

var active = 0;

window.addEventListener("scroll", function() {
	const offset = innerHeight / ~1 + navHeight;
	for (let i = 0; i < pages.length; i ++) {
		if (scrollY < pages[i].offsetTop + pages[i].clientHeight + offset) {
			if (i !== active) {
				sidebars[active].classList.remove("active");
				sidebars[i].classList.add("active");

				active = i;
			}

			break;
		}
	}
}, false);

window.addEventListener("wheel", function(event) {
	var position = active + Math.sign(event.deltaY); 
	if (0 <= position && position < pages.length) {
		scrollTo(0, pages[position].offsetTop);
	}
});