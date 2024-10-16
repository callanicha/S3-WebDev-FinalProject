import "./userActions.css"
import edit from "../assets/edit.svg"

export const usersActions = () => {
	const actionsContainer = document.createElement("div")
	actionsContainer.classList.add("actions-container")

	const buttonOne = document.createElement("button")
	buttonOne.classList.add("btn")
	buttonOne.innerText = "Modify"

	const buttonTwo = document.createElement("button")
	buttonTwo.classList.add("btn")
	const editImg = document.createElement("img")
	editImg.src = edit
	buttonTwo.appendChild(editImg)
	// buttonTwo.innerText = "Delete"

	actionsContainer.appendChild(buttonOne)
	actionsContainer.appendChild(buttonTwo)

	return actionsContainer
}
