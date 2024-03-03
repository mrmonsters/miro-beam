import { useHandleItemsCreate } from './hooks/useHandleItemsCreate';

const { VITE_APP_INSTALLATION_LINK = '#' } = import.meta.env;

const App = () => {
  useHandleItemsCreate();

  return (
    <div className="centered">
      <div className="grid">
        <div className="cs1 ce12">
          <h1>Miro Beam</h1>
          <p>
            This tool provides a straightforward way to preview the content of any link pasted onto
            the Miro board. Current supported platform(s):
          </p>
          <ul>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="cs1 ce12">
          <p>
            Install the app from this&nbsp;
            <a
              href={VITE_APP_INSTALLATION_LINK}
              className="link link-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              link
            </a>
            &nbsp;and start pasting your favourite content!
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
