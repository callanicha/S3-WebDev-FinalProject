/* helper functions */
import { fetchUsers } from "./utils/fetchData"

import "./style.css"
import { handleData } from "./utils/handleData"

const usersArray = await fetchUsers()
// check if this is not an empty array
if (usersArray.length) handleData(usersArray)
