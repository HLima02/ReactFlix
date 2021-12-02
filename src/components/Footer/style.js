import styled from 'styled-components';

export const FooterContainer = styled.div`
  text-align: center;
  background-color: #141414;
  padding: 20px 2%;
  p {margin-bottom: 10px; font-size:18px;}

  @media only screen and (max-width: 760px) {
    p {font-size:13px;}
  }
`;