import styled from "styled-components";
import { navIcons } from "../../../config/nav-configs/navIcons-configs";
import { navItems } from "../../../config/nav-configs/nav-items";
import { NavLink } from "react-router-dom";

const SidebarContainer = styled.div`
  position: fixed; 
  top: 65px;
  left: 0;
  width: 250px; 
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f8f9fa; /* Light gray background color */
  z-index: 1000; /* Ensure sidebar appears above other content */
  overflow-y: auto; /* Allow sidebar to scroll if content exceeds height */
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 10px;
  font-size: 18px;
  color: #333;
  text-decoration: none;

  &:hover {
    background-color: #e9ecef;
    border-radius: 5px;
  }
`;

const IconWrapper = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      {navItems.map((item) => (
        <NavLink to={item.path} key={item.key}>
          <NavItem>
            <IconWrapper>{navIcons[item.key]}</IconWrapper>
            <Label>{item.label}</Label>
          </NavItem>
        </NavLink>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
