/**
 *
 * @param {string} icon // a URL that provides an image for the button
 * @returns {HTMLButtonElement}
 */

export const actionButton = (icon) => {
	const buttonElement = document.createElement("button")
	buttonElement.classList.add("btn")
	const deleteImg = new Image()
	deleteImg.src = icon
	buttonElement.appendChild(deleteImg)

	return buttonElement
}
