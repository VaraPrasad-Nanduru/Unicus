import React, { ChangeEvent } from 'react'
import Label from 'components/atoms/Label'

export interface TextAreaGroupProps {
  label: string
  name?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  required?: boolean
}

const TextAreaGroup: React.FC<TextAreaGroupProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
}) => {
  const id = name || label.replace(/\s+/g, '-').toLowerCase()
  return (
    <div className="space-y-1.5">
      <Label label={label} htmlFor={id} />
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full p-2 border rounded"
      />
    </div>
  )
}

export default TextAreaGroup