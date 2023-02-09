import { Form, Flex, H1, Label, Span } from "../components/common";
import { AuthInput, AuthBtn } from "../components/auth";

const Auth = () => {
  return (
    <Form ht="100%" wd="100%">
      <Flex ht="100%" jc="space-between" dir="column">
        <Flex wd="100%" dir="column" gap="70px" mg="20px 0 0 0">
          <H1>로그인</H1>
          <Flex wd="100%" dir="column" gap="30px">
            {/* 이메일 */}
            <Flex wd="100%" ai="flex-start" dir="column" gap="10px">
              <Label htmlFor="email">이메일</Label>
              <Flex dir="column" wd="100%" ai="flex-start" gap="5px">
                <AuthInput
                  data-testid="email-Authinput"
                  type="email"
                  id="email"
                  maxLength="35"
                  placeholder="email@email.com"
                />
                <Span>이메일 형식이 올바르지 않습니다.</Span>
              </Flex>
            </Flex>

            {/* 비밀번호 */}
            <Flex wd="100%" ai="flex-start" dir="column" gap="10px">
              <Label htmlFor="pw">비밀번호</Label>
              <Flex dir="column" wd="100%" ai="flex-start" gap="5px">
                <AuthInput
                  data-testid="password-Authinput"
                  type="password"
                  id="pw"
                  maxLength="35"
                  placeholder="8자 이상"
                />
                <Span>8자 이상 입력해주세요.</Span>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        {/* 버튼 */}
        <AuthBtn data-testid="signin-button" variant="disabled">
          로그인
        </AuthBtn>
      </Flex>
    </Form>
  );
};

export default Auth;
