const images = [
    "https://images.unsplash.com/photo-1596921825946-d738194fac80?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1506755855567-92ff770e8d00?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];
const label = [
    "Te cansaste o que!",
    "Pulsaste no Ahora atrapalo"
]
let noButtonClicked = false;

const mainImage = document.getElementById("mainImage");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

yesButton.addEventListener("click", () => {
    mainImage.src = images[1];
    text.innerText = label[0];
    text.style.color = "green";
    text.style.fontSize = "34px";
    noButtonClicked = false;
    noButton.classList.remove("moving");
    noButton.style.transform = "translate(0, 0)";
});

noButton.addEventListener("click", () => {
    mainImage.src = images[2];
    text.innerText = label[1];
    text.style.color = "red";
    text.style.fontSize = "24px";
    noButtonClicked = true;
});

noButton.addEventListener("mousemove", (e) => {
    if (noButtonClicked) {
        noButton.classList.add("moving");
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        text.style.color = color;
        const maxMove = 600;
        const xMove = (Math.random() - 0.5) * maxMove;
        var yMove = (Math.random() - 0.5) * maxMove;
        if (yMove >= 100 ) {
            yMove = 100
            noButton.style.transform = `translate(${xMove}px, ${yMove}px)`;
        }else{
            noButton.style.transform = `translate(${xMove}px, ${yMove}px)`;
        }
    }
});
