"use client";

import { useState } from "react";
import { SubmitButton } from "@/components/submit-button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import createUser from "../actions/add-user";
import { useActionState } from "react";
import { schema_add_user } from "@/lib/schema";
import useForm from "@/hooks/useForm";

type FormFields = {
  first_name?: string;
  last_name?: string;
  email?: string;
};

const initialState = {
  errors: {
    first_name: undefined,
    last_name: undefined,
    email: undefined,
  },
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

export default function Form() {
  const [, formAction] = useActionState(createUser, initialState);
  const [errors, setErrors] = useState<Partial<FormErrors>>(initialState.errors);
  const { handleChange } = useForm()
  const isError: boolean = !!(errors.email || errors.first_name || errors.last_name);

  return (
    <form action={formAction} id="form-action-form">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Form action example</CardTitle>
          <CardDescription>Here is an end-to-end form example with server actions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <Label htmlFor="first_name">First name</Label>
            <Input type="text" name="first_name" id="first_name" onBlur={(e) => handleChange(e, schema_add_user, setErrors)} onChange={(e) => handleChange(e, schema_add_user, setErrors)} />
            {errors.first_name && <Label className="text-red-600" aria-live="polite">{errors.first_name}</Label>}

            <Label htmlFor="last_name">Last name</Label>
            <Input type="text" name="last_name" id="last_name" onBlur={(e) => handleChange(e, schema_add_user, setErrors)} onChange={(e) => handleChange(e, schema_add_user, setErrors)} />
            {errors.last_name && <Label className="text-red-600" aria-live="polite">{errors.last_name}</Label>}

            <Label htmlFor="email">Email</Label>
            <Input name="email" id="email" onBlur={(e) => handleChange(e, schema_add_user, setErrors)} onChange={(e) => handleChange(e, schema_add_user, setErrors)} />
            {errors.email && <Label className="text-red-600" aria-live="polite">{errors.email}</Label>}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <SubmitButton disabled={isError} form={"form-action-form"} />
        </CardFooter>
      </Card>
    </form>
  );
}