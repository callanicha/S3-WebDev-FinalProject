import { cardComponent } from "./components/cardComponent"
import { cardImage } from "./components/cardImage"
import {usersData} from "./components/usersData"
import "./style.css"



const imageOne = cardComponent()
imageOne.appendChild(cardImage())
imageOne.appendChild(usersData())

app.appendChild(imageOne)
