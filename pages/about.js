import Image from 'next/image'

export default function About() {
    return (
                <div className="flex justify-center max-w-3xl mx-auto bg-white">
                <div class="prose pt-1">
                    <Image src="/crown_jewel20.jpg" height="432px" width="768" alt="A man rock climbing a large boulder." placeholder="blur"/>
                    <div className='px-10'>
                        <p className="text-gray-500 text-xs">Raines Demint, Crown Jewel (V10) Lake Tahoe</p>
                        <h2 className='text-slate-800'>Why this site</h2>
                        <p>When it comes time to shop for a new pad, I go for Organic.  "Crash pads are cheaper than injuries", I always say.  The foam, build quality, and custom color scheme are worth any extra dollars. </p>
                            <p> But I have always struggled to envision color schemes, so I thought it would be cool to put this site together to help myself and others.</p>
                            <p>I hope you are able to find an inspiring color scheme for your next pad!</p>
                        <h2 className="text-slate-800">About the creator</h2>
                        <p>I have been climbing since 2012, and am now based in the Tahoe area.  I love bouldering and multi-pitch climbing, so naturally the tall and adventurous boulders blend the best of both worlds.</p>
                        <p>I appreciate that Organic makes products which make it easier and safer to tackle the best boulders out there.</p>
                        <p>Go send it!</p>
                    </div>
                </div>
                </div>
        
    )
}