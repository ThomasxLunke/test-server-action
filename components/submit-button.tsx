'use client'


import { useFormStatus } from 'react-dom'
import { Button } from './ui/button'
import { LoaderIcon } from 'lucide-react'

export function SubmitButton(props: {
  form: string
  disabled?: boolean
}) {
  const { form, disabled = false } = props

  const { pending } = useFormStatus()


  return (
    <Button disabled={pending || disabled} type="submit" variant="default" form={form}>
      {pending ? <LoaderIcon className="animate-spin" />
        : "Submit"}
    </Button>
  )
}