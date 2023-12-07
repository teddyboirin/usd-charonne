import React from 'react'

type Props = {
    children: JSX.Element,
}

export default function Container({children}: Props) {
  return (
    <div className="max-w-[85%] md:max-w-container mx-auto">{children}</div>
  )
}
