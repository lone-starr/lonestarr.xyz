import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <div className="jumbotron">
          <h1>lonestarr.xyz</h1>
          <p>
            Advocate for Bitcoin as a tool for financial sovereignty without
            trusted third parties
          </p>
        </div>
        <div>
          <p>
            <a href="https://github.com/lone-starr" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
          <p>
            <a
              href="https://www.youtube.com/channel/UCddZ_F3MyLB9CHnQFP00Pug"
              target="_blank" rel="noreferrer"
            >
              YouTube channel
            </a>
          </p>
          <p>
            <a href="https://charts.lonestarr.xyz/" target="_blank" rel="noreferrer">
              Bitcoin charts
            </a>
          </p>
          <p>
            data sourced from
            <a href="https://mempool.space/docs/api/rest" target="_blank" rel="noreferrer">
              mempool.space
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
