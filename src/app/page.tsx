// import {BeakerIcon} from "@heroicons/react/24/solid"
import React from 'react'

const HomePage = () => {
  return (
    <div className='text-white flex flex-col items-center justify-center h-screen'>
          <h1 className='text-5xl mb-20 font-bold'>ChatGPT</h1>

          <div>
            <div>
              <div className='flex flex-col items-center justify-center mb-5'>
                sum icon
                <h2>Examples</h2>
                </div>
                <div className='space-y-2 '>
                  <p className='infoText'>{`"Explain something to me"`}</p>
                  <p className='infoText'>{`"What is the difference between dog and a cat?"`}</p>
                  <p className='infoText'>{`"What is the color of the sun?"`}</p>
                </div>
            </div>
            
          </div>
    </div>
  )
}
export default HomePage;
