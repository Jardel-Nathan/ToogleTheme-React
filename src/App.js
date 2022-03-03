import "./styles.css";
import { GlobalStyle, Container, ToggleTheme } from "./globalStyles";
import useToggle from "./hooks/useTheme";
import { MdNightlightRound, MdOutlineWbSunny } from "react-icons/md";

export default function App() {
  const [themeSelected, setTheme] = useToggle();
  return (
    <>
      <Container>
        <ToggleTheme>
          <button onClick={setTheme}>
            {themeSelected === "light" ? (
              <MdOutlineWbSunny size={20} />
            ) : (
              <MdNightlightRound size={20} />
            )}
            {themeSelected}
          </button>
        </ToggleTheme>

        <h1>Toggle Dark/Light Mode</h1>
        <h2>it's {themeSelected} theme mode!</h2>
      </Container>
      <GlobalStyle theme={themeSelected} />
    </>
  );
}
