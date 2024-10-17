/* components */
import { cardComponent } from "./components/cardComponent"
import { cardImage } from "./components/cardImage"
import { usersData } from "./components/usersData"
import { usersActions } from "./components/userActions"
/* helper functions */
import { fetchUsers } from "./utils/fetchData"
import "./style.css"

const usersArray = await fetchUsers()
console.log(usersArray)

const imageOne = cardComponent()
imageOne.appendChild(cardImage())
imageOne.appendChild(usersData())
