import "./css/index.css"

// Sem utilizar Class name
// const creditCardBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
// const creditCardBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")

// Utilizando Class name
const creditCardBgColor01 = document.querySelector(".Card-color-1 path")
const creditCardBgColor02 = document.querySelector(".Card-color-2 path")

// const creditCardBrand = document.querySelector(".cc-logo span:nth-child(2) img")
const creditCardBrand = document.querySelector("#cc-brand")

function getBrand(brand) {
  const colors = {
    visa: ["#436D99", "#2D57F2"],
    mastercard: ["orange", "red"],
    default: ["black", "gray"],
  }

  creditCardBgColor01.setAttribute("fill", colors[brand][0])
  creditCardBgColor02.setAttribute("fill", colors[brand][1])
  creditCardBrand.setAttribute("src", `cc-${brand}.svg`)
}

globalThis.getBrand = getBrand
