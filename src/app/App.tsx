import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Home from '../pages/Home';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-main">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
