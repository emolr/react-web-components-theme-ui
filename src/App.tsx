/** @jsxImportSource theme-ui */
import logo from './logo.svg';
import './App.css';
import { css, ThemeProvider, useThemeUI } from 'theme-ui';
import { css as createClassName } from '@emotion/css'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "my-web-component": any;
    }
  }
}

class MyWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    (this as any).shadowRoot.innerHTML = `Look at me, i'm a webcomponent`;
  }

  connectedCallback() {
    if (this.hasAttribute('classname')) {
      this.setAttribute('class', this.getAttribute('classname') as string);
      this.removeAttribute('classname')
    }
  }
}

customElements.get('my-web-component') ||
  customElements.define('my-web-component', MyWebComponent);

  const theme = {colors: {text: 'green'}};
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p sx={{color: 'red'}}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          <my-web-component class={createClassName(css({color: 'text'})(theme))} />
        </p>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
