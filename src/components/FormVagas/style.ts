import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 768px) {
    padding: 32px 16px;
  }
`

export const Button = styled.button`
  background-color: ${(props) => props.theme.corPrincipal};
  border: 2px solid ${(props) => props.theme.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => props.theme.corSecundaria};
  cursor: pointer;
  margin-left: 8px;
`

export const Input = styled.input`
  padding: 0 16px;
  outline-color: ${(props) => props.theme.corPrincipal};
`
