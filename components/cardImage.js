import "./cardImage.css"

export const cardImage = (cardImg) => {
    const cardDiv = document.createElement("div")
    cardDiv.classList.add("card-image")

    const img = new Image()
    img.src = cardImg || "https://i.pinimg.com/236x/13/ff/00/13ff0097687266036163e8e6022bbdc0.jpg"
    img.setAttribute("alt", "avater image")

    cardDiv.appendChild(img)

    return cardDiv
}