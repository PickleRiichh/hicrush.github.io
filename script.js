const wrapper = document. querySelector(".wrapper");
const question = document. querySelector(".question");
const gif = document. querySelector(".gif");
const yesBtn = document. querySelector(".yes-btn");
const noBtn = document. querySelector("no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Aaaaaa, I like you too";
    gif.src = 
    "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gifyou.webp";});
noBtn.addEventListener("mouseover", () =>{
    const noBtn = noBtn.getboudingClientRect();
    const MaxX = window.innerWidth - noBtnRect.width;
    const MaxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * MaxX);
    const randomY = Math.floor(Mathn.random() * Maxy);
});