import './App.css';
import Footer from './containers/Footer';
import Header from './containers/Header';
import Layout from './containers/Layout';
import Router from './routes';

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Router />
        <Footer/>
      </Layout>
    </div>
  );
}

export default App;
