import React, { ChangeEvent } from 'react'
import Label from 'components/atoms/Label'

export interface InputGroupProps {
  label: string
  name?: string
  type?: string // Add this line
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  required?: boolean
}

const InputGroup: React.FC<InputGroupProps> = ({
  label,
  name,
  type = 'text', // Add this line with default value
  value,
  onChange,
  placeholder,
  required,
}) => {
  const id = name || label.replace(/\s+/g, '-').toLowerCase()
  return (
    <div className="space-y-1.5">
      <Label label={label} htmlFor={id} />
      <input
        id={id}
        name={name}
        type={type} // Add this line
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
      />
    </div>
  )
}

export default InputGroup
