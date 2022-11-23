import Head from 'next/head'
import Link from 'next/link'
import Hero from "@/components/Hero"
import { useState, useEffect } from 'react'
import ColorSelector from './color-selector'



export default function Home() {

  return (
    <div>
      <Head>
        <title>Organic Crash pad color picker</title>
        <meta name="description" content="Bouldering pad color designer" />
      </Head>
          <main>
            <div className='flex flex-col items-center justify-between'>
                <div id="hero" className="shadow-inner items-center flex-col w-full">
                    <h2 className="pt-6 pb-4 text-gray-700 font-md text-5xl text-center">BOULDER IN  
                        <span className="bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 text-transparent"> COLOR</span>
                    </h2>
                    <p className="pb-4 text-gray-400 font-md text-base text-center">
                        a bouldering pad color designer
                    </p>
                </div>
                <div className="pt-8">
                    <ColorSelector />
                </div>
                <div className='max-w-xl mx-auto'>
                  <p className='pt-10 text-gray-400 max-w-2xl text-sm px-10'>Disclaimer: This site is for brainstorming purposes only, to help you visualize different colors together.</p>
                  <p className='pt-5 text-gray-400 max-w-2xl text-sm px-10'>While the colors above are extracted from the Organic Climbing LLC website, they <strong>will not</strong> look exactly like what you receive for a variety of reasons. The pattern of accent colors also <strong>will not</strong> be the same as what you receive.</p>
                  <p className='pt-5 text-gray-400 max-w-2xl text-sm px-10'>Note: This site is not maintained by Organic Climbing LLC.</p>
                  <p className='pt-10 text-center text-gray-400 max-w-2xl px-10'>Have a suggestion?  Contact me on instagram at <a href="https://www.instagram.com/rainesmint/" className='text-sky-600'>@rainesmint</a> or create a <a href="https://github.com/rdemint/organic-color-selector/issues" className='text-sky-600'>Github issue</a></p>
                </div>
            </div>
          </main>
          </div>
    )
}
