import styled from "styled-components";

const InnerLayout = styled.div`
  background-color: #bb0000;
  color: "#fff";
  transition: all 0.3s ease-in;
`;

const Layout = ({ children }) => {
  return <InnerLayout>{children}</InnerLayout>;
};

export default Layout;
