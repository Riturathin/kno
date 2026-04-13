import '@/App.css'
import ExpertList from './features/experts/ExpertList';
import { mockExperts } from "./features/experts/mockData";
import Header from './commons/Header/Header';
import Footer from './commons/Footer/Footer';

function App() {

  return (
    <>
      <Header />
      <ExpertList experts={mockExperts} />
      <Footer />
    </>
  )
}

export default App
