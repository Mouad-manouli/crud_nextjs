
"use server";
import prisma from "../lib/db";
import { redirect } from "next/navigation";



   const Delete = async (id) => {
    
      await prisma.User.delete({
        where: { id },
      });
    
      redirect("/Users/Afficher_user");
  };

  export default Delete;  