import './App.css';
import React, {useState} from "react";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./styles/theme";
import {GoTop} from "./components/goTop/GoTop";
import {Footer} from "./layout/footer/Footer";
import {Header} from "./layout/header/Header";
import {GlobalStyles} from "./styles/Global.styled";
import {MainPage} from "./pages/MainPage";


function App() {

    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', event => {
            setDarkTheme(event.matches);
        });

    const [darkMode, setDarkTheme] = useState(isDarkMode);
    const switchTheme = () => {
        setDarkTheme(!darkMode);
    };

    return (
        <div className="App">
            <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
                <GlobalStyles/>
                <Header switchHandle={switchTheme} switchChecked={darkMode} />
                <MainPage/>
                <Footer/>
                <GoTop/>
            </ThemeProvider>
        </div>
    );
}

export default App;
