import { SerializedError } from '@reduxjs/toolkit'

type RejectedArgs<A> = {
  type: string
  meta: {
    arg: A
  }
  error?: SerializedError
}

export const handleThunkError = <T>({ type, error, meta }: RejectedArgs<T>) => {
  const message = error?.message ?? ''

  // eslint-disable-next-line no-console
  console.log(type, message, { args: meta.arg })
}
