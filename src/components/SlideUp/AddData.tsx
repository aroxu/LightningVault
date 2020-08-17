import React from 'react'
import SlidingUpPanel from 'rn-sliding-up-panel'

type props = {
  ref: any
}

const AddData: React.FC<props> = ({ ref }) => {
  return <SlidingUpPanel ref={ref}></SlidingUpPanel>
}
