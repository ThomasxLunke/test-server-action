"use client"

import { SubmitButton } from "@/components/submit-button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import createUser from "../actions/add-user";
import { useActionState } from "react";

const initialState = {
  errors: {
    first_name: undefined,
    last_name: undefined,
    email: undefined,
  },
}

export default function Form() {

  const [state, formAction] = useActionState(createUser, initialState)


  return (
    <form action={formAction} id="form-action-form">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Form action example</CardTitle>
          <CardDescription>Here is a end to end form example with server actions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <Label htmlFor="first_name">First name</Label>
            <Input type="text" name="first_name" id="first_name" />

            <Label htmlFor="last_name">Last name</Label>
            <Input type="text" name="last_name" id="last_name" />

            <Label htmlFor="email">Email</Label>
            <Input name="email" id="email" />
            <div className="text-red-600 flex flex-col gap-1">
              {state?.errors.email && <Label aria-live="polite">Email : {state?.errors.email}</Label>}
              {state?.errors.first_name && <Label aria-live="polite">First name : {state?.errors.first_name}</Label>}
              {state?.errors.last_name && <Label aria-live="polite">Last name : {state?.errors.last_name}</Label>}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <SubmitButton form={"form-action-form"} />
        </CardFooter>
      </Card>
    </form>
  );
}