import Link from 'next/link'

export default function Header() {

return(
    <div className="flex items-center justify-between border-b border-accent-100 shadow-inner shadow-slate-200 p-6">
        <Link href="/#">
            <a>
            <img src="/color_designer_logo.svg" className='w-48' />
            </a>

        </Link>
        <section className="flex justify-between">
            <Link href="/about">
                <a className="pl-3 py-1 text-gray-900 hover:text-primary-900 hover:underline underline-offset-8 decoration-accent-900">About</a>
            </Link>
            <Link href="https://organicclimbing.com/">
                <a className='pl-5 py-1 text-gray-900 hover:text-primary-900 hover:underline underline-offset-8 decoration-accent-900'>Shop</a>
            </Link>
        </section>
        </div>
)
}