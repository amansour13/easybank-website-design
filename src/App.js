import './App.css';
import image from './logo180.png';
import logo1 from'./icon-hamburger.svg';
import logo2 from'./image-mockups.png';
import logo3 from'./icon-online.svg';
import logo4 from'./logo.svg';
function App() {
  return (
    <div className="App"> 
    <div class="container">
          <img src={logo4} class="a" alt="photo"  />  
        <div className="one">
            {/* <!-- <h1 class="f"> ARSHA</h1> --> */}
            <ul class="naaaaav">
                <li class="firsssssssst"> Home</li>
                <li class="firsssssssst"> About</li>
                <li class="firsssssssst"> Contact</li>
                <li class="item"> Blog</li>
                <li class="firsssssssst"> Careers</li>
               
            </ul>
            <button class="firstbuttttton" >Request invite</button>
            <img src={logo1} class="b"  alt="photo" />
        </div>
    
    </div>
    <div class="big">
<div class="first">
<h1>  Next generation</h1><h1 class="secooond"> digital banking</h1>
<p class="l"> Take your financial life online. Your Easybank account will be a one-</p><p>stop-shop 
    for spending, saving, budgeting, investing, and much more.</p>
<button class="ww"  >Request invite</button>
</div>
<div class="second">
    <img src={logo2}   alt="photo"  />
</div>
    </div>
    <h1 class="seconddddd"> Why choose Easybank?</h1>
    <p class="seconddddd">We leverage Open Banking to turn your bank account into your financial hub.</p>
    <p class="seconddddd">Control 
        your finances like never before.</p>
    {/* <div class="bigone">
        <div class="oneeeee">
            <img src={logo3}alt="photo"  />
            <h1>Online Banking</h1>
            <p class="eee"> Our modern web and mobile applications allow you to keep track of your finances 
                wherever you are in the world.</p>
            </div>
</div> */}
    </div>
  );
}

export default App;
