import Header from '../components/Header';
import Hero from '../components/Hero';
import Discover from '../components/Discover';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Discover />
      </main>
    </>
  );
};

export default HomePage;