import "./userActions.css"
import { actionButton } from "./actionButton "
import edit from "../assets/edit.svg"
import trash from "../assets/trash.svg"
import { updateUser } from "../utils/updateUser"
import { formComp } from "./formComp"

export const usersActions = () => {
	const actionsContainer = document.createElement("div")
	actionsContainer.classList.add("actions-container")

	const buttonOne = actionButton(edit, "warning-btn", buttonOneFn)
	const buttonTwo = actionButton(trash, "danger-btn", buttonTwoFn)

	actionsContainer.appendChild(buttonOne)
	actionsContainer.appendChild(buttonTwo)

	return actionsContainer
}

function buttonOneFn(e) {
	document.querySelector(".modal-overlay").classList.toggle("show")
	const userId = e.target.parentElement.parentElement.getAttribute("userId")
	console.log(userId)
	document.querySelector(".modal-container").innerHTML = ""
	document.querySelector(".modal-container").appendChild(formComp())
	updateUser(userId)
}

function buttonTwoFn(e) {
	document.querySelector(".modal-overlay").classList.toggle("show")
	const userId = e.target.parentElement.parentElement.getAttribute("userId")
	console.log(userId)
}
