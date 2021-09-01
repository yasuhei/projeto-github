import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import logo from '../../assets/logo.svg'

import { Title, Form, Repositories} from './styles'

const Dashboard:  React.FC = () => {
 
  return(
    <>
    <img src={logo} alt='github explorer'/>
     <Title>Explore repósitorios no github</Title>

    <Form>
      <input placeholder='Digite o nome do repósitorio' />
      <button type='submit'>Pesquisar</button>
    </Form>

    <Repositories>
    <a href="teste">
    <img src="https://avatars.githubusercontent.com/u/67479901?v=4" 
    alt="Yasuhei Nakamura" 
    />
    <div>
      <strong>rocketseat/unform</strong>
      <p>Easy peasy highly scalable React</p>
    </div>
    <FiChevronRight size={20}/>
    </a>

    <a href="teste">
    <img src="https://avatars.githubusercontent.com/u/67479901?v=4" 
    alt="Yasuhei Nakamura" 
    />
    <div>
      <strong>rocketseat/unform</strong>
      <p>Easy peasy highly scalable React</p>
    </div>
    <FiChevronRight size={20}/>
    </a>

    <a href="teste">
    <img src="https://avatars.githubusercontent.com/u/67479901?v=4" 
    alt="Yasuhei Nakamura" 
    />
    <div>
      <strong>rocketseat/unform</strong>
      <p>Easy peasy highly scalable React</p>
    </div>
    <FiChevronRight size={20}/>
    </a>
    </Repositories>
     </>
  )


 
  
}

export default Dashboard;