
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'))
const infor= ()=>{
  root.render(
    <div>   
     <h4>Browser's details: {navigator.userAgent}</h4>
    </div>
  )
}

infor()
 

