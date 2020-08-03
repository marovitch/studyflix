import styled from 'styled-components';

const Button = styled.button `

color: var(--white);
background-color: var(--black);
border: 1px solid var(--white);
border-radius:4px;
padding: 16px 24px;
font-size: 16px;
margin-left:auto;
font-weight:bold;
text-decoration:none;
transition: opacity .3s;

cursor:pointer;

&:hover,
&:hover{
  opacity: .5;
}

@media (max-width:800px){
position: fixed;
bottom:0;
right:0;
right:0;
width:100%;
border:none;
outline:0;
border-radius:0;

background-color:var(--primary);
color:var(--white);
}
`;

export default Button;