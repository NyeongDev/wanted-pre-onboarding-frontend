import { Outlet } from "react-router-dom";
import { Flex } from "../common";

const Layout = () => {
  return (
    <Flex ht="100vh" bc="#F5F5F5">
      <Flex
        bs="3px 3px 10px rgba(0, 0, 0, 0.1);"
        pd="45px 50px"
        bc="white"
        wd="455px"
        ht="720px"
        radius="20px"
      >
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default Layout;
