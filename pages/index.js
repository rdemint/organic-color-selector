import Head from 'next/head'
import Link from 'next/link'
import Hero from "@/components/Hero"
import { useState, useEffect } from 'react'
import ColorSelector from './color-selector'


const catchphrases = [
    'The QMS should serve as a framework, not busywork.',
    'The QMS should be a toolkit, not checkbox compliance.',
    'The QMS should be a starter, to avoid reinventing the wheel.'
]


export default function Home() {
    const [current, setCurrent] = useState(0)
    useEffect(
        () => {
            const next = (current + 1) % catchphrases.length;
            const id = setTimeout(() => setCurrent(next), 3000);
            return () => clearTimeout(id);
        }, [current]
    )
  return (
    <div>
      <Head>
        <title>Raines Demint</title>
        <meta name="description" content="Medical device quality management systems" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <main>
              <div className="flex flex-col bg-[url('../public/background_design_o20.svg')] bg-cover bg-center">
                <div className="backdrop-blur-sm">
                        <div className="mx-auto max-w-3xl h-96">
                            <Hero />
                        </div>
                </div>
              </div>
                <ColorSelector />
          </main>
      </div>

    )
}
