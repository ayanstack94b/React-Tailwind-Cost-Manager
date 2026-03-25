import { Suspense } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import Footer from './Components/Footer/Footer'

const pricingPromise = fetch('PricingData.json').then((res) => res.json())


function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      {/* main section starts here */}
      <main>
        <Suspense fallback={<div className="flex justify-center items-center h-screen">
          <span className="loading loading-ring loading-xl scale-900"></span>
        </div>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
      </main>
      {/* this is footer */}
      <Footer></Footer>
    </>
  )
}

export default App
