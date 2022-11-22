import Image from 'next/image'

export default function About() {
    return (
                <div className="flex justify-center max-w-3xl mx-auto bg-white">
                <div class="prose">
                    <Image src="/crown_jewel20.jpg" height="432px" width="768"/>
                    <div className='px-10'>
                        <h2 className='text-slate-800'>Why this site</h2>
                        <p>When it comes time to shop for a new pad, I go for Organic.  Crash pads are cheaper than injuries, and the foam, comfort, and custom color scheme is worth it. 
                            But I have always struggled to envision color schemes, so I thought it would be cool to put this site together to help myself and others. 
                            I took some of the web development skills I have been building to create this simple site.  I hope you are able to find an inspiring color scheme for your next pad!</p>
                        <h2 className="text-slate-800">About the creator</h2>
                        <p>I have been climbing since about 2012, and am now based in the Tahoe area.  I love bouldering and multi-pitch climbing, so the tall, adventurous boulders blend the best of both worlds.</p>
                        <p>I get psyched that Organic makes products which it easier to tackle the best and tallest boulders.</p>
                        <p>Go send it!</p>
                    </div>
                </div>
                </div>
        
    )
}