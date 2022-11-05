import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import HomePage from "./components/Home.page";
import SuperHeroesPage from "./components/Superheroes.page";
import RQSuperheroesPage from "./components/RQSuperheroes.page";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/super-heroes" element={<SuperHeroesPage />}></Route>
            <Route
              path="/rq-super-heroes"
              element={<RQSuperheroesPage />}
            ></Route>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
