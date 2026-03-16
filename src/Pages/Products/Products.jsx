 import Navbar from "../../Components/ProductComponents/Navbar/Navbar"
 import Productsearch from "../../Components/ProductComponents/Search/Productsearch"
 import Slider from "../../Components/ProductComponents/Slider/Slider"
 import Saralash from "../../Components/ProductComponents/Saralash/Saralash"

const Products = () => {
  return (
    // "transition-colors" ranglar almashayotganda silliq o'tishini ta'minlaydi
    <div className="min-h-screen transition-colors duration-300" 
         style={{ backgroundColor: 'var(--main-bg)', color: 'var(--text-color)' }}>
      
      <Navbar />
      
      <main className="container py-6"> {/* Sizdagi .container klassi ishlatildi */}
        <Productsearch />
        <Slider />
        <Saralash />
      </main>

    </div>
  )
}

export default Products