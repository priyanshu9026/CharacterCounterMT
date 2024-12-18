import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  Bgcontainer,
  LeftPannel,
  InfoCardContainer,
  Info,
  RightPannel,
  CounterHeading,
  CounterHeadings,
  AddInputContainer,
  Form,
  Input,
  AddInputButton,
  EmptyImage,
} from './styledComponents'

class CounterChar extends Component {
  state = {
    userInputList: [],
    userInput: '',
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    if (userInput.trim() !== '') {
      const newUserInput = {
        id: uuidv4(),
        userEnteredText: userInput,
        textLength: userInput.length,
      }
      this.setState(prevState => ({
        userInputList: [...prevState.userInputList, newUserInput],
        userInput: '',
      }))
    }
  }

  renderUserInputs = () => {
    const {userInputList} = this.state
    return userInputList.length === 0 ? (
      <EmptyImage
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    ) : (
      <ul>
        {userInputList.map(eachInput => (
          <li key={eachInput.id}>
            <p>{eachInput.userEnteredText}</p>
            <p>{eachInput.textLength}</p>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const {userInput} = this.state
    return (
      <Bgcontainer>
        <LeftPannel>
          <InfoCardContainer>
            <CounterHeadings>Count the characters like a Boss</CounterHeadings>
          </InfoCardContainer>
          <Info>{this.renderUserInputs()}</Info>
        </LeftPannel>
        <RightPannel>
          <AddInputContainer>
            <CounterHeading>Character Counter</CounterHeading>
            <Form>
              <Input
                type="text"
                placeholder="Enter the Characters here"
                value={userInput}
                onChange={this.onChangeUserInput}
              />
              <AddInputButton onClick={this.onAddUserInput}>Add</AddInputButton>
            </Form>
          </AddInputContainer>
        </RightPannel>
      </Bgcontainer>
    )
  }
}

export default CounterChar
