const css = document.querySelector("h3")
const [color1, color2] = document.querySelectorAll(".color")
const body = document.getElementById("gradient")

setGradient = () => {
    body.style.background = _linerGradient();
    css.textContent = `${body.style.background}`;
}

_linerGradient = () => {
    return `linear-gradient(to right, ${color1.value}, ${color2.value})`
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
