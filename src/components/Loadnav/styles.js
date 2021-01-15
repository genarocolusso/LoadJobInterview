import styled from "styled-components";

export const Container = styled.div`

background-color: var(--bg-menu);
width: 100%; 
`;  

export const Infos = styled.ul``;

export const LogoNav = styled.a`
width: 147px;
text-decoration: none;

> img {
  width: 100%;
  height: auto;
}

@media (max-width:575px ){
  
  width: 107px;
  }
  
`;
