function Spawning (num: number) {
	
}
tiles.setCurrentTilemap(tilemap`level1`)
let Bird = sprites.create(img`
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 b c 5 5 d 4 c . . 
    . b b b b 5 5 5 b f d d 4 4 4 b 
    . b d 5 b 5 5 b c b 4 4 4 4 b . 
    . . b 5 5 b 5 5 5 4 4 4 4 b . . 
    . . b d 5 5 b 5 5 5 5 5 5 b . . 
    . b d b 5 5 5 d 5 5 5 5 5 5 b . 
    b d d c d 5 5 b 5 5 5 5 5 5 b . 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(Bird)
controller.moveSprite(Bird)
let Bug = [
img`
    . . . . . f f f f f . . . . . . 
    . . . . f e e e e e f . . . . . 
    . . . f d d d d d e e f . . . . 
    . . f f f d d f f d e f f . . . 
    . c d d e e d d d d e d d f . . 
    . c c d d d d c d d e d f f f . 
    . c d c c c c d d d e d f b d f 
    . . c d d d d d d e e f f d d f 
    . . . c d d d d e e f f e f f f 
    . . . . f f f e e f e e e f . . 
    . . . . f e e e e e e e f f f . 
    . . . f e e e e e e f f f e f . 
    . . f f e e e e f f f f f e f . 
    . f b d f e e f b b f f f e f . 
    . f d d f e e f d d b f f f f . 
    . f f f f f f f f f f f f f . . 
    `,
img`
    4 4 4 . . 4 4 4 4 4 . . . . . . 
    4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
    b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
    . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
    . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
    b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
    c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
    c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
    c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
    . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
    . . c 4 4 d 4 4 4 4 4 d d 5 d c 
    . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
    . . . . c c b 4 4 4 b b 4 5 4 4 
    . . . . . . c c c c c c b b 4 . 
    `,
img`
    ...................cc...
    ...............cccc63c..
    ..............c633336c..
    ..........cc.c6cc33333c.
    .........b55c6c55c33333c
    .........ff5c6c5ff33333c
    .........ff5c6c5ff6333cc
    .........b553c355c6666cc
    ..........b55355c333333c
    .........cc55555bcc3333c
    ........c5545554b55c33c.
    ........b54b4444bb5cbb..
    ........c455b4b5554c45b.
    ........c555c4c555c4c5c.
    ........c5555c5555c4c5c.
    .........ccccccccc..ccc.
    `,
img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `
]
tiles.setTileAt(tiles.getTileLocation(3, 0), sprites.castle.tilePath5)
tiles.setTileAt(tiles.getTileLocation(4, 0), sprites.castle.tilePath5)
tiles.setTileAt(tiles.getTileLocation(5, 0), sprites.castle.tilePath5)
