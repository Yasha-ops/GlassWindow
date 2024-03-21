import { Github } from 'lucide-react'
import React from 'react'

const Popup = () => {
    function handleClick() {
        chrome.runtime.sendMessage({ command: 'service_remove_popup' })
    }

    return (
        <div className="inline-flex flex-col gap-5 justify-between p-8 w-80 bg-white rounded-xl border shadow">
            <div className="inline-flex flex-col gap-2 justify-start items-start">
                <div className="text-xl font-semibold leading-none text-[#01a04e]">GlassWindow</div>

                <div className="text-sm opacity-40 text-[#005e2e] font-bold">
                    Removes that nasty popup from glassdoor.
                </div>
            </div>

            <div className="flex gap-2 w-full">
                <button
                    className={`flex flex-auto justify-center items-center px-8 py-2 w-full text-sm font-bold leading-tight text-center rounded-md min-w-fit text-white bg-[#01a04e]/70 hover:bg-[#01a04e] `}
                    onClick={() => handleClick()}
                >
                    Remove now !
                </button>

                <a
                    className="flex justify-center items-center px-8 py-2 w-full text-sm font-bold leading-tight text-center rounded-md min-w-fit bg-zinc-800 text-neutral-50 hover:bg-zinc-700"
                    href="#"
                >
                    <Github size={20} />
                </a>
            </div>
        </div>
    )
}

export default Popup
