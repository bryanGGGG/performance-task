// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`140014000203100e0e0e1003030e100e0e0e03100e0e03040a0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f050a0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0d0b0f0f01010f0f0f0f0f0f0f0f0f010f0f0f0f0d0b0f0f0f01010f0f0f0f0f0f0f0f01010f0f0f0d0b0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0d0b0f0f0f0f0f0f0f010f0f0f0f0f0f0f0f0f0f050b0f0f0f0f0f0f01010f0f0f0f0f0f0f0f0f0f050a0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f050a0f0f0f0f0f0f0f0f0f0f0f0f0f010f0f0f0f050a0f0f0f0f0f0f0f0f010f0f0f01010f0f0f0f0d0b0f0f0f010f0f0f0f01010f0f0f0f0f0f0f0f0d0b0f0f0f01010f0f0f0f0f0f0f0f0f0f0f0f0f0d0b0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f01010f050a0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f010f0f0d0a0f01010f0f0f0f0f01010f0f0f0f0f0f0f0f0d0b0f0f01010f0f0f0f0f0f0f0f0f0f0f0f0f0f0d0b0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f050a0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f05090808080c0c07080808080c0c0807080c0c0806`, img`
....................
....................
....................
...22.........2.....
....22........22....
....................
........2...........
.......22...........
....................
..............2.....
.........2...22.....
....2....22.........
....22..............
................22..
................2...
..22.....22.........
...22...............
....................
....................
....................
`, [myTiles.transparency16,sprites.builtin.forestTiles10,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterNorth1,sprites.dungeon.floorLight4,sprites.dungeon.stairNorth], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
