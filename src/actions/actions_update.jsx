
"use server";
import prisma from "../lib/db";
import { redirect } from "next/navigation";




   const Update = async (id,formData) => {
    const first_name = formData.get("first_name")  ;
    const last_name = formData.get("last_name")  ;
    const email = formData.get("email")  ;
   

    await prisma.User.update({
      data: {
        first_name:first_name,
        last_name:last_name,
        email:email
      },where: { id : id },
    });
    redirect("/Users/Afficher_user");
  };


  export default Update;