import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import CreatePost from "./screens/CreatePost";
import Home from "./screens/Home";
import { darkTheme } from "./utils/Themes";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  flex: 3;
`;

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Container>
          <Wrapper>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/post" element={<CreatePost />} />
              </Routes>
            </BrowserRouter>
          </Wrapper>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
