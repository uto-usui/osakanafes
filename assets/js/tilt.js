import { TweenLite, Power3 } from 'gsap'

/**
 *
 */
class tilt {
  /**
   *
   * @param container {Element} マウスの動かす領域
   * @param targets {Array} 動かす対象
   * @param perspective {Number}
   * @param duration {Number} 動くスピード
   * @param fixer {Number} 傾きの軽減
   */
  constructor(
    container,
    targets,
    perspective = 1800,
    duration = 1,
    fixer = 0.25,
  ) {
    this.container = container
    this.targets = targets
    this.fixer = fixer
    this.perspective = perspective
    this.dutation = duration

    this.addEvent()
    this.leaveEvent()
  }

  mouseMove(event) {
    const pageX = event.clientX - this.container.offsetWidth * 0.5
    const pageY = event.clientY - this.container.offsetHeight * 0.5

    this.targets.forEach(el => {
      const target = el
      const speedX = target.dataset.speedX
      const speedY = target.dataset.speedY
      const tiltx = pageY / (this.container.offsetWidth * 0.5)
      const tilty = (pageX / (this.container.offsetHeight * 0.5)) * -1
      const radius = Math.sqrt(tiltx ** 2 + tilty ** 2)
      const degree = radius * 15

      TweenLite.set(target, {
        transformPerspective: this.perspective,
        //        transformStyle: 'preserve-3d',
        force3D: true,
      })

      TweenLite.to(target, this.dutation, {
        x: (target.offsetLeft + pageX * speedX) * this.fixer,
        y: (target.offsetTop + pageY * speedY) * this.fixer,
        rotationY: -tilty * degree * this.fixer,
        rotationX: -tiltx * degree * this.fixer,
        ease: Power2.easeOut,
      })
    })
  }

  mouseLeave() {
    this.targets.forEach(el => {
      const target = el

      TweenLite.to(target, 1, {
        x: 0,
        y: 0,
        ease: Power3.easeOut,
      })
    })
  }

  addEvent() {
    const event = e => this.mouseMove(e)
    this.container.addEventListener('mousemove', event)
  }

  leaveEvent() {
    const event = e => this.mouseLeave(e)
    this.container.addEventListener('mouseleave', event)
  }
}

export default tilt
