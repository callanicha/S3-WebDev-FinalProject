import "./userActions.css"

export const usersActions = () => {
	const actionsContainer = document.createElement("div")
	actionsContainer.classList.add("actions-container")

	const buttonOne = document.createElement("button")
	buttonOne.classList.add("btn")
	buttonOne.innerText = "Modify"

	const buttonTwo = document.createElement("button")
	buttonTwo.classList.add("btn")
	buttonTwo.innerText = "Delete"

	actionsContainer.appendChild(buttonOne)
	actionsContainer.appendChild(buttonTwo)

	return actionsContainer
}
