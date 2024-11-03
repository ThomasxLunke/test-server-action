"use server"

import { z } from "zod"


const schema = z.object({
  first_name:  z.string().min(15,"Min lenght = 15"),
  last_name: z.string(),
  email: z.string().email(),
})

export default async function createUser(prevState:unknown,formData: FormData) {

  const validatedFields = schema.safeParse({
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
