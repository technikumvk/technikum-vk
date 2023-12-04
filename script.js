const correctPassword = "1234";

document.getElementById("hyperlink1").addEventListener("click", function () {
    document.getElementById("passwordForm").classList.remove("hidden");
    document.querySelector(".password-overlay").style.display = "flex";
});

function checkPassword() {
    const enteredPassword = document.getElementById("password").value;

    if (enteredPassword === correctPassword) {
        window.location.href = "wi.html";
    } else {
        document.getElementById("errorMessage").textContent = "Nie możesz iść do tej strony(((";
    }
}
function closeForm(){
    document.getElementById("passwordForm").classList.add("hidden");
    document.querySelector(".password-overlay").style.display = "none";
}