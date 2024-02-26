// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1400140001010101010202010101010101010101010101010101010101010202010101010201010102020101010101010101020201010101020101010102010101010101010101020201010202010101010201010101020101010101010101020101010101020101010102020101010101010102010101010102020101010102020101010101010101010101010101020101010202010101010101010201010101010101010101010201010101010101020101010102010101010101020201010101020201010101010202010101010101010101010202020201010101020201010101010101010101010101020101010101020101010101010101010101010102010101010102010201010102020101010101010101010101010101010202020101010101010101010101010101010101010101010101020101010101010102010102020101010101010102020101010101020201010201010101020201010102020101010102020101010101010102020201010101010101010101020201010101010102020101010101010101020101010101`, img`
.....22.............
......22....2...22..
......22....2....2..
.......22..22....2..
..2........2.....2..
..22.......2.....22.
...22..............2
...22.......2.......
....2.......2....2..
....22....22.....22.
.........2222....22.
............2.....2.
............2.....2.
2...22..............
.222................
.......2.......2..22
.......22.....22..2.
...22...22....22....
...222..........22..
....22..............
`, [myTiles.transparency16,sprites.dungeon.floorLight2,sprites.dungeon.floorDark0], TileScale.Sixteen);
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
