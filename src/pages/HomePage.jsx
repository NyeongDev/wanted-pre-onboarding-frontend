import { useEffect } from "react";
import { Outlet, useMatch, useNavigate } from "react-router-dom";
import { AuthBtn } from "../components/auth";
import { Flex, H1 } from "../components/common";

const HomePage = () => {
  const matchHome = useMatch("/");
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  useEffect(() => {
    token && navigate("/todo");
  }, [token]);

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
        {matchHome ? (
          <Flex dir="column" ht="100%" wd="100%" jc="space-between">
            <Flex mg="30px">
              <H1>TODO LIST</H1>
            </Flex>
            <Flex wd="100%" gap="10px">
              <AuthBtn
                isBtnAvailable="always"
                onClick={() => navigate(`signup`)}
              >
                회원가입
              </AuthBtn>
              <AuthBtn
                isBtnAvailable="always"
                data-testid="signin-button"
                onClick={() => navigate(`signin`)}
              >
                로그인
              </AuthBtn>
            </Flex>
          </Flex>
        ) : null}
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default HomePage;
