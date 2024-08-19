import LocaleSelect from "../component/LocaleSelect";
import styled from "styled-components";
import Review from "../component/Review";
import { useTheme } from "../context/ThemeContext";
import ThemeBtn from "../component/ThemeBtn";
import { useLocale } from "../context/LocaleContext";

const Wrapper = styled.div`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;

function MainPage() {
  const { theme } = useTheme();
  const locale = useLocale();
  return (
    <Wrapper
      backgroundColor={theme === "light" ? "white" : "#262626"}
      color={theme === "light" ? "black" : "white"}
    >
      <h1>{locale === "ko" ? "영화 리뷰 게시판" : "Moview Review Board"}</h1>
      <ThemeBtn />
      <LocaleSelect />
      <Review />
    </Wrapper>
  );
}

export default MainPage;
