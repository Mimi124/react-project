import SideBar from './components/SideBar';
import Header from './components/header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
       <SideBar />
       {/* <div id="page-wrap">
        <h1>AppDividend</h1>
        <h2>Check out our tutorials the side menubar</h2>
        </div> */}
        <Footer />
    </div>
  );
}

export default App;
