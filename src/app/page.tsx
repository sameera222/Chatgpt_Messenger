import {SunIcon, BoltIcon, ExclamationTriangleIcon} from "@heroicons/react/24/outline";
import React from 'react';

const HomePage = () => {
  return (
    <div className='text-white flex flex-col items-center justify-center h-screen'>
          <h1 className='text-5xl mb-20 font-bold'>ChatGPT</h1>

          <div className='flex space-x-2 text-center'>
            <div>
              <div className='flex flex-col items-center justify-center mb-5'>
                <SunIcon className='h-8 w-8'/>
                <h2>Examples</h2>
                </div>
                <div className='space-y-2'>
                  <p className='infoText'>{`"Explain something to me"`}</p>
                  <p className='infoText'>{`"What is the difference between dog and a cat?"`}</p>
                  <p className='infoText'>{`"What is the color of the sun?"`}</p>
                </div>
            </div>
            <div>
              <div className='flex flex-col items-center justify-center mb-5'>
                <BoltIcon className='h-8 w-8'/>
                <h2>Capabilities</h2>
                </div>
                <div className='space-y-2 '>
                  <p className='infoText'>{`"Change the Chatgpt model to use"`}</p>
                  <p className='infoText'>{`"Messages are stored in firebase's firestore"`}</p>
                  <p className='infoText'>{`"Hot toast notifications when ChatGpt is thinking!"`}</p>
                </div>
            </div>
            <div>
              <div className='flex flex-col items-center justify-center mb-5'>
                <ExclamationTriangleIcon className='h-8 w-8'/>
                <h2>Limitations</h2>
                </div>
                <div className='space-y-2 '>
                  <p className='infoText'>{`"May Occassionally generate incorrect information"`}</p>
                  <p className='infoText'>{`"May occassionally produce harmful instructions or biased content"`}</p>
                  <p className='infoText'>{`"Limited knowledge of world and events after 2021"`}</p>
                </div>
            </div>
          </div>
    </div>
  )
}
export default HomePage;
