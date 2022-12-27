import Image from "next/image"

export default function Header() {
    return (
        <div>
            <div className="relative h-20 w-40 flex-shrink-0 cursor-pointer">
                <Image 
                src="https://i.postimg.cc/VNyZscjM/Reddit-Logo-wine.png" 
                alt="reddit logo" 
                style={{objectFit:"contain"}}
                fill />
            </div>
        </div>
    )
}