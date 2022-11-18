import ReactTypingEffect from 'react-typing-effect'

export default function Hero() {
    return (
        <div className="shadow-inner bg-slate-50 items-center w-full md:flex">
        <div
            className="px-8 mx-8">
                <h2 className="py-4 text-slate-700 font-lg text-5xl">Envision the
                <span
                    className="bg-gradient-to-r from-yellow-400 to-rose-500 text-transparent"> color</span></h2>
                <p className="py-4 text-slate-600 font-md text-base">Organic crash pad climbing.</p>
        </div>
        <div className="bg-gradient-to-r from-pink-500 to-slate-500 md:w-2/3">
            <img src="southwest_face_top.jpg"/>
        </div>
    </div>
)
}