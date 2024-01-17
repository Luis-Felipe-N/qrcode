import { cn } from '@/lib/utils'
import { forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  prefix?: string
  errors?: FieldError
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const hasError = !!props.errors

    if (props.prefix) {
      return (
        <div className='w-full'>
          <div
            className={cn(
              `transition px-4 h-14 w-full bg-zinc-900 text-zinc-200 rounded-xl focus-within:outline outline-offset-2 outline-2 outline-zinc-100 flex items-center gap-1 ${
                hasError ? 'border-2 border-red-600' : ''
              } `,
              className,
            )}
          >
            <span className="whitespace-nowrap text-zinc-400">
              {props.prefix}
            </span>
            <input
              type={type}
              className="w-full h-full bg-transparent outline-0"
              ref={ref}
              {...props}
            />
          </div>
          {hasError && (
            <p className="text-start mt-2 text-sm text-red-400">
              {props.errors?.message}
            </p>
          )}
        </div>
      )
    }

    return (
      <div className='w-full'>
        <input
          type={type}
          className={cn(
            `transition px-4 h-14 w-full bg-zinc-900 text-zinc-200 rounded-xl focus-within:outline outline-offset-2 outline-2 ${
              hasError ? 'border-2 border-red-600' : ''
            }`,
            className,
          )}
          ref={ref}
          {...props}
        />

        {hasError && (
          <p className="text-start mt-2 text-sm text-red-400">
            {props.errors?.message}
          </p>
        )}
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }