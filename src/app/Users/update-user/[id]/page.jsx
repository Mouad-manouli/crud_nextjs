import Formupdate from "../../../component/formupdate";
import prisma from "../../../../lib/db";


export  default async function UpdateUser({params}){

    const user = await prisma.User.findUnique({
        where: { id:parseInt(params.id) },
      });

    return(
        <>
            <Formupdate user={user}/>
        </>
    )
}