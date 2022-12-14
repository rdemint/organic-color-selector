import { Hits } from 'react-instantsearch-hooks-web'
import SearchHit from '@/components/search/SearchHit'
import AlgoliaSearchBox from '@/components/search/AlgoliaSearchBox'
import { useState, useRef, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function SearchModal() {
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)
  const handleSearchClick = () => {
    setOpen(true)
  }
  return (
      <div>
          <button className="bg-slate-100 border border-slate-200 my-4 rounded text-slate-700 p-1 border-gray-200 max-w-xs w-24 md:w-72 text-left" onClick={handleSearchClick}>Search</button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-slate-50 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:max-w-[65%] sm:p-6">
                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-slate-800">
                        Search the docs
                      </Dialog.Title>
                    </div>
                  </div>
                  <div className="spacing-x-4 flex flex-row items-center justify-between">
                    <AlgoliaSearchBox />
                    <button
                      type="button"
                      className="m-2 inline-flex justify-center rounded border bg-white p-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                  <Hits hitComponent={SearchHit} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
          </Transition.Root>
          
    </div>
  )
}
