import './App.scss';
import DonationProgress from './components/DonationProgress/DonationProgress';
import ReservedAmount from './components/ReservedAmount/ReservedAmount';
import DonationMenu from './components/DonationMenu/DonationMenu';



function App() {
  return (
    <div className='app'>
      <DonationMenu progress="100" min="0" max="300"/>
    </div>
  );
}

export default App;
