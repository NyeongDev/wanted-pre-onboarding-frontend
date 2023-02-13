import { Form, Flex, H1, Label, Span } from "../components/common";
import { AuthInput, AuthBtn } from "../components/auth";
import { useState, useEffect } from "react";
import { signInApi, signUpApi } from "../api/auth";
import { useNavigate, useMatch } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const matchSignUp = useMatch("/signup");
  const matchSignIn = useMatch("/signin");
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isPwValid, setIsPwValid] = useState(null);
  const [isBtnAvailable, setIsBtnAvailable] = useState("unavailable");
  const [formContent, setFormContent] = useState({});
  const [movePath, setMovePath] = useState("");
  const [authUi, setAuthUi] = useState({
    pageTitle: "",
    btnName: [],
    inputGuide: [],
  });

  // 로그인 여부에 따른 리다이렉트
  useEffect(() => {
    token && navigate("/todo");
  }, [token]);

  // UI 변경
  useEffect(() => {
    if (matchSignUp) {
      setAuthUi({
        pageTitle: "회원가입",
        btnName: ["취소", "가입하기"],
        inputGuide: ["email@email.com", "8자 이상 입력하세요"],
        btnId: "signup-button",
      });
      setMovePath("signin");
    } else if (matchSignIn) {
      setAuthUi({
        pageTitle: "로그인",
        btnName: ["회원가입", "로그인"],
        inputGuide: ["email@email.com", ""],
        btnId: "signin-button",
      });
      setMovePath("signup");
    }
  }, [matchSignIn, matchSignUp]);

  // 양식 저장
  const handleFormContent = e => {
    setFormContent({ ...formContent, [e.target.name]: e.target.value });
  };

  // 유효성 검사
  const handleValidEmail = e => {
    e.target.value.includes("@")
      ? setIsEmailValid(true)
      : setIsEmailValid(false);
  };

  const handleValidPw = e => {
    if (matchSignUp) {
      e.target.value.length > 7 ? setIsPwValid(true) : setIsPwValid(false);
    } else if (matchSignIn) {
      e.target.value.length > 0 ? setIsPwValid(true) : setIsPwValid(false);
    }
  };

  // 버튼 활성화
  useEffect(() => {
    isEmailValid && isPwValid
      ? setIsBtnAvailable("available")
      : setIsBtnAvailable("unavailable");
  }, [isEmailValid, isPwValid]);

  // 양식 제출
  const handleSubmit = async e => {
    e.preventDefault();

    // 회원가입
    if (matchSignUp) {
      const response = await signUpApi(formContent);
      switch (response) {
        case 201:
          return (
            window.alert("회원가입이 완료되었습니다."), navigate("/signin")
          );
        case 400:
          return window.alert("이미 사용중인 이메일입니다.");
        default:
          return window.alert("알 수 없는 에러가 발생했습니다.");
      }

      // 로그인
    } else if (matchSignIn) {
      const response = await signInApi(formContent);
      if (response.status === 200) {
        window.localStorage.setItem("accessToken", response.data.access_token);
        window.location.replace("/todo");
      } else if (response.status === 401) {
        return window.alert("이메일 또는 비밀번호가 일치하지 않습니다.");
      } else if (response.status === 404) {
        return window.alert("존재하지 않는 사용자입니다.");
      } else {
        return window.alert("알 수 없는 에러가 발생했습니다.");
      }
    }
  };

  return (
    <Form ht="100%" wd="100%">
      <Flex ht="100%" jc="space-between" dir="column">
        <Flex wd="100%" dir="column" gap="70px" mg="20px 0 0 0">
          <H1> {matchSignIn ? "로그인" : "회원가입"}</H1>
          <Flex wd="100%" dir="column" gap="30px">
            {/* 이메일 */}
            <Flex wd="100%" ai="flex-start" dir="column" gap="10px">
              <Label htmlFor="email">이메일</Label>
              <Flex dir="column" wd="100%" ai="flex-start" gap="5px">
                <AuthInput
                  data-testid="email-input"
                  type="email"
                  id="email"
                  name="email"
                  maxLength="35"
                  placeholder={authUi.inputGuide[0]}
                  onChange={e => {
                    handleFormContent(e);
                    handleValidEmail(e);
                  }}
                />
                <Span variant={isEmailValid}>
                  이메일 형식이 올바르지 않습니다
                </Span>
              </Flex>
            </Flex>

            {/* 비밀번호 */}
            <Flex wd="100%" ai="flex-start" dir="column" gap="10px">
              <Label htmlFor="password">비밀번호</Label>
              <Flex dir="column" wd="100%" ai="flex-start" gap="5px">
                <AuthInput
                  data-testid="password-input"
                  type="password"
                  id="password"
                  name="password"
                  maxLength="35"
                  placeholder={authUi.inputGuide[1]}
                  onChange={e => {
                    handleFormContent(e);
                    handleValidPw(e);
                  }}
                />
                {matchSignUp ? (
                  <Span variant={isPwValid}>{authUi.inputGuide[1]}</Span>
                ) : null}
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        {/* 버튼 */}
        <Flex wd="100%" gap="10px">
          <AuthBtn
            isBtnAvailable="always"
            onClick={() => navigate(`/${movePath}`)}
          >
            {authUi.btnName[0]}
          </AuthBtn>
          <AuthBtn
            isBtnAvailable={isBtnAvailable}
            data-testid={authUi.btnId}
            onClick={handleSubmit}
          >
            {authUi.btnName[1]}
          </AuthBtn>
        </Flex>
      </Flex>
    </Form>
  );
};

export default Auth;
