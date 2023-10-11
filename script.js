let text = document.querySelector(".text");
text.innerHTML = text.innerText
    .split("")
    .map((letters, i) =>
        ` <span style="transition-delay:${i*40}ms;
        filter:hue-rotate(${i*20}deg)">
        ${letters}</span>`
        ).join("");
 
        