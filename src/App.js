
import './App.css';
import './style/style.css';
function App() {
  return (
    <div className="container" >
      <div className="newsletter">
        <div className="background-img" >

        </div>
        <div className="content">
          <h1>Stay updated</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <div className="list">
            <div className="img" />
            <p>Product discovery and building what matters</p>
          </div>
          <div className="list">
            <div className="img" />
            <p>Measuring to ensure updates are a success</p>
          </div>
          <div className="list">
            <div className="img" />
            <p>And much more!</p>
          </div>
          <p className="email">Email address</p>
          <input placeholder="email@company.com" />
          <button value="Subscribe to monthly newsletter" />
        </div>
       </div> 
    </div>
  );
}

export default App;
