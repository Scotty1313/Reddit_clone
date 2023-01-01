import Image from "next/image"
import { 
    HomeIcon, 
    ChevronDownIcon, 
    SearchIcon,
    MenuIcon,
} 
    from "@heroicons/react/solid"
import {
    UserIcon,
    BellIcon,
    ChatIcon,
    GlobeIcon,
    PlusIcon,
    SparklesIcon,
    SpeakerphoneIcon,
    VideoCameraIcon,
} from "@heroicons/react/outline"

export default function Header() {
    return (
        <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
            <div className="relative h-10 w-40 flex-shrink-0 cursor-pointer">
                <Image 
                src="https://i.postimg.cc/qBQSyGs1/Reddit-Logo-wine2-1.png" 
                alt="reddit logo" 
                style= {{objectFit:"contain"}}
                fill />
            </div>

            <div className="mx-7 flex items-center xl:min-w-[300px]">
                <HomeIcon className="h-6 w-6"/>
                <p className="ml-2 flex-1 lg:inline">Home</p>
                <ChevronDownIcon className="h-6 w-6"/>
            </div>

            {/* Search box */}
            <form className="flex flex-1 items-center space-x-2 rounded-sm 
            border border-gray-200 bg-gray-100 px-3 py-1">
                <SearchIcon className="h-6 w-6 text-gray-400"/>
                <input 
                className="flex-1 bg-transparent outline-none"
                type="text" 
                placeholder="Search Reddit" />
                <button type="submit" hidden />
            </form>
            
            {/* Menu Items */}
            <div className="mx-5 hidden items-center space-x-2 text-gray-500
            lg:inline-flex">
                <SparklesIcon className="icon" />
                <GlobeIcon className="icon" />
                <VideoCameraIcon className="icon" />
                <hr className="h-10 border border-gray-100"/>
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <PlusIcon className="icon" />
                <SpeakerphoneIcon className="icon" />
            </div>

                        {/* ToDo: Fill in burger menu! */}

            {/* Burger Menu */}
            <div className="ml-5 flex items-center lg:hidden">
                <MenuIcon className="icon" />
            </div>

            {/* Sign in/out button */}
            <div className="hidden cursor-pointer items-center space-x-2 border
            border-gray-100 p-2 lg:flex">
                <div className="relative h-5 w-5 flex-shrink-0">
                    <UserIcon />
                </div>
            </div>
        </div>
    )
}