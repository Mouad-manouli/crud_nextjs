

import  Create  from "../../actions/actions_create";
import React from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

 
export default function Formcreate() {
  return (
    <>
      <h1 className="text-center my-10 text-2xl">Create user</h1>
      <div className="flex justify-center">
          <form action={Create} className="w-1/2 ">
            <div className="grid w-full max-w-full my-5 items-center gap-1.5">
              <Label htmlFor="first_name">first_name</Label>
              <Input type="text" name="first_name" placeholder="First name" />
            </div>
            <div className="grid w-full max-w-full my-5 items-center gap-1.5">
              <Label htmlFor="last_name">last_name</Label>
              <Input type="text" name="last_name" placeholder="Last name" />
            </div>
            <div className="grid w-full max-w-full my-5 items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" name="email" placeholder=" Email" />
            </div>
            <Button className="w-full">Create user</Button>
          </form>
      </div>
    </>
  );
}