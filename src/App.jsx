import { Suspense } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions/PricingOptions'

const pricingPromise = fetch('PricingData.json').then((res) => res.json())


function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      {/* main section starts here */}
      <main>
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
      </main>
    </>
  )
}

export default App
