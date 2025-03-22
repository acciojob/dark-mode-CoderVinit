//your JS code here. If required.
const toggleButton = document.getElementById("toggleMode");
const body = document.body;

function setDarkMode(enabled){
	if(enabled){
		body.classList.add("dark-mode")
		localStorage.setItem("darkMode","enabled")
	}
	else{
		body.classList.remove("dark-mode");
		localStorage.setItem("darkMode","disabled")
	}
}

if (localStorage.getItem("darkMode") === "enabled") {
    setDarkMode(true);
}
toggleButton.addEventListener("click", () => {
    setDarkMode(!body.classList.contains("dark-mode"));
});
