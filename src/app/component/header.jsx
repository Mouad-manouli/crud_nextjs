import Image from "next/image"
import logo from "../../public/logo.png"
import Link from "next/link"
import { Button } from "@/components/ui/button"



export default function Header(){
    return(
        <>
            <header className="flex justify-between border-b  py-1">
                <Image src={logo} className="w-40 h-16 ml-5"/>
                <Button className="mt-3 mr-8"><Link href="/Users/Afficher_user" >List users</Link></Button>
            </header>
        </>
    )
}