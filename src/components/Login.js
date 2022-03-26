import React from 'react'
import styled from 'styled-components'


const Login = () => {
  return (
    <Container>
      <Content>
        <Login>
          LOGIN
        </Login>
      </Content>
    </Container>
  )
}

const Container = styled.section`
overflow: hidden;
color: red;
border: 1px solid black;

`
const Content = styled.div`
// padding: 15px 6px;
font-size: 20px;
// cursor: pointer;
`
const Login = styled.p`
  border: 1px solid red;
`

export default Login;