
import Navbar from '../Components/components/Navbar.jsx';
import '../index.css';
import Footer from '../Components/components/footer.jsx';


export default function Works() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 dark:text-white">
        <Navbar />

      <Footer 
  topButtonText="Дальше Дизайн" 
  topButtonLink="/design"
/>
      
    </div>
  );
}
