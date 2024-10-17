import "./userActions.css"
import { actionButton } from "./actionButton "
import edit from "../assets/edit.svg"
import trash from "../assets/trash.svg"

export const usersActions = () => {
	const actionsContainer = document.createElement("div")
	actionsContainer.classList.add("actions-container")

	const buttonOne = actionButton(edit, "warning-btn")
	const buttonTwo = actionButton(trash, "danger-btn")

	actionsContainer.appendChild(buttonOne)
	actionsContainer.appendChild(buttonTwo)

	return actionsContainer
}


