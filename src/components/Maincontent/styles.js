import styled from "styled-components";



export const Grid  =  styled.div`

display:grid; 
width: 100%;
grid-template-columns:  307px 1fr;

grid-column-gap: 12px;
margin-top: 20px; 
margin-bottom: 20px; 

@media (max-width:758px ){
  
grid-template-columns: 1fr;
grid-gap: 16px;
}
`;