import { Listbox, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { Fragment } from "react"
import { useState } from "react"


function ColorPicker({label, currentColor, selectColorFunction, colors}) {

    return (
        <div className="flex justify-center">
<div className="mb-5">
        <div className="text-gray-500 px-2">{label}</div>
            <Listbox value={currentColor} onChange={selectColorFunction}>
                <Listbox.Button className="flex items-center bg-zinc-100 rounded pl-3 w-64">
                    <span style={{ backgroundColor: currentColor}} className="w-4 h-4 mr-5"></span>
                    <span>{currentColor.name}</span>
                    <div className="grow flex justify-end">
                        <span className="pl-3">
                            <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                        </span>
                    </div>
                    </Listbox.Button>
                <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <Listbox.Options className="absolute h-96 w-96 z-10 bg-white overflow-auto">{colors.map(
                            (color)=> (
                                <Listbox.Option
                                key={color.value}
                                value={color.value}
                                className="border-l border-zinc-300 border-r text-zinc-600 pl-3 hover:bg-zinc-100 py-2"
                                >
                                    <div className="flex">
                                        <div style={{backgroundColor: color.value }}className="w-4 h-4 mr-5"></div>
                                    <p>{color.name}</p>

                                    </div>
                                </Listbox.Option>
                            )
                            )}
                            </Listbox.Options>
                </Transition>
            </Listbox>
        </div>
        </div>
    )
}

export default function ColorSelector(...props) {
    const colors = [
        {name: 'Baby Blue', value: '#4877A4'},
        {name: 'Black', value:'#000000'},
        {name: 'Blaze Orange', value: '#FB5135'},
        {name: 'Brick Red', value: '#A4313B'},
        {name: 'Brown', value: '#6F4028'},
        {name: 'Burgundy', value: '#7D162f'},
        {name: 'Charcoal Gray', value: '#666A69'},
        {name: 'Dark Tan', value: '#735f49' },
        {name: 'Forest Green', value: '#155934'},
        {name: 'Fuscia', value: '#8C1758'},
        {name: 'Gold', value: '#f29939'},
        {name: 'Grasshopper Green', value: '#1EB66A'},
        {name: 'Ice Blue', value: '#1EB66A'},
        {name: 'Kelly Green', value: '#005F20'},
        {name: 'Mint Green', value: '#91D399'},
        {name: 'Navy Blue', value: '#1C2738'},
        {name: 'Neon Blue', value: '#20ABC7'},
        {name: 'Neon Green', value: '#53DC42'},
        {name: 'Neon Pink', value: '#FF438F'},
        {name: 'Neon Yellow', value: '#D1FF45'},
        {name: 'Olive Green', value: '#606456'},
        {name: 'Orange', value: '#F5712E'},
        {name: 'Peach', value: '#F3AF7F'},
        {name: 'Plum', value: '#71388C'},
        {name: 'Purple', value: '#8D4FC1'},
        {name:'Red', value: '#DD2226'},
        {name: 'Royal Blue', value: '#4705B4'},
        {name: 'Rust', value: '#BA5537'},
        {name: 'Sand Tan', value: '#C6AE7E'},
        {name: 'Silver', value: '#8A9489'},
        {name: 'Teal', value:'#22B29C'},
        {name: 'White', value: '#FFFAFA'},
        {name: 'Yellow', value: '#DAD536'}
    ]
const primary = colors.find((el)=> (el.name === "Neon Blue"))
const accent1 = colors.find((el) => (el.name === "Neon Green"))
const accent2 = colors.find((el) => (el.name === "Neon Yellow"))
const accent3 = colors.find((el) => (el.name === "Neon Green"))

   const [currentPrimaryColor, selectPrimaryColor] = useState(primary.value)
   const [currentAccentColor1, selectAccentColor1] = useState(accent1.value)
   const [currentAccentColor2, selectAccentColor2] = useState(accent2.value)
   const [currentAccentColor3, selectAccentColor3] = useState(accent3.value)
    
   return (
            <div className="flex-col justify-center items-center">
                <div className="organic-visualizer pl-12">
                    <div className="relative">
                                <svg width='320px' height='240px' viewBox="0 0 320 240" align="center">
                                    
                                    <defs>
                                        <pattern id="texture" width="2" height="2" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                                            <line x1="1" y1="0" x2="1" y2="2" stroke="#FFFAFA" style={{opacity: .3}}/>
                                            <line x1="0" y1="1" x2="2" y2="1" stroke="#FFFAFA" style={{opacity: .3}}/>
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" rx="10px" ry="10px" stroke-linejoin="round" stroke-linecap="round" stroke-width="3px" style={{fill: currentPrimaryColor}}></rect>
                                    <polygon points="0,16 0,48 280,240 308,240" fill={currentAccentColor1} />
                                    <polygon points="0,48 0,96 160,240 280,240" fill={currentAccentColor2} />
                                    <polygon points="0,96 0,112 120,240 200,240" fill={currentAccentColor3} />
                                    <rect width="100%" height="100%" fill="url(#texture)"></rect>
                                    <rect width="100%" height='100%' opacity=".7" rx="10px" ry="10px" stroke-width="2px" stroke-linejoin="round" stroke-linecap="round" stroke="#5F5F5F" fill="none"></rect>
                                    <line x1="1" x2="1" y1="5" y2="235" stroke="#5F5F5F" stroke-width="1px" style={{opacity: .7}}/>
                                    <line x1="319" x2="319" y1="5" y2="235" stroke="#5F5F5F" stroke-width="1px" style={{opacity: .7}}/>
                                    <line x1="5" x2="315" y1="239" y2="239" stroke="#5F5F5F" stroke-width="1px" style={{opacity: .7}}/>
                                    <line x1="5" x2="315" y1="1" y2="1" stroke="#5F5F5F" stroke-width="1px" style={{opacity: .7}}/>
                                    <polygon points="280,220 300,220 300,228 280,228"  stroke="#333333" stroke-width="1px" fill="yellow" />
                                    <line x1="160" x2="160" y1="0" y2="340" stroke="#FFFAFA" style={{opacity: .3}}/>
                                    
                                </svg>

                    </div>
                    <div className="relative">
                    </div>
                </div>
                <div>
                    <ColorPicker label="Primary" currentColor={currentPrimaryColor} selectColorFunction={selectPrimaryColor} colors={colors}/>
                    <ColorPicker label="Accent1" currentColor={currentAccentColor1} selectColorFunction={selectAccentColor1} colors={colors}/>
                    <ColorPicker label="Accent2" currentColor={currentAccentColor2} selectColorFunction={selectAccentColor2} colors={colors}/>
                    <ColorPicker label="Accent3" currentColor={currentAccentColor3} selectColorFunction={selectAccentColor3} colors={colors}/>
                </div>
                
            </div>
    )
}