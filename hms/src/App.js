import './App.css';
import withErrorBoundary from './withErrorBoundary';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      Hotel Management APP  
    </div>
  );
}

export default withErrorBoundary(App);
