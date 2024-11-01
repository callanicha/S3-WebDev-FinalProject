/* helper functions */
import { fetchUsers } from "./utils/fetchData"

import "./style.css"
import { handleData } from "./utils/handleData"
import { modalComp } from "./components/modalComp"

const usersArray = await fetchUsers()
// check if this is not an empty array
if (usersArray.length) handleData(usersArray)

app.appendChild(modalComp())
