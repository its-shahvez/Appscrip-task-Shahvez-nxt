import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

// 1. SSR FUNCTION (Server Side)
export async function getServerSideProps() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return { props: { initialProducts: data || [] } };
  } catch (error) {
    console.error("SSR Error:", error);
    return { props: { initialProducts: [] } };
  }
}

// 2. MAIN COMPONENT
export default function Home({ initialProducts = [] }) {
  const [products, setProducts] = useState(initialProducts);
  const [isFilterVisible, setFilterVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // PLAN B: Agar SSR fail ho gaya aur list khali hai, to Browser se fetch karo
  useEffect(() => {
    if (products.length === 0) {
      setIsLoading(true);
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Client Fetch Error:", err);
          setIsLoading(false);
        });
    }
  }, []);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Head>
        <title>Appscrip Store | Premium Collection</title>
        <meta name="description" content="Discover latest fashion trends." />
      </Head>

      <Header />

      <main style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 20px', flex: 1, width: '100%' }}>
        
        <FilterBar 
          isFilterVisible={isFilterVisible} 
          setFilterVisible={setFilterVisible} 
        />

        <div style={{ display: 'flex', gap: '40px', position: 'relative' }}>
          
          {isFilterVisible && <Sidebar />}

          <div style={{ flex: 1 }}>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
              gap: '30px', 
              paddingBottom: '50px' 
            }}>
              
              {/* Agar products hain to dikhao, nahi to loading */}
              {products.length > 0 ? (
                products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '50px' }}>
                  <h2>{isLoading ? 'Loading Products...' : 'No Products Found'}</h2>
                  <p>Fetching latest collection...</p>
                </div>
              )}

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}