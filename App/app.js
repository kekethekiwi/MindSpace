// Copyright (c) 2023 8th Wall, Inc.
//
// app.js is the main entry point for your 8th Wall app. Code here will execute after head.html
// is loaded, and before body.html is loaded.

import './index.css'
import {responsiveImmersiveComponent} from './components/responsive-immersive'

// clickable product link
import {productLinkComponent} from './components.js'
AFRAME.registerComponent('product-link', productLinkComponent)

// audio component
import {tapPlaySound} from './tap-to-play-sound'
AFRAME.registerComponent('tap-play-sound', tapPlaySound)

// portal component
import {
  portalCameraComponent, tapToPlacePortalComponent,
  promptFlowComponent, spinComponent, placePortalComponent,
} from './components/portal-components'

AFRAME.registerComponent('portal-camera', portalCameraComponent)
AFRAME.registerComponent('spin', spinComponent)

AFRAME.registerComponent('prompt-flow', promptFlowComponent)
AFRAME.registerComponent('tap-to-place-portal', placePortalComponent)

AFRAME.registerComponent('responsive-immersive', responsiveImmersiveComponent)

AFRAME.registerComponent('auto-play-video', {
  schema: {
    video: {type: 'string'},
  },
  init() {
    const v = document.querySelector(this.data.video)
    v.play()
  },
})

// animation switcher
AFRAME.registerComponent('changetotalk', {
 init() {
   console.log('init -- talk');
   const handleClick = () => {
      this.el.setAttribute('animation-mixer', 'clip: talk_anim')
   }
   this.el.addEventListener('click', handleClick)
 }
})
