import styled from "styled-components";

export const ListItem = styled.li`
  list-style: none;
  display: inline-block;
  padding: 16px 10px;
  font-size: 14px;
  border-left: 1px solid var(--menu-border);
 
  > a {
    text-decoration: none;
    color: var(--gray-menu);
  }

  :hover, &.active{
    background-color: var(--menu-selected);
    > a { 
    color: var(--green);
  }
  }
`;
