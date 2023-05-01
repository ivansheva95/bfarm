export const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { ease: 'linear', duration: .5, delay: .3 } }
}

export const motionInLeft = {
  hidden: { translateX: '10%', opacity: 0, },
  visible: { translateX: '0', opacity: 1, transition: { ease: 'linear', duration: .5, delay: .3 } }
}

export const motionInRight = {
  hidden: { translateX: '-10%', opacity: 0, },
  visible: { translateX: '0', opacity: 1, transition: { ease: 'linear', duration: .5, delay: .3 } }
}

export const motionInTop = {
  hidden: { translateY: '10%', opacity: 0, },
  visible: { translateY: '0', opacity: 1, transition: { ease: 'linear', duration: .5, delay: .3 } }
}

export const motionInBottom = {
  hidden: { translateY: '-10%', opacity: 0, },
  visible: { translateY: '0', opacity: 1, transition: { ease: 'linear', duration: .5, delay: .3 } }
}

export const motionInTopFooter = {
  hidden: { translateY: '10%', opacity: 0, },
  visible: { translateY: '0', opacity: 1, transition: { ease: 'linear', duration: .5, delay: .9 } }
}
