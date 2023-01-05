const clock = document.querySelector("h2#clock");

const getClock = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); // 페이지를 로드하자마자 시계를 보여주기 위해 getClock 함수 실행
setInterval(getClock, 1000);