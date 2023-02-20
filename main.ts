namespace SpriteKind {
    export const Decoration = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`swim left`,
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`swim right`,
    200,
    true
    )
})
info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 200)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 200)
    info.changeScoreBy(-1)
    animation.runImageAnimation(
    mySprite,
    assets.animation`shooting shark`,
    200,
    false
    )
})
let myfood: Sprite = null
let myenemy: Sprite = null
let mydecor: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(8)
scene.setBackgroundImage(assets.image`ocean1`)
mySprite = sprites.create(assets.image`shark`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
for (let index = 0; index < 10; index++) {
    mydecor = sprites.create(assets.image`decoration`, SpriteKind.Decoration)
    mydecor.setPosition(randint(0, 160), 96)
}
animation.runImageAnimation(
mySprite,
assets.animation`swim right`,
200,
true
)
game.onUpdateInterval(2300, function () {
    myenemy = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
    myenemy.setPosition(scene.screenWidth(), randint(5, 115))
    myenemy.vx = -75
    animation.runImageAnimation(
    myenemy,
    assets.animation`animated enemy`,
    50,
    true
    )
})
game.onUpdateInterval(2100, function () {
    myfood = sprites.create(assets.image`food`, SpriteKind.Food)
    myfood.setPosition(scene.screenWidth(), randint(5, 115))
    myfood.vx = -75
    animation.runImageAnimation(
    myfood,
    assets.animation`animated food`,
    200,
    true
    )
})
