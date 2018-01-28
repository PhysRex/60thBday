import React, { Component } from 'react';
import logo from './logo.svg';
import flowersPink from './img/Watercolor-pink-flowers.png';
import branchesWhite from './img/Watercolor-branches-white.png';
import cornRedFlowers from './img/Watercolor-corner-red-flowers.png';
import goldDots from './img/Watercolor-gold-dots.png';
import orangeRoses from './img/Watercolor-orange-roses.png';
import orchidTree from './img/Watercolor-orchid-tree.png';
import backgroundBeige from './img/background-beige-paper-1024.jpg';
import backgroundCardboard from './img/background-brown-cardboard-1024.jpg';
import backgroundGreenFabric from './img/background-green-fabric-1024.jpg';
import backgroundSand from './img/background-tan-sand-1024.jpg';
import backgroundTexturePaper from './img/texturedBackground.jpg';
import backgroundRibbonPink from './img/Watercolor-pink-ribbon-flower.png';
import backgroundMusic from "./audio/bensound-tenderness.mp3";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
			modal: false, // determines whether to show modal or not
			required: false, // determines if required class should activate w/in modal
      modalData: {
        name: '',
        attending: false,
        numberAttending: 1,
      }
    }
    this.music = this.music.bind(this);
  }
	/*
	showModal(event) {
		// "RSVP" button
		 if ( this.state.modal === false ) {
			this.setState({
				modal: true,
				required: false
			});
		} else if ( event.target.classList.contains("modal-hide") ) {
      this.clearContents();
			this.setState({
        modal: false,
        required: false
      });
		} else if ( event.target.classList.contains("add-modal") ) {
			this.setState({modal: true, required: false});
		}
  }
  */

  	
	music() {
    // console.log('PLAY MUSIC!!');
		const sound = new Audio(backgroundMusic);
		sound.play();
    sound.currentTime = 0;
    sound.volume = 0.2;
  }
  
  componentWillMount() {
    // this.music();

    // load background music, on repeating intervals (i.e. looping)
    // setInterval( () => {
    //   this.music();      
    // }, 120000);

  }

  componentDidMount() {

    // delay class for border animation
    setTimeout( () => {
      this.setState(
        {
          loading: false
        }
      ); 
    }, 700);
  }

  render() {
    const copy = {
      en: {
        name: 'Rosemary Pena',
        welcome: 'We kindly invite you to...',
        body1: 'Come celebrate with us',
        body2: '60th Birthday Bash!',
        bodyFull: 'Come celebrate with us Rosemary Pena\'s 60th Birthday Bash!',
        date: 'Saturday, March 3rd, 2018',
        address: '123 Main Street',
        address2: 'Cornelius, NC 54321',
        description: 'An exciting time with family and friends',
        invitation : 'Accompany us in celebrating and in giving God thanks for six decades of life!',
        dressCode: 'Indoor Elegant Attire',
        rsvp: 'R.S.V.P.'
      },
      es: {
        name: 'Rosemary Pena',
        welcome: 'We are happy to invite you to join us...',
        body: 'Please come celebrate with us Rosemary Pena\'s 60th Birthday Bash!',
        date: 'Saturday, March 3rd, 2018',
        address: '123 Main Street, Cornelius, NC 54321',
        description: 'An exciting time with family and friends',
        invitation : 'Acompáñanos a celebrar y agradecer a Dios for seis décadas de vida!',
        dressCode: 'Indoor Elegant Attire',
        rsvp: 'RSVP'
      }
    };

    const text = copy.en;

    const modal = 
      <div 
        className={"container-fluid modal modal-hide " + (this.state.modal? "show":"")} 
        onClick={this.showModal}>
        {/* <div className="row modal-hide">
          <div className="col-xs-offset-1 col-xs-10 col-sm-offset-3 col-sm-6 col-md-offset-4 col-md-4 modal-hide">THIS IS A MODAL

            <div className="panel panel-success panel-modal">
              <div className="panel-heading">New Recipe!</div>
              <div className="panel-body">
                <form className="text-left" onSubmit={this.submitRecipe}>
                  <div className="form-group">
                    <label htmlFor="title">Title<small className={this.state.required?"panel-req":""}>*</small>:</label>
                    <input 
                      type="text" 
                      name="title" 
                      className="form-control" 
                      id="input-title" 
                      placeholder="Recipe Name"
                      value={this.state.title}
                      onChange={this.addRecipe}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input 
                      type="text" 
                      name="description" 
                      className="form-control" 
                      id="input-description" 
                      placeholder="Description of dish" 
                      value={this.state.description}
                      onChange={this.addRecipe}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="ingredients">Ingredients<small className={this.state.required?"panel-req":""}>*</small>:</label>
                    <input 
                      type="text" 
                      name="ingredients" 
                      className="form-control" 
                      id="input-ingredients" 
                      placeholder="Ingredients, separated by commas (ex: pears, honey, berries)" 
                      value={this.state.ingredients}
                      onChange={this.addRecipe}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="steps">Steps:</label>
                    <input 
                      type="text" 
                      name="steps" 
                      className="form-control" 
                      id="input-steps" 
                      placeholder="Steps, separated by commas (ex: slice pears, ...)" 
                      value={this.state.steps}
                      onChange={this.addRecipe}/>
                    <small className={this.state.required?"panel-req":""}>*required</small>
                  </div>
                  <div className="btn-justify text-center">
                    <button type="submit" className="btn btn-primary btn-pad btn-submit">Submit</button>
                    <button type="button" className="btn btn-danger btn-pad " onClick={this.clearContents}>Reset</button>
                  </div>
                </form>
              </div>
            </div>

          </div>		
        </div> */}
      </div>;

    return (
      <div className="App">
        <audio autoPlay>
          <source src={backgroundMusic}/>
        </audio>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        <div className="container-fluid">
          {/* <div className="row">
            <div className="col">
              {modal}
            </div>
          </div> */}
          <header className="header-row row">         
          </header>
          <section className="img-row row">
            {/* <img src={flowersPink} id="flowerTop"
              className="flowers fades" alt="logo" /> */}
            <img src={flowersPink} id="flowerBottom" 
              className="flowers fadeInOpaque " alt="logo" />
            <img src={branchesWhite} id="branchesWhite" 
              className="flowers fadeInOpaque " alt="logo" />
            {/* <img src={cornRedFlowers} id="cornRedFlowers" 
              className="flowers fades " alt="logo" /> */}
            {/* <img src={goldDots} id="goldDots" 
              className="flowers fades" alt="logo" /> */}
          </section>
          <section className="body-row row align-items-center fadeIn">
            <div className="col-0 col-md-1 col-xl-3"></div>
            <div className={ ((!this.state.loading) ? "invitationBorder " : "") + "col col-md-10 col-xl-6 text-center" }>
              {/* <img src={orangeRoses} id="orangeRoses" 
                className="flowers fades " alt="logo" /> */}
              <div className="row">
                <div className="welcomeText col text-left fadeIn">{text.welcome}</div>
              </div>
              <div className="row">
                <div className="bodyText bodyFull col mobile fadeIn">{text.bodyFull}</div>
              </div>
              <div className="row">
                <div className="bodyText bodyTop col desktop fadeIn">{text.body1}</div>
                <div className="col-sm-2 desktop"></div>
              </div>
              <div className="row">
                <div className="bodyText bodyMid col desktop fadeIn">{text.name + "'s"}</div>
                <div className="col-sm-1 desktop"></div>
              </div>
              <div className="row">
                <div className="col-sm-3 desktop "></div>
                <div className="bodyText bodyBottom col desktop fadeIn">{text.body2}</div>
              </div>
              <div className="row">
                <div className="dateText col-12 fadeIn">{text.date}</div>              
                <div className="addressText col-12 fadeIn">{text.address}</div>
                <div className="addressText col-12 fadeIn">{text.address2}</div>
              </div>
              <div className="row invitationText-row">
                <div className="col-3 desktop"></div>              
                <div className="invitationText col fadeIn">
                  {/* <img src={backgroundRibbonPink} id="cornRedFlowers" 
                    className="invitationImg hide" alt="logo" /> */}
                  {text.invitation}</div>
                <div className="col-3 desktop"></div>              
              </div>
              <div className="row">
                {/* <div className="descriptionText col">{text.description}</div> */}
              </div>
              <div className="row">
                <div className="dressCodeText col fadeIn">{text.dressCode}</div>
              </div>
            </div>
            <div className="col-0 col-md-1 col-xl-3"></div>
          </section>
          <div className="rsvp-row row">
            <div className="col text-center ">
              <a href="https://goo.gl/aaG2Q6">
                <button className="btn btn-warning btn-lg fadeIn">
                  {text.rsvp}
                </button>
              </a>
            </div>
          </div>
          <footer className="footer-row row">
          </footer>
        </div>

        {/* <Confetti/> */}

      </div>
    );
  }
}

/*
class Confetti extends Component {
  // https://codepen.io/jscottsmith/pen/VjPaLO?editors=0010
  constructor(props) {
    super(props);
    this.state = { 
      DECAY: 4, // confetti decay in seconds
      SPREAD: 60, // degrees to spread from the angle of the cannon
      GRAVITY: 1200
    }
    // this.showModal = this.showModal.bind(this);
  }

  // utilities
  getLength(x0, y0, x1, y1) {
    // returns the length of a line segment
    const x = x1 - x0;
    const y = y1 - y0;
    return Math.sqrt(x * x + y * y);
  }

  getDegAngle(x0, y0, x1, y1) {
    const y = y1 - y0;
    const x = x1 - x0;
    return Math.atan2(y, x) * (180 / Math.PI);
  }

  // some constants
  const DECAY = 4;        
  const SPREAD = 60;      
  const GRAVITY = 1200;

  class ConfettiCannon {
    constructor() {
        // setup a canvas
        this.canvas = document.getElementById('canvas');
        this.dpr = window.devicePixelRatio || 1;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.scale(this.dpr, this.dpr);

        // add confetti here
        this.confettiSpriteIds = [];
        this.confettiSprites = {};
        
        // vector line representing the firing angle
        this.drawVector = false;
        this.vector = [{
            x: window.innerWidth, 
            y: window.innerHeight * 1.25,
        }, {
            x: window.innerWidth, 
            y: window.innerHeight * 2,
        }];
        
        this.pointer = {};
        
        // bind methods
        this.render = this.render.bind(this);
        this.handleMousedown = this.handleMousedown.bind(this);
        this.handleMouseup = this.handleMouseup.bind(this);
        this.handleMousemove = this.handleMousemove.bind(this);
        this.handleTouchstart = this.handleTouchstart.bind(this);
        this.handleTouchmove = this.handleTouchmove.bind(this);
        this.setCanvasSize = this.setCanvasSize.bind(this);
        
        this.setupListeners();
        this.setCanvasSize();
        
        // fire off for a demo
        this.timer = setTimeout(this.handleMouseup, 1000);
    }
    
    setupListeners() {
        // Use TweenLite tick event for the render loop
        TweenLite.ticker.addEventListener('tick', this.render);
        
        // bind events
        window.addEventListener('mousedown', this.handleMousedown);
        window.addEventListener('mouseup', this.handleMouseup);
        window.addEventListener('mousemove', this.handleMousemove);
        window.addEventListener('touchstart', this.handleTouchstart);
        window.addEventListener('touchend', this.handleMouseup);
        window.addEventListener('touchmove', this.handleTouchmove);
        window.addEventListener('resize', this.setCanvasSize);
    }

    setCanvasSize() {
        this.canvas.width = window.innerWidth * this.dpr;
        this.canvas.height = window.innerHeight * this.dpr;
        this.canvas.style.width = window.innerWidth + 'px';
        this.canvas.style.height = window.innerHeight + 'px';
    }
    
    handleMousedown(event) {
        clearTimeout(this.timer);
        const x = event.clientX * this.dpr;
        const y = event.clientY * this.dpr;
        
        this.vector[0] = {
            x,
            y,
        };
        this.drawVector = true;
    }
    
    handleTouchstart(event) {
        clearTimeout(this.timer);
        event.preventDefault();
        const x = event.touches[0].clientX * this.dpr;
        const y = event.touches[0].clientY * this.dpr;
        this.vector[0] = {
            x,
            y,
        };
        
        this.drawVector = true;
    }
    
    handleMouseup(event) {
        this.drawVector = false;
        
        const x0 = this.vector[0].x;
        const y0 = this.vector[0].y;
        const x1 = this.vector[1].x;
        const y1 = this.vector[1].y;
        
        const length = getLength(x0, y0, x1, y1);
        const angle = getDegAngle(x0, y0, x1, y1) + 180;

        const particles = length / 5 + 5;
        const velocity = length * 10;
        this.addConfettiParticles(particles, angle, velocity, x0, y0);
    }
    
    handleMousemove(event) {
        const x = event.clientX * this.dpr;
        const y = event.clientY * this.dpr;   
        this.vector[1] = {
            x,
            y,
        };
        this.pointer = this.vector[1];
    }
    
    handleTouchmove(event) {
        event.preventDefault();
        const x = event.changedTouches[0].clientX * this.dpr;
        const y = event.changedTouches[0].clientY * this.dpr;   
        this.vector[1] = {
            x,
            y,
        };
        this.pointer = this.vector[1];
    }
    
    drawVectorLine() {
        this.ctx.strokeStyle = 'pink';
        this.ctx.lineWidth = 2 * this.dpr;
        
        const x0 = this.vector[0].x;
        const y0 = this.vector[0].y;
        const x1 = this.vector[1].x;
        const y1 = this.vector[1].y;
        
        this.ctx.beginPath();
        this.ctx.moveTo(x0, y0);
        this.ctx.lineTo(x1, y1);
        this.ctx.stroke();
    }

    addConfettiParticles(amount, angle, velocity, x, y) {
        let i = 0;
        while (i < amount) {
            // sprite
            const r = _.random(4, 6) * this.dpr;
            const d = _.random(15, 25) * this.dpr;
            
            const cr = _.random(30, 255);
            const cg = _.random(30, 230);
            const cb = _.random(30, 230);
            const color = `rgb(${cr}, ${cg}, ${cb})`;
            
            const tilt = _.random(10, -10);
            const tiltAngleIncremental = _.random(0.07, 0.05);
            const tiltAngle = 0;

            const id = _.uniqueId();
            const sprite = {
                [id]: {
                    angle,
                    velocity,
                    x,
                    y,
                    r,
                    d,
                    color,
                    tilt,
                    tiltAngleIncremental,
                    tiltAngle,
                },
            };

            Object.assign(this.confettiSprites, sprite);
            this.confettiSpriteIds.push(id);
            this.tweenConfettiParticle(id);
            i++;
        }
    }

    tweenConfettiParticle(id) {
        const minAngle = this.confettiSprites[id].angle - SPREAD / 2;
        const maxAngle = this.confettiSprites[id].angle + SPREAD / 2;
        
        const minVelocity = this.confettiSprites[id].velocity / 4;
        const maxVelocity = this.confettiSprites[id].velocity;

        // Physics Props
        const velocity = _.random(minVelocity, maxVelocity);
        const angle = _.random(minAngle, maxAngle);
        const gravity = GRAVITY;
        const friction = _.random(0.1, 0.25);
        const d = 0;

        TweenLite.to(this.confettiSprites[id], DECAY, {
            physics2D: {
                velocity,
                angle,
                gravity,
                friction,
            },
            d,
            ease: Power4.easeIn,
            onComplete: () => {
                // remove confetti sprite and id
                _.pull(this.confettiSpriteIds, id);
                delete this.confettiSprites[id];
            },
        });
    }

    updateConfettiParticle(id) {
        const sprite = this.confettiSprites[id];
        
        const tiltAngle = 0.0005 * sprite.d;
        
        sprite.angle += 0.01;
        sprite.tiltAngle += tiltAngle;
        sprite.tiltAngle += sprite.tiltAngleIncremental;
        sprite.tilt = (Math.sin(sprite.tiltAngle - (sprite.r / 2))) * sprite.r * 2;
        sprite.y += Math.sin(sprite.angle + sprite.r / 2) * 2;
        sprite.x += Math.cos(sprite.angle) / 2;
    }

    drawConfetti() {
        this.confettiSpriteIds.map(id => {
            const sprite = this.confettiSprites[id];
            
            this.ctx.beginPath();
            this.ctx.lineWidth = sprite.d / 2;
            this.ctx.strokeStyle = sprite.color;
            this.ctx.moveTo(sprite.x + sprite.tilt + sprite.r, sprite.y);
            this.ctx.lineTo(sprite.x + sprite.tilt, sprite.y + sprite.tilt + sprite.r);
            this.ctx.stroke();

            this.updateConfettiParticle(id);
        });
    }
    
    drawPointer() {
        const centerX = this.pointer.x;
        const centerY = this.pointer.y;
        const radius = 15 * this.dpr;

        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = 'transparent';
        this.ctx.fill();
        this.ctx.lineWidth = 2 * this.dpr;
        this.ctx.strokeStyle = '#ffffff';
        this.ctx.stroke();
    }
    
    drawPower() {
        const x0 = this.vector[0].x;
        const y0 = this.vector[0].y;
        const x1 = this.vector[1].x;
        const y1 = this.vector[1].y;
        
        const length = getLength(x0, y0, x1, y1);
        const centerX = x0;
        const centerY = y0;
        const radius = 1 * this.dpr * length / 20;

        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = 'transparent';
        this.ctx.fill();
        this.ctx.lineWidth = 2 * this.dpr;
        this.ctx.strokeStyle = '#333333';
        this.ctx.stroke();
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // only draw the vector when the drawVector flag is on
        this.drawVector && this.drawVectorLine();
        this.drawVector && this.drawPower();
        
        this.drawPointer();
        this.drawConfetti();
    }
  }

  const confetti = new ConfettiCannon();


  render() {
    return (
      <div>
  
      </div>
    );
  }
}
*/
export default App;
