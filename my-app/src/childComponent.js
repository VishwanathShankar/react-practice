class ChildComponent extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        "currentValue": null
      }
    }

    
    render() {
        return (
            <div className="child-component">
                {this.props.value}
                <h1> This is the place {this.state.currentValue}</h1>
                <button onClick={() => this.setState({"currentValue": 100})}>Click Me</button>
            </div>
        );
    }
  }
  