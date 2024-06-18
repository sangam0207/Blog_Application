import styled from "styled-components";
import { navIcons } from "../../../config/nav-configs/navIcons-configs";
import { navItems } from "../../../config/nav-configs/nav-items";
import { NavLink } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { axiosPublic } from "../../../api/axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
const SidebarContainer = styled.div`
  position: fixed;
  top: 65px;
  left: 0;
  width: 250px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f8f9fa;
  z-index: 1000;
  overflow-y: auto;
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
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      const res = await axiosPublic.get("/logout");
      setToken(null);
      navigate("/login");
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
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
      <button className="flex gap-2 relative " onClick={handleClick}>
        <IoLogOut className="text-3xl ml-2 mt-4 text-red-500 hover:text-red-800" />
        <p className="text-xl absolute top-4 left-10 text-red-500 hover:text-red-800">
          Logout
        </p>
      </button>
    </SidebarContainer>
  );
};

export default Sidebar;
