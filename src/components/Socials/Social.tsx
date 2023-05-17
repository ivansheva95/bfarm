import React from 'react'
import { Icon } from 'ui'

type SocialProps = {
  href: string
  name: 'create' | 'arrow' | 'click' | 'facebook' | 'linkedin',
}

export default function Social({ href, name }: SocialProps) {
  return (
    <li className='socials__item'>
      <a href={href}>
        <Icon name={name} height={20} width={20} />
      </a>
    </li>
  )
}
