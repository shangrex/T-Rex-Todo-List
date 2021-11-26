import './App.css';
import Background from './components/Background'
import Header from './components/Header'
import pic_rex from './images/t-rex.png'

function App() {
  return (
      <div style={background_style}>
        <Header/>
      </div>
  );
}


const background_style = {
    backgroundImage: `url(${pic_rex})`
    // ,width:'100%'
    ,backgroundRepeat: 'no-repeat'
    /* Center and scale the image nicely */
    ,backgroundSize: 'cover'
    ,width: '100vw'
    ,height: '150vh'
    ,margin: '0'
    ,backgroundColor: 'rgba(255, 255, 255, 0.01)'
}

const head_style = {
    height: '100%'
    ,margin: '0'
    ,font: '400 15px/1.8 "Lato", sans-serif'
    ,color: '#777'
}

export default App;
