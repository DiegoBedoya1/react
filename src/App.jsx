import {createContext, useState, useContext} from "react";
import './App.css'
import Counter from "./components/CustomHook/Counter"
import CounterMemo from "./components/CounterMemo/CounterMemo"

const ThemeContext = createContext();

function ThemeProvider({children}){
  const[theme,setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark": "light"));
  }
  return (
      <ThemeContext.Provider value = {{theme,toggleTheme}}>
        {children}
      </ThemeContext.Provider>
    )
}

function ThemeButton(){
  const {theme,toggleTheme} = useContext(ThemeContext);
  return (
    <button onClick = {toggleTheme}
     style = {{backgroundColor:theme === "light" ? "#FFF": "#333",
      color: theme === "light" ? "#000": "#FFF"
      }}> change theme</button>
  )
}

function App() {
  return (
    <> 
     <ThemeProvider>
       <ThemeButton/>
       <Counter/>
     </ThemeProvider>
     <CounterMemo/>
    </>
   
  );
}

export default App
