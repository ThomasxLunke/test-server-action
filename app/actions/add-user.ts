"use server"

import { schema_add_user } from "@/lib/schema"

export default async function createUser(prevState:unknown,formData: FormData) {

  const validatedFields = schema_add_user.safeParse({
    first_name: formData.get('first_name'),
    last_name: formData.get('last_name'),
    email: formData.get('email')
  })
  
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }
    else {
      console.log(validatedFields.data)
    }
}
