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
import { signIn, signOut, useSession } from "next-auth/react"


export default function Header() {
    const { data: session } = useSession()

    return (
        <div className="sticky top-0 z-50 flex bg-white py-2 shadow-sm">
            <div className="relative h-10 w-40 flex-shrink-0 cursor-pointer">
                <Image 
                src="https://i.postimg.cc/qBQSyGs1/Reddit-Logo-wine2-1.png" 
                alt="reddit logo" 
                style= {{objectFit:"contain"}}
                fill />
            </div>

            <div className="mx-2 flex items-center ">
                <HomeIcon className="h-6 w-6"/>
                <p className="ml-1 flex-1">Home</p>
                <ChevronDownIcon className="h-6 w-6 cursor-pointer"/>
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
            <div className="mx-3 hidden items-center space-x-1 text-gray-500
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
            <div className="px-4 flex items-center lg:hidden">
                <MenuIcon className="icon" />
            </div>

            {/* Sign in/out button */}
            { session ? (
                <div onClick={() => signOut()} 
                className="hidden cursor-pointer items-center space-x-1 border
                 border-gray-100 p-2 lg:flex">
                    <div className="relative h-6 w-6 flex-shrink-0">
                        <UserIcon />
                    </div>

                    <div className="flex-1 text-xs">
                        <p className="truncate">{session?.user?.name}</p>
                        <p className="text-gray-400">123 Karma</p>
                    </div>

                    <ChevronDownIcon className="h-6 flex-shrink-0 text-gray-400" />
                </div>
            ) : (
                <div>
                    <div onClick={() => signIn()} 
                    className="hidden cursor-pointer items-center space-x-2 border
                     border-gray-100 p-2 lg:flex">
                        <div className="relative h-5 w-5 flex-shrink-0">
                            <UserIcon />
                        </div>
                    </div>

                    <p className="text-gray-400">Sign In</p>
                </div>
        
            )
            }

            
        </div>
    )
}