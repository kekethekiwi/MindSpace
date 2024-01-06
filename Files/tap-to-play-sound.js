export const tapPlaySound = {
    init() {
      const button = document.getElementById('therapist')
  
      const buttonDown = () => {
        const sound = new window.Howl({
          src: [require('./assets/welcomeaudio.mp4')],
        })
        sound.play()
  
        button.removeEventListener('click', buttonDown)
  
        setTimeout(() => {
          // button.removeAttribute('animation__press')
          button.addEventListener('click', buttonDown)
        }, 250)
      }
  
      button.addEventListener('click', buttonDown)
    },
  }
  