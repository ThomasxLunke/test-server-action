'use client'


import { useFormStatus } from 'react-dom'
import { Button } from './ui/button'

export function SubmitButton(props: {
  form: string
  disabled: boolean
}) {
  const { form, disabled } = props

  const { pending } = useFormStatus()


  return (
    <Button disabled={pending || disabled} type="submit" variant="default" form={form}>
      {pending ? "Pending" : "Submit"}
    </Button>
  )
}