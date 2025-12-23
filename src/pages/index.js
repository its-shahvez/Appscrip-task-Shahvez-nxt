import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

// 1. SSR FUNCTION
export async function getServerSideProps() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return { props: { products: data || [] } };
  } catch (error) {
    console.error("API Error:", error);
    return { props: { products: [] } };
  }
}

// 2. MAIN COMPONENT
export default function Home({ products = [] }) {
  const [isFilterVisible, setFilterVisible] = useState(true);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Head>
        <title>Appscrip Store | Premium Collection</title>
        <meta name="description" content="Discover latest fashion trends." />
      </Head>

      <Header />

      <main style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 20px', flex: 1, width: '100%' }}>
        
        {/* Top Filter Bar */}
        <FilterBar 
          isFilterVisible={isFilterVisible} 
          setFilterVisible={setFilterVisible} 
        />

        <div style={{ display: 'flex', gap: '40px', position: 'relative' }}>
          
          {/* Sidebar - Only visible if toggle is ON */}
          {isFilterVisible && <Sidebar />}

          {/* Product Grid Area */}
          <div style={{ flex: 1 }}>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
              gap: '30px', 
              paddingBottom: '50px' 
            }}>
              
              {/* Product Loop with Safety Check */}
              {products && products.length > 0 ? (
                products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '50px' }}>
                  <h2>Loading Products...</h2>
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