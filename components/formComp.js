import "./formComp.css"
import { inputComp } from "./inputComp"

export const formComp = () => {
	const form = document.createElement("form")
	form.classList.add("form")

	form.appendChild(inputComp("text", "firstName", "First Name"))
	form.appendChild(inputComp("text", "lastName", "Last Name"))

	const submitBtn = document.createElement("button")
	submitBtn.setAttribute("type", "submit")
	submitBtn.innerText = "Submit"

	form.appendChild(submitBtn)
	return form
}
