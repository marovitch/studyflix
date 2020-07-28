import styled from 'styled-components';

const Button = styled.a`
color: var(--white);
border: 1px solid var(--white);
box-sizing: border-box;
cursor: pointer;
padding: 16px 24px;
margin-left:auto;
font-style: normal;
font-weight: bold;
font-size: 16px;
outline: none;
border-radius: 5px;
text-decoration: none;
transition: opacity .3s;
&:hover,
&:focus {
opacity: .5;
}
`;

export default Button;