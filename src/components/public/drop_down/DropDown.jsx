/* eslint-disable react/prop-types */
import { Menu, Transition } from '@headlessui/react'
import { Fragment , useState} from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function DropDown({filter}) {
  const content = Object.values(filter); 
  const [selectedValue, setSelectedValue] = useState(content[0]); 

  const handleItemClick = (value) => {
    setSelectedValue(value); 
  };
  return (
    <Menu dir='rtl' as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button className="inline-flex w-full justify-center rounded-full bg-bgSideButton px-3 py-2 text-sm  text-textMenuColor font-bold hover:bg-bgSideButton border border-textMenuColor focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
       {selectedValue}
        <ChevronDownIcon
          className="mr-20 h-5 w-5 text-textMenuColor font-bold hover:text-violet-200"
          aria-hidden="true"
        />
      </Menu.Button>
    </div>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right  rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
        <div className="px-1 py-1 ">
          {
            content[1].map((content,index)=>{
              return <Menu.Item key={index}>
                {({ active }) => (
              <button
                onClick={()=>handleItemClick(content)}  
                className={`${
                  active ? 'bg-bgButtonColor text-white' : 'text-gray-900'
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >
                
                {content}
              </button>
            )}
              </Menu.Item>
            })
          }
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
  )
}