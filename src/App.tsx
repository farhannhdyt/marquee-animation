import './App.css'
import MarqueeRow from './components/maruqee-row'

function App() {
  return (
    <>
      <section className='py-16'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-2xl font-bold text-center mb-8'>Our Clients</h2>
          <MarqueeRow reverse={false} />
          <MarqueeRow reverse={true} />
        </div>
      </section>
    </>
  )
}

export default App
