
import prisma from "../../../../lib/db";

export default async function Viewuser({params}){
    const user = await prisma.User.findUnique({
        where: { id:parseInt(params.id) }
    })

    return(
        <>
            <p>{user.id}</p>
            <p>{user.first_name}</p>
            <p>{user.last_name}</p>
            <p>{user.email}</p>
        </>
    )
}