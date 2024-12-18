import styled from 'styled-components'

export const Bgcontainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f9f9f9;
`

export const LeftPannel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 50px;
  background-color: #ffc533;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const InfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background-color: transparent;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: transparent;
`

export const RightPannel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 50px;
  background-color: #0f172a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const CounterHeading = styled.h1`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  text-align: center;
  font-size: 24px;
  line-height: 36px;
  color: #ffbf1f;
`
export const CounterHeadings = styled.h1`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #333333;
`

export const AddInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background-color: transparent;
`

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  padding-top: 50px;
`
export const Input = styled.input`
  margin: 10px;
  width: 80%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #333333;
`

export const AddInputButton = styled.button`
  width: 20%;
  margin: 10px;
  padding: 10px;
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
`

export const EmptyImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`
