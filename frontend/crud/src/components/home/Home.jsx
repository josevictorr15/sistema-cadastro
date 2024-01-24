import React from 'react'
import Main from '../template/Main'

const Home = ({...props}) => {
  return (
    <Main title="Início" subtitle="Sistema de cadastro">
        <div className="display-4">Bem-vindo</div>
        <hr />
        <p className="mb-0">Sistema de cadastro feito com React.</p>    
    </Main>
  )
}

export default Home