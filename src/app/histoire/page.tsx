import BasicHead from '@/components/BasicHead'
import ImageSide from '@/components/ImageSide'
import React from 'react'

export default function Histoire() {
  return (
    <div>
        <BasicHead title="Histoire et valeurs" image="" />
        {/* <BasicHead image="https://placehold.co/800x300" /> */}
        <ImageSide content="test" title="test" image="https://placehold.co/600"/>
        <ImageSide content="test" title="test" image="https://placehold.co/600" reverse />
    </div>
  )
}
