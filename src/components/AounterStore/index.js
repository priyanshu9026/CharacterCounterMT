import {UserInputItems, UserEntereDetails} from './styledComponents'

const CounterStore = props => {
  const {userInputDetails} = props
  const {userEnteredText, textLength} = userInputDetails

  return (
    <UserInputItems>
      <UserEntereDetails>
        {userEnteredText} : {textLength}
      </UserEntereDetails>
    </UserInputItems>
  )
}

export default CounterStore
