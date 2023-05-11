import './App.css';
import image1 from './images/New folder/icon-online.svg';
import image2 from './images/New folder/icon-budgeting.svg';
import image3 from './images/New folder/icon-onboarding.svg';
import image4 from './images/New folder/icon-api.svg';
import image5 from './images/image-currency.jpg';
import image6 from './images/image-restaurant.jpg';
import image7 from './images/image-plane.jpg';
import image8 from './images/image-confetti.jpg';
import image9 from './images/New folder/logo2.svg';
import logo1 from'./icon-hamburger.svg';
import logo2 from'./image-mockups.png';
import logo3 from'./icon-online.svg';
import logo4 from'./logo.svg';

function Section2(){
  return(

    <div class="Container">
    <div className='Container_section-2'>
        <div className='s1 item'>
            <img src={image1} alt='online banking icon'/>
            
            <h2>Online Banking</h2>
            
            <p className='txt'>Our modern web and mobile applications allow you to keep track of your finances 
                wherever you are in the world.</p>
        </div>
        <div className='s2 item'>
            <img src={image2} alt='budgeting icon'/>
            
            <h2>Simple Budgeting</h2>
            
            <p className='txt'>See exactly where your money goes each month. Receive notifications when you’re 
                close to hitting your limits.</p>

        </div>
        <div className='s3 item'>
            <img src={image3} alt="onboarding icon"/>
            
            <h2>Fast Onboarding</h2>
            
            <p className="txt">We don’t do branches. Open your account in minutes online and start taking control 
                of your finances right away.</p>

        </div>
        <div className="s4 item">
            <img src={image4} alt="api icon"/>
            
            <h2>Open API</h2>
            
            <p className="txt">Manage your savings, investments, pension, and much more from one account. Tracking 
                your money has never been easier.</p>
        </div> 
    </div>
  </div>
    );
}

function Ashraf() {
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
    <div>
    <h1 class="seconddddd"> Why choose Easybank?</h1>
    <p class="seconddddd">We leverage Open Banking to turn your bank account into your financial hub.</p>
    <p class="seconddddd">Control 
        your finances like never before.</p>
    </div>
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

function Section3(){
  return(
    <div class="Container">
    <div className='section-3'>
            <h1>Latest Articles</h1>

            <div className="Container_section-3">
                <div className="s1 item">
                    <img src={image5} alt="currency" />
                    <h5 className="peot">By Claire Robinson</h5>
                    <h5>Receive money in any currency with no fees</h5>
                    <p className="txt">The world is getting smaller and we’re becoming more mobile. So why should you be 
                        forced to only receive money in a single …</p>
                </div>

                <div className="s2 item">
                    <img src={image6} alt="restaurant"/>
                    <h5 className="peot">By Wilson Hutton</h5>
                    <h5>Treat yourself without worrying about money</h5>
                    <p className="txt">Our simple budgeting feature allows you to separate out your spending and set 
                        realistic limits each month. That means you …</p>
                </div>

                <div className="s3 item">
                    <img src={image7} alt="plane"/>
                    <h5 className="peot">By Wilson Hutton</h5>
                    <h5>Take your Easybank card wherever you go</h5>
                    <p className="txt">We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                        while you’re abroad. We’ll even show you …</p>
                </div>

                <div className="s4 item">
                    <img src={image8} alt="confetti"/>
                    <h5 className="peot">By Claire Robinson</h5>
                    <h5>Our invite-only Beta accounts are now live!</h5>
                    <p className="txt">After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                        It’s easy to request an invite through the site …</p>
                </div>
            </div>
            
        </div>
        </div>
  );
}

function Footer (){
  return(
    <div className="fcontainer">
        <div className="footer">
            <div className="s1 item"><img src={image9} alt=""/></div>
            <div className="s2 item">
                
                <ul>
                    <li><a href="/aboutus">About us</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/blog">Blog</a></li>
                </ul>
                </div>
                <div className="s3 item">
                <ul>
                    <li><a href="/careers">Careers</a></li>
                    <li><a href="/support">Support</a></li>
                    <li><a href="/privacypolicy">Privacy Policy</a></li>
                </ul>

            </div>
            <div className="s4 item">
                <input type="button" value="Request invite" className="btn_request"/>
                <h5>© Easybank. All Rights Reserved</h5>
            </div>

        </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Ashraf />
      <Section2 />
      <Section3 />
      <Footer />
    </>
  );
}

export default App;
