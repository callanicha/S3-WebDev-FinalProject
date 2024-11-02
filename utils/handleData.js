/* components */
import { cardComponent } from "../components/cardComponent"
import { cardImage } from "../components/cardImage"
import { usersData } from "../components/usersData"
import { usersActions } from "../components/userActions"

export function handleData(usersArray) {
	usersArray.forEach((user) => {
		console.log(user)

		const cardArticle = cardComponent()
		cardArticle.setAttribute("userId", "test")
		cardArticle.appendChild(cardImage(user.profileImg))
		cardArticle.appendChild(usersData(user.firstName, user.lastName))
		cardArticle.appendChild(usersActions())

		app.appendChild(cardArticle)
	})
}
