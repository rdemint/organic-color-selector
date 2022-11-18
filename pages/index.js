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
        <meta name="description" content="Organic climbing bouldering pad color picker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <main>
            <div className='flex flex-col items-center justify-between'>
                <div id="hero" className="shadow-inner items-center flex-col w-full">
                    <h2 className="py-4 text-slate-700 font-lg text-5xl text-center">Envision the
                        <span className="bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 text-transparent"> color</span>
                    </h2>
                    <p className="py-4 text-slate-600 font-md text-base text-center">
                        Organic crash pad color visualizer.
                    </p>
                </div>
                <div className="pt-8">
                    <ColorSelector />
                </div>
            </div>
          </main>
          </div>
    )
}
