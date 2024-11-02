/**
 *
 * @param {string} type
 * @param {string} id
 * @param {string} innerText
 * @returns {HTMLInputElement}
 */

export const inputComp = (type, id, innerText) => {
	const inputContainer = document.createElement("div")
	inputContainer.classList.add("input-container")

	const formInput = document.createElement("input")
	formInput.setAttribute("type", type)
	formInput.classList.add("form-control")
	formInput.setAttribute("id", id)

	const firstNameLabel = document.createElement("label")
	firstNameLabel.setAttribute("for", id)
	firstNameLabel.innerText = innerText

	inputContainer.appendChild(firstNameLabel)
	inputContainer.appendChild(formInput)

	return inputContainer
}
