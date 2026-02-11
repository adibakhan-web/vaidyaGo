import React, {useState} from 'react';
import styled from 'styled-components';
import { BiPlusMedical } from 'react-icons/bi';
import { FaMinus } from 'react-icons/fa';

const Counter = () => {

    const [count , SetCount] = useState(0)


  return (
    
    <Wrapper>
        <div className='container'>
            <button onClick={() => SetCount(count + 1)}>
                <BiPlusMedical className='icon' />
            </button>
             <h1>{count}</h1>
             <button onClick={() => (count === 0 ? SetCount(0) : SetCount(count - 1))}>              
                <FaMinus className='icon minus_icon' />
             </button>
        </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
.container {
height: 100vh;
display: flex;
justify-content:center;
align-items:center;
gap: 4.8rem;

}
`;

export default Counter;