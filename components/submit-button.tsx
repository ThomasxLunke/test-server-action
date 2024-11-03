'use client'


import { useFormStatus } from 'react-dom'
import { Button } from './ui/button'

export function SubmitButton(props: {
  form: string
}) {
  const { form } = props

  const { pending } = useFormStatus()


  return (
    <Button disabled={pending} type="submit" variant="default" form={form}>
      {pending ? "Pending" : "Submit"}
    </Button>
  )
}