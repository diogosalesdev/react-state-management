import React from 'react';

import Toggle from './Toggle';
import {ToggleProvider} from './ContextProvider';

const App = () => {
  return (
    <ToggleProvider>
      <Toggle />
    </ToggleProvider>
  );
};


/* USING CLASS
class Toggle extends Component {
  state = {
    toggle: false
  };

  handleToggle = () => {
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle
      };
    });
  };

  render() {
    return (
      <div>
        <p>The Status is: {this.state.toggle ? "ON" : "OFF"} </p>
        <button onClick={this.handleToggle}>Toggle</button>
      </div>
    );
  }
}
*/

export default App;
