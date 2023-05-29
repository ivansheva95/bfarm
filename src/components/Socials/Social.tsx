import React from 'react'
import { Icon } from 'ui'

type SocialProps = {
  href: string
  name: 'create' | 'arrow' | 'click' | 'facebook' | 'linkedin' | 'telegram',
}

export default function Social({ href, name }: SocialProps) {
  return (
    <li className='socials__item'>
      <a target='_blank' href={href} rel="noreferrer" >
        <Icon name={name} height={20} width={20} />
      </a>
    </li>
  )
}
