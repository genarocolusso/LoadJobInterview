import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialising;
}

*, input, button{
  border: 0;
  outline: 0;
  font-family: 'Roboto', sans-serif; 
}

html, body, #root {
  height: 100%;
  background-color: var(--bg-color);
  color: var(--darkgray)
}


.content{ 
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: 758px;   
  display: flex;
  flex: 1;
  align-items: center; 
  
padding: 0px 8px;
}

.content.nav{
  justify-content: space-between
}


:root{
  --bg-color: #F4F4F4;
  --bg-menu:#343D46;
  --green: #28D454;
  --darkgreen: #009500;
  --gray-menu: #A3A5A9;
  --menu-border: #58585A;
  --menu-selected: #49535C;

  
  --darkgray: #3B3B3B;
  --white: #FFFFFF; 

  --info-box-bg:#EEEEEE;
  --content-box-bg: #FDFFFF;
  --info-devider: #dedede;

  
  --list-title:#333D48;
  --list-text: #5B626D;
  --list-text-selected: #FFFFFF;
  --shipment-bg-selected: #3B4650;
  --shipment-bg: #FFFFFF;

  --disabled-box: #EFEFEF;
  --disabled-text: #ACB1B5;

  --border-color: #dadada;

  --progress-inactive: #E4E4E4;
  --progress-active: var(--green);
  --progress-inactive-dot: #C1C1C1;
  --progress-active-dot: var(--darkgreen);

} 


@media (min-width: 758px){
  .content{
  //lgwidth
  max-width: 1100px;  
  
padding: 0px 16px;
}
  }
  
`;
