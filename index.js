//By creating the Clock component as a class, we get access to a powerful tool called state
//State allows the component to update itself. Therefore the Clock component can
//update itself while rest of the page stays unchanged.
class Clock extends React.Component{

  //This gets called the first
  constructor(props){
    super(props);
    //states are like props except they are private and only visible to the component
    this.state = {date: new Date(),
                  stateofmind: "confused"
                  };
  }


  //The function tick() changes the states of the component.
  //It updates the date to match the current time and assigns a random value to the current stateofmind
  tick(){
    var random = Math.floor(Math.random()*3);
    var mind;
    if (random === 1) mind = "Confused";
    else if (random === 2) mind = "Happy"
    else mind = "Angry"
    this.setState({
      date: new Date(),
      stateofmind: mind
    });
  }

//componentDidMount and componentWillUnmount are "lifecycle methods"
//They get called automatically every time specific thing happens.
//For example, componentDidMount is fired off when the component is rendered the first time.
//More info: https://reactjs.org/docs/react-component.html
  componentDidMount() {
    this.timerID = setInterval( //The method adds a new timer that calls the function tick() every second
      () => this.tick(),
      1000
    );
  }
  //This gets called when we want to remove the component from the DOM. It removes the timer from the component
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

//render() method is required from a React.Component class
//It returns, in this case, React elements (written in JSX)
  render(){
    return (
      <div>
        <h3>It is {this.state.date.toLocaleTimeString()}</h3>
        <h3>State of mind is {this.state.stateofmind}</h3>
        <p>{this.state.stateofmind} {this.props.message}</p>
      </div>

    );
  }
}

//Reused code from our previous task transformed into a Component.
function Survey(props){
  return(
    <div>
    <div class="navbar">
        <a href="#Q1">Question 1</a>
        <a href="#Q2">Question 2</a>
        <a href="#Q3">Question 3</a>
        <a href="#Q4">Question 4</a>
        <a href="#Q5">Question 5</a>

    </div>

    <div class="welcome">
      <h1>Hello, {props.name} and welcome to our survey!</h1>
      <p>We are looking forward to getting your answers so we can make sure our products and services are the best they can be! 
      </p>
    </div>

    <div class="question">
      <h4 id = "Q1</input>">Question 1</h4>
      <h5>I like participating in physical activity such as running, swimming, or biking.</h5>


    <form action="">
      <input type="radio" name="opinion" value="agree"/> Agree<br />
      <input type="radio" name="opinion" value="neutral"/> Neutral<br />
      <input type="radio" name="opinion" value="disagree"/> Disagree
    </form>
    </div>

    <div class="question">
      <h4 id ="Q2">Question 2</h4>
      <h5>I try to keep up to date with the latest fashion in active wear.</h5>

    <form action="">
      <input type="radio" name="opinion" value="agree"/> Agree<br />
      <input type="radio" name="opinion" value="neutral"/> Neutral<br />
      <input type="radio" name="opinion" value="disagree"/> Disagree
    </form>
    </div>

    <div class="question">
      <h4 id ="Q3">Question 3</h4>
      <h5>I purchase clothing online regularly.</h5>

    <form action="">
      <input type="radio" name="opinion" value="agree"/> Agree<br />
      <input type="radio" name="opinion" value="neutral"/> Neutral<br />
      <input type="radio" name="opinion" value="disagree"/> Disagree
    </form>
    </div>

    <button id="submit">Submit</button>

    </div>
  );
}


//The App component in this case decides what will be rendered to the page.
//We want a clock that updates itself every second and a Survey component that will be unaffected by this
function App(){
  return(
    <div>
      <Clock message="Hello"/>
      <Survey name = "John"/>
    </div>
  );
}


//ReactDOM always requires two types of information: what to render and where to render.
//In this case we render whatever the App component returns and render it in the root element of the HTML page.
ReactDOM.render(<App/>, document.getElementById('root'));


