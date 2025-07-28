import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { ThemeProvider, useTheme } from "./THemeContext";

function App() {
  function AppContent() {
    const { theme } = useTheme();
    return (
      <div className={`app ${theme}`}>
        {console.log(ThemeProvider)}
        <Navbar />
        <Main />
      </div>
    );
  }

  return (
    <div>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </div>
  );
}

export default App;
