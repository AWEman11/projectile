info.set_score(0)
info.set_life(3)
spaceship = sprites.create(img("""
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
    """),
    SpriteKind.player)
spaceship.set_position(10, 60)
controller.move_sprite(spaceship,200,200)
spaceship.set_flag(SpriteFlag.StayInScreen, True)