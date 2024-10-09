import Link from "next/link.js";
import prisma from "../../../lib/db";
import Formdelete from "../../component/formdelete"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"



export default async function AficherUsers(){

    const users = await prisma.User.findMany()
    console.log(users)

    return(
        <>
            <Button  className="m-10 w-60 bg-neutral-500">
                <Link href="/Users/create-user" >Create user</Link>
            </Button>
            
            <Table className="w-11/12 ml-10">
                <TableHeader>
                    <TableRow>
                        <TableHead >Id user</TableHead>
                        <TableHead>First name</TableHead>
                        <TableHead>Last name</TableHead>
                        <TableHead >Email</TableHead>
                        <TableHead colSpan={3} className="text-center">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user,index) => (
                    <TableRow key={index}>
                        <TableCell >{user.id}</TableCell>
                        <TableCell>{user.first_name}</TableCell>
                        <TableCell>{user.last_name}</TableCell>
                        <TableCell >{user.email}</TableCell>
                        <TableCell >
                            <Button variant={"outline"}>
                                <Link href={`/Users/view/${user.id}`} >view</Link>
                            </Button>
                        </TableCell>
                        <TableCell >
                            <Button className="bg-green-700">
                                <Link href={`/Users/update-user/${user.id}`} >Update</Link>
                            </Button>
                        </TableCell><TableCell >
                            <Formdelete userid={user.id}/>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}