
import ReactDOM from 'react-dom/client';
import './index.css';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
const tick = ()=>{
  root.render(
    <div>
      <h1>Hello,world</h1>
      <h2>it is {new Date().toLocaleTimeString()}</h2>
    </div>
  )
}
setInterval(tick,1000)





