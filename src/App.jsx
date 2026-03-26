import { Suspense } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import Footer from './Components/Footer/Footer'
import ResultCharts from './Components/ResultCharts/ResultCharts'
import Testimonials from './Components/Testimonials/Testimonials'
import Hero from './Components/Hero/Hero'

const pricingPromise = fetch('PricingData.json').then((res) => res.json())


function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      {/* main section starts here */}
      <main>

        <Suspense fallback={<div className="flex justify-center items-center h-screen">
          <span className="loading loading-ring loading-xl scale-900"></span>
        </div>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        {/* results chart */}

        <ResultCharts></ResultCharts>

        {/* testimonials */}
        <Testimonials></Testimonials>
      </main>
      {/* this is footer */}
      <Footer></Footer>
    </>
  )
}

export default App
