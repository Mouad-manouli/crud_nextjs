
"use server";
import prisma from "../lib/db";
import { redirect } from "next/navigation";

export default  async function Create(formData) {
 
    const first_name = formData.get("first_name")  ;
    const last_name = formData.get("last_name")  ;
    const email = formData.get("email")  ;
   

    await prisma.User.create({
      data: {
        first_name,
        last_name,
        email
      },
    });
    redirect("/Users/Afficher_user");
  }


  