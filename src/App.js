import {Component} from 'react'
import './App.css'

class App extends Component{
  render(){
    return(
      <div className='background'>
        <div className='container'>
          <div className='companydescription'>
            <h1 className='title'>Mobishaala</h1>
            <p className='description'>Create your <span>Digital Classroom </span>in 5 mins for <span>FREE </span>& connect to 1+ Million Students</p>
            <ul className='orderedlist'>
              <li>No technical knowledge required.</li>
              <li>Quickly setup live class, tests, notes, ebooks and more.</li>
              <li>Reach out to millions of students anywhere, anytime.</li>
            </ul>
            <div className='smallvideocontainer'>
            <iframe 
            src="https://www.youtube.com/embed/jg5d59ligW4" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture; 
            web-share" allowfullscreen></iframe> 
            <button type='button' className='btn'>Buy</button>
          </div>
            <div className='btncontainer'>
              <p className='btndescription'>Institude/Teacher</p>
              <button type='button' className='btn'>Get Started</button>
              <p>Student</p>
              <button type='button' className='btn'>Download App</button>
              <button type='button' className='btn btnn'>
                <img src="https://pngimg.com/d/whatsapp_PNG95149.png" alt="logo" className='whatsapplogo' width={20} height={20} />   Talk to Us
              </button>
            </div>
          </div>
          <div className='videocontainer'>
            <iframe 
            src="https://www.youtube.com/embed/jg5d59ligW4" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture; 
            web-share" allowfullscreen></iframe> 
            <button type='button' className='btn'>Buy</button>
          </div>
        </div>
        <footer className='footer'>
          <h1 className='title'>Mobishaala</h1>
          <div className='foot'>
            <div className='footdes'>
              <h3>Vision</h3>
              <p>Empower institution & Teacher with state of the art digital classroom Technology.</p>
              <h3>Address</h3>
              <p><span>Registered Office</span> : 804, 5th Cross, 9th main,4th Block Koramangala,Bangalore,Karnataka 560034</p>
              <p><span>Corporate Office</span> : 293, Westend Marg, near Saket, Saidulajab, Saket, New Delhi, 110030</p>
            </div>
            <div className='footlinks'>
              <h2>Quick Links</h2>
              <p>Blog</p>
              <p>Android App</p>
              <p>ISO App</p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
export default App