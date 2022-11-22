import Link from 'next/link'
import Image from 'next/image'

export default function Header() {

return(
    <div className="flex items-center justify-between border-b border-accent-100 shadow-inner shadow-slate-200 p-6">
        <Link href="/#">
            <a>
            <img src="/organic_590x.jpg" className='w-36' />
            </a>

        </Link>
        <section className="flex justify-between">
            <Link href="/about">
                <a className="px-3 py-1 text-gray-900 hover:text-primary-900 hover:underline underline-offset-8 decoration-accent-900">About</a>
            </Link>
            <Link href="https://organicclimbing.com/">
                <a className='px-3 py-1 text-gray-900 hover:text-primary-900 hover:underline underline-offset-8 decoration-accent-900'>Shop</a>
            </Link>
        </section>
        </div>
)
}