var type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}

PIXI.utils.sayHello(type)

let renderer = PIXI.autoDetectRenderer(256, 256, {antialias: false, transparent: true, resolution: 1})

document.body.appendChild(renderer.view)

// setTimeout(() => {
//   renderer.view.style.position = "absolute"
//   renderer.view.style.display = "block"
//   renderer.autoResize = true
//   renderer.resize(window.innerWidth, window.innerHeight)
// }, 2000)

let stage = new PIXI.Container()

// PIXI.loader
//   .add('images/chick.png')
//   .load(() => {
//     let sprite = new PIXI.Sprite(PIXI.loader.resources['images/chick.png'].texture)
    
//     sprite.position.set(128, 128)
//     sprite.scale.set(.1, .1)
//     sprite.anchor.set(.5, .5)
//     sprite.rotation = 1 * Math.PI

//     stage.addChild(sprite)
//     renderer.render(stage)
//   })

PIXI.loader
  .add('images/tileset.png')
  .load(() => {
    let texture = PIXI.utils.TextureCache['images/tileset.png']
    let rectangle = new PIXI.Rectangle(96, 64, 32, 32)
    texture.frame = rectangle
    let rocket = new PIXI.Sprite(texture)

    rocket.x = 32
    rocket.y = 32

    stage.addChild(rocket)

    renderer.render(stage)

  })
