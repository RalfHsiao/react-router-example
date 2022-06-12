import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  console.log("route home");
  return (<h2>Home</h2>);
}

function About() {
  console.log("route about");
  return (<h2>About</h2>);
}

function Users() {
  console.log('route user')
  return (<h2>Users</h2>);
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
