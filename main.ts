info.setScore(0)
info.setLife(3)
let spaceship = sprites.create(img`
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 8 8 8 8 8 8 2 . . . . . . . 
            . . 8 5 8 . . . . . . . . . . . 
            . . 8 5 5 8 . . . . . . . . . . 
            . . 8 5 5 5 8 . . . . . . . . . 
            . . 8 5 5 5 5 8 . . . . . . . . 
            . . 8 5 5 5 5 5 8 . . . . . . . 
            . . 8 8 8 8 8 8 8 8 2 . . . . . 
            . . 8 5 5 5 5 5 8 . . . . . . . 
            . . 8 5 5 5 5 8 . . . . . . . . 
            . . 8 5 5 5 8 . . . . . . . . . 
            . . 8 5 5 8 . . . . . . . . . . 
            . . 8 5 8 . . . . . . . . . . . 
            . . 8 8 8 8 8 8 2 . . . . . . . 
            . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
spaceship.setPosition(10, 60)
controller.moveSprite(spaceship, 200, 200)
spaceship.setFlag(SpriteFlag.StayInScreen, true)
