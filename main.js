/* components */
import { cardComponent } from "./components/cardComponent"
import { cardImage } from "./components/cardImage"
import { usersData } from "./components/usersData"
import { usersActions } from "./components/userActions"

/* helper functions */
import { fetchUsers } from "./utils/fetchData"

import "./style.css"

fetchUsers()

const imageOne = cardComponent()
imageOne.appendChild(cardImage())
imageOne.appendChild(usersData())
imageOne.appendChild(usersActions())

app.appendChild(imageOne)
