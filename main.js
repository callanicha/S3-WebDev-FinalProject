/* helper functions */
import { fetchUsers } from "./utils/fetchData"

import "./style.css"
import { handleData } from "./utils/handleData"
import { modalComp } from "./components/modalComp"

export async function init() {
	app.innerText = "loading ..."
	const usersArray = await fetchUsers()

	if (!usersArray.length) {
		app.innerText = "Something went very very wrong ..." + usersArray
		return
	}

	// check if this is not an empty array
	if (usersArray.length) handleData(usersArray)

	app.appendChild(modalComp())
}

init()
