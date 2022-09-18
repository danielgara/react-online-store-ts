import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="masthead custom-primary text-white text-center py-4">
        <div className="container d-flex align-items-center flex-column">
          <h2>A React Online Store</h2>
        </div>
      </header>
      <div className="container mt-4">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
