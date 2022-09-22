import ReactDOM from 'react-dom/client';

const root=ReactDOM.createRoot(document.getElementById('root'));
const infor=()=>(
  root.render(
    <div>
      <h4>The Browser details: {navigator.userAgent}</h4>
    </div>
  )
)
infor()