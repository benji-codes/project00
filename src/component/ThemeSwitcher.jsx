import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => (props.dark ? "#222" : "#fff")};
        color: ${(props) => (props.dark ? "#fff" : "#000")};
        font-family: Arial, sans-serif;
        transition: all 0.3s ease-in-out;
    }
`;

const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    `;
const ToggleButton = styled.button`
        padding: 10px;
        margin-top: 20px;
        cursor: pointer;
        background: ${(props) => (props.dark ? "#fff" : "#222")};
        color: ${(props) => (props.dark ? "#000" : "#fff")};
        border: none;
        border-radius: 5px;
    `;

function ThemeSwitcher() {
const [dark, setDark] = useState(false);

return (
    <>
        <GlobalStyle dark={dark} />
        <Container>
            <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>
            <ToggleButton dark={dark} onClick={() => setDark(!dark)}>
                Toggle Theme
            </ToggleButton>
        </Container>
        </>
    );
}
export default ThemeSwitcher;
