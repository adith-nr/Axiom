import { useState } from 'react'

const EditableText = () => {
  const [value, setValue] = useState('Click to edit placeholder text')

  return (
    <div className="placeholder-block" contentEditable suppressContentEditableWarning onInput={(e) => setValue(e.currentTarget.textContent ?? '')}>
      {value}
    </div>
  )
}

export default EditableText
