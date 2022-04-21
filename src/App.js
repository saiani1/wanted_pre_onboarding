import Tab from './components/Tab';
import Input from './components/Input';
import Toggle from './components/Toggle';
import Slider from './components/Slider';
import Dropdown from './components/Dropdown';

import './App.css';

function App() {
  return (
    <div className="wrap">
      <section>
        <h2>TAB</h2>
        <Tab />
      </section>
      <section>
        <h2>INPUT</h2>
        <Input />
      </section>
      <section>
        <h2>TOGGLE</h2>
        <Toggle />
      </section>
      <section>
        <h2>SLIDER</h2>
        <Slider />
      </section>
      <section>
        <h2>DROPDOWN</h2>
        <Dropdown />
      </section>
    </div>
  )
}

export default App;
