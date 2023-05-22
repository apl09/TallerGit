import { MoviesGrid } from "./components/MoviesGrid"
import styles from "./App.module.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
export function App() {
    return <div>
        <header>
            <h1 className={styles.title}>Peliculas de mierda</h1>
        </header>
        <main>
           <MoviesGrid/>
        </main>
    </div>
}