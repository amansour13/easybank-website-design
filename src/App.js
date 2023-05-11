import './App.css';
import image from './logo180.png';

const logo = {
  name: 'logo 180',
  imageUrl: './logo180.png',
  imageSize: 90,
};

function App() {
  return (
    <div className="App">
      <nav>
      <img
        className="logo"
        src={image}
        alt={'Photo of' + logo.name}
        style={{
          width: logo.imageSize,
          height: logo.imageSize
        }}
      />
        <ul className='navbar'>
          <li><a href='#' className='links active'>Home</a></li>
          <li><a href='#' className='links'>Events</a></li>
          <li><a href='#' className='links'>About Us</a></li>
        </ul>
      </nav>
      <div> 
        
      </div>
    </div>
  );
}

export default App;
