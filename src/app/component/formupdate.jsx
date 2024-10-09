"use client";
import  Update  from "../../actions/actions_update";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function Formupdate(props) {

  // Had function radi tsfet l form l server
  const handleSubmit = async (e) => {
    e.preventDefault(); // tsdd l default action

    // Ts7eb l form data
    const formData = new FormData(e.target);
    
    // Chdi l `id` mn props, u zidu l formData
    await Update(props.user.id, formData);
  };

  return (
    <> 
      <h1 className="text-center my-10 text-2xl">Update user</h1>
      <div className="flex justify-center">
          <form onSubmit={handleSubmit} className="w-1/2 ">
            <div className="grid w-full max-w-full my-5 items-center gap-1.5">
              <Label htmlFor="first_name">first_name</Label>
              <Input type="text" name="first_name" placeholder="First name" defaultValue={props.user.first_name}/>
            </div>
            <div className="grid w-full max-w-full my-5 items-center gap-1.5">
              <Label htmlFor="last_name">last_name</Label>
              <Input type="text" name="last_name" placeholder="Last name" defaultValue={props.user.last_name}/>
            </div>
            <div className="grid w-full max-w-full my-5 items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" name="email" placeholder=" Email" defaultValue={props.user.email}/>
            </div>
            <Button className="w-full">Update user</Button>
          </form>
      </div>
    </>
  );
}
