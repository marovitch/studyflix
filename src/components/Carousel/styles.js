import styled from 'styled-components';

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  border-radius: 4px;
  display:inline-block;
  font-weight: normal;
  font-size:35px;
  line-height:1;
  padding:20px;
  margin-bottom: 16px;

  @media (max-width:800px){
  font-size:18px;
  padding:10px;
  }
`;

export const ExtraLink = styled.a`
margin-left:16px;
text-decoration:none;

transition:opacity .3s;

&:hover,
&focus{
  opacity: .5;
}

@media (max-width:800px){
  display:block;
  margin-bottom:10px;
  margin-left:0;
}


`;

export const Slider = styled.ul`
  list-style:none;
  display:flex;
  padding-left:0;
  margin:0;
  overflow-x:auto;

  li{
    margin-right:16px;
  }


`;

