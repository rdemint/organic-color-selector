import { Listbox, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { Fragment } from "react"
import { useState } from "react"
import { getDarkVariant, getLightVariant} from '@/lib/hsl-color-variants'


function ColorPicker({label, currentColor, selectColorFunction, colors}) {

    return (
        <div className="flex justify-center">
        <div className="mb-5">
            <div className="text-gray-500 px-2">{label}</div>
            <Listbox value={currentColor} onChange={selectColorFunction}>
                <Listbox.Button className="flex items-center bg-zinc-100 rounded pl-3 w-64">
                    <span style={{ backgroundColor: currentColor.value}} className="w-4 h-4 mr-5"></span>
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
        {name: 'Baby Blue', value:'#4877A4', hue: 209, saturation:39, lightness:46},
        {name: 'Black', value:'#000000', hue: 0, saturation:0, lightness:0},
        {name: 'Blaze Orange', value: '#FB5135', hue: 8, saturation:96, lightness:60},
        {name: 'Brick Red', value: '#A4313B', hue: 355, saturation:54, lightness:42},
        {name: 'Brown', value: '#6F4028', hue: 20, saturation:47, lightness:30},
        {name: 'Burgundy', value: '#7D162f', hue: 345, saturation:70, lightness:29},
        {name: 'Charcoal Gray', value: '#666A69', hue: 165, saturation:2, lightness:41},
        {name: 'Dark Tan', value: '#735f49', hue: 31, saturation:22, lightness:37 },
        {name: 'Forest Green', value: '#155934', hue: 147, saturation:62, lightness:22},
        {name: 'Fuscia', value: '#8C1758', hue: 327, saturation:72, lightness:32},
        {name: 'Gold', value: '#f29939', hue: 31, saturation:88, lightness:59},
        {name: 'Grasshopper Green', value: '#1EB66A', hue:150, saturation:72, lightness:42},
        {name: 'Ice Blue', value: '#7FE1E8', hue:184, saturation:70, lightness:70},
        {name: 'Kelly Green', value: '#005F20', hue:140, saturation:100, lightness:19},
        {name: 'Mint Green', value: '#91D399', hue:127, saturation:43, lightness:70},
        {name: 'Navy Blue', value: '#1C2738', hue:216, saturation:33, lightness:16},
        {name: 'Neon Blue', value: '#20ABC7', hue:190, saturation:72, lightness:45},
        {name: 'Neon Green', value: '#53DC42', hue:113, saturation:69, lightness:56},
        {name: 'Neon Pink', value: '#FF438F', hue:336, saturation:100, lightness:63},
        {name: 'Neon Yellow', value: '#D1FF45', hue:75, saturation:100, lightness:64},
        {name: 'Olive Green', value: '#606456', hue:77, saturation:8, lightness:36},
        {name: 'Orange', value: '#F5712E', hue:20, saturation:91, lightness:57},
        {name: 'Peach', value: '#F3AF7F', hue:25, saturation:83, lightness:73},
        {name: 'Plum', value: '#71388C', hue:281, saturation:43, lightness:38},
        {name: 'Purple', value: '#8D4FC1', hue:273, saturation:48, lightness:53},
        {name:'Red', value: '#DD2226', hue:359, saturation:73, lightness:50},
        {name: 'Royal Blue', value: '#4705B4', hue:263, saturation:95, lightness:36},
        {name: 'Rust', value: '#BA5537', hue:14, saturation:54, lightness:47},
        {name: 'Sand Tan', value: '#C6AE7E', hue:40, saturation:39, lightness:64},
        {name: 'Silver', value: '#8A9489', hue:115, saturation:5, lightness:56},
        {name: 'Teal', value:'#22B29C', hue:171, saturation:68, lightness:42},
        {name: 'White', value: '#FFFAFA', hue:0, saturation:100, lightness:99},
        {name: 'Yellow', value: '#DAD536', hue:58, saturation:69, lightness:53}
    ]
let primary = colors.find((el)=> (el.name === "Neon Blue"))
let accent1 = colors.find((el) => (el.name === "Neon Green"))
let accent2 = colors.find((el) => (el.name === "Neon Yellow"))
let accent3 = colors.find((el) => (el.name === "Neon Green"))


const [currentPrimaryColor, selectPrimaryColor] = useState(primary.value)
const [currentAccent1Color, selectAccent1Color] = useState(accent1.value)
const [currentAccent2Color, selectAccent2Color] = useState(accent2.value)
const [currentAccent3Color, selectAccent3Color] = useState(accent3.value)


   return (
            <div className="flex-col justify-center items-center">
                <div className="organic-visualizer pl-12">
                    <div className="relative">
                                <svg width='320px' height='240px' viewBox="0 0 320 240" align="center">
                                    {/* <defs>
                                        <pattern id="texture" width="2" height="2" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                                            <line x1="1" y1="0" x2="1" y2="2" stroke={lightVariant} opacity=".2"/>
                                            <line x1="0" y1="1" x2="2" y2="1" stroke={darkVariant} opacity=".2"/>
                                        </pattern>
                                    </defs> */}
                                    <rect width="100%" height="100%" rx="10px" ry="10px" stroke-linejoin="round" stroke-linecap="round" stroke-width="3px" style={{fill: currentPrimaryColor}}></rect>
                                    {/* <rect width="100%" height="100%" fill="url(#texture)"></rect> */}
                                    <polygon points="0,16 0,48 280,240 308,240" fill={currentAccent1Color} />
                                    <polygon points="0,48 0,96 160,240 280,240" fill={currentAccent2Color} />
                                    <polygon points="0,96 0,112 120,240 200,240" fill={currentAccent3Color} />
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
                    <ColorPicker label="Primary" currentColor={primary} selectColorFunction={selectPrimaryColor} colors={colors}/>
                    <ColorPicker label="Accent1" currentColor={accent1} selectColorFunction={selectAccent1Color} colors={colors}/>
                    <ColorPicker label="Accent2" currentColor={accent2} selectColorFunction={selectAccent2Color} colors={colors}/>
                    <ColorPicker label="Accent3" currentColor={accent3} selectColorFunction={selectAccent3Color} colors={colors}/>
                </div>
                
            </div>
    )
}