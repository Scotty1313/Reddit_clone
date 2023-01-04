import Image from "next/image"

export default function Avatar() {

  return (
    <div className="relative h-10 w-10">
        <Image 
            fill
            src={`https://www.svgrepo.com/show/420364/avatar-male-man.svg`} 
            alt="avatar"
        />
    </div>
  )
}
