import React from 'react'

type Props = {
    children: JSX.Element,
}

export default function Container({children}: Props) {
  return (
    <div className="max-w-container mx-auto">{children}</div>
  )
}
