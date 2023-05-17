import React from 'react'
import sprite from 'assets/svg/_sprite.svg'

type IconType = {
  name: 'create' | 'arrow' | 'click' | 'facebook' | 'linkedin',
  height?: number,
  width?: number
}

export default function Icon({ name, height = 24, width = 24, ...props }: IconType) {
  return (
    <svg height={height} width={width} {...props}>
      <use height='100%' width='100%' href={`${sprite}#${name}`} />
    </svg>
  )
}

Icon.displayName = 'Icon'
