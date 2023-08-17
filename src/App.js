import logo from "./logo.svg";
import "./App.css";
import {
  AppBar,
  Button,
  Container,
  Footer,
  GridContainer,
  GridItem,
  Main,
  Navigation,
  Page,
  Row,
  Spacer,
  Stack,
  SvgIcon,
  Theme,
  borderStyle,
} from "@yakad/ui";
import YakadButtons from "./components/Buttons";
import YakadInput from "./components/inputField";
import YakadSpacer from "./components/spacer";
import YakadPage from "./components/Yakad.Structure";

function App() {
  return (
    <Theme mode="dark">
      <Page>
        <Main>
          <AppBar>
            <h2></h2>
            <Row>
              <Button variant="link">✓</Button>
              <Button variant="link">✓</Button>
              <Button variant="link">✓</Button>
            </Row>
            <Spacer />
          </AppBar>
        </Main>
        <YakadPage />
        <Navigation />
        <YakadButtons />
        <YakadInput />
        <YakadSpacer />
        <footer
          style={{
            fontSize: "2.5rem",
            textAlign: "center",
            borderStyle: " double none",
            borderLeftStyle: "none",
            borderRightStyle: "none",
            background: "#1109",
          }}
        >
          Please Don't waste your time here, get some help.
        </footer>
      </Page>
    </Theme>
  );
}

export default App;
