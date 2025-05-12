let ypattern = 0
function _ (Comment: string) {
    _("Make sure to do these seperately")
    player.runChatCommand("jj1 staging")
    player.runChatCommand("jj2 staging")
    player.runChatCommand("table")
}
player.onChat("build", function () {
    agent.teleport(world(0, 5, 0), SOUTH)
    blocks.fill(
    PLANKS_OAK,
    world(0, 4, 0),
    world(-29, 4, 39),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_OAK,
    world(-5, 4, 0),
    world(-5, 18, 39),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_OAK,
    world(-29, 4, 0),
    world(-29, 18, 39),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_OAK,
    world(-5, 18, 39),
    world(-29, 4, 39),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_OAK,
    world(-5, 4, 0),
    world(-29, 18, 0),
    FillOperation.Replace
    )
    blocks.fill(
    GLASS,
    world(-5, 6, 0),
    world(-29, 7, 39),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(-6, 6, 1),
    world(-28, 7, 38),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(-5, 5, 1),
    world(-5, 6, 1),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_OAK,
    world(-5, 11, 0),
    world(-29, 11, 39),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_OAK,
    world(-5, 18, 0),
    world(-29, 18, 39),
    FillOperation.Replace
    )
    loops.pause(10)
    player.runChatCommand("cabinets 5")
    loops.pause(10)
    player.runChatCommand("cabinets 8")
    loops.pause(10)
    player.runChatCommand("2walls")
    loops.pause(10)
    player.runChatCommand("1walls")
    loops.pause(10)
    player.runChatCommand("master staging")
})
player.onChat("stair", function () {
    ypattern = 11
    for (let index = 0; index < 7; index++) {
        player.runChatCommandWithArguments("stairs ", "" + (ypattern))
        ypattern += -1
    }
})
player.onChat("jj1 staging", function () {
    agent.teleport(world(-8, 12, 17), EAST)
    agent.setSlot(5)
    agent.place(FORWARD)
})
player.onChat("2walls", function () {
    blocks.fill(
    GLASS,
    world(-5, 13, 0),
    world(-29, 14, 39),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(-6, 13, 1),
    world(-28, 14, 38),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_OAK,
    world(-5, 11, 20),
    world(-28, 18, 20),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_OAK,
    world(-5, 11, 29),
    world(-16, 18, 29),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_OAK,
    world(-16, 11, 20),
    world(-16, 18, 39),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_OAK,
    world(-13, 11, 14),
    world(-13, 18, 0),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_OAK,
    world(-22, 11, 20),
    world(-22, 18, 0),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_OAK,
    world(-5, 11, 6),
    world(-13, 18, 6),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_OAK,
    world(-5, 11, 14),
    world(-21, 18, 14),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(-22, 12, 1),
    world(-22, 13, 1),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(-22, 12, 19),
    world(-22, 13, 19),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(-28, 12, 20),
    world(-28, 13, 20),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(-16, 12, 38),
    world(-16, 13, 38),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(-16, 12, 21),
    world(-16, 13, 21),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(-10, 12, 29),
    world(-10, 13, 29),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(-13, 12, 1),
    world(-13, 13, 1),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(-13, 12, 7),
    world(-13, 13, 7),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(-12, 12, 14),
    world(-12, 13, 14),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(-14, 12, 14),
    world(-14, 13, 14),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_OAK,
    world(-29, 12, 26),
    world(-29, 13, 33),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_OAK,
    world(-14, 11, 9),
    world(-21, 18, 9),
    FillOperation.Replace
    )
})
player.onChat("stairs", function (y) {
    agent.teleport(world(-28, y, y + 1), SOUTH)
    agent.setSlot(4)
    for (let index = 0; index < 3; index++) {
        agent.place(FORWARD)
        agent.move(LEFT, 1)
    }
})
player.onChat("jj2 staging", function () {
    agent.teleport(world(-16, 12, 4), EAST)
    agent.setSlot(5)
    agent.place(FORWARD)
})
player.onChat("master staging", function () {
    blocks.fill(
    BROWN_WOOL,
    world(-27, 12, 31),
    world(-25, 12, 28),
    FillOperation.Replace
    )
    blocks.fill(
    WOOL,
    world(-28, 12, 31),
    world(-28, 12, 28),
    FillOperation.Replace
    )
    blocks.fill(
    WHITE_CARPET,
    world(-28, 13, 31),
    world(-28, 13, 28),
    FillOperation.Replace
    )
})
player.onChat("1walls", function () {
    blocks.fill(
    PLANKS_OAK,
    world(-28, 5, 27),
    world(-22, 11, 27),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_OAK,
    world(-28, 5, 14),
    world(-22, 11, 14),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_OAK,
    world(-22, 5, 27),
    world(-22, 11, 14),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(-26, 11, 13),
    world(-28, 11, 7),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(-23, 5, 14),
    world(-23, 6, 14),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_OAK,
    world(-29, 6, 14),
    world(-29, 7, 14),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_OAK,
    world(-29, 6, 27),
    world(-29, 7, 27),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_OAK,
    world(-29, 6, 9),
    world(-29, 7, 8),
    FillOperation.Replace
    )
    blocks.fill(
    GLASS,
    world(-29, 7, 8),
    world(-29, 7, 8),
    FillOperation.Replace
    )
    blocks.fill(
    GLASS,
    world(-29, 6, 9),
    world(-29, 6, 9),
    FillOperation.Replace
    )
})
player.onChat("cabinets", function (height) {
    agent.setSlot(1)
    agent.teleport(world(-8, height, 38), EAST)
    for (let index = 0; index < 10; index++) {
        agent.place(FORWARD)
        agent.move(BACK, 1)
    }
    agent.setSlot(2)
    agent.place(FORWARD)
    agent.teleport(world(-6, height, 33), NORTH)
    agent.setSlot(1)
    for (let index = 0; index < 6; index++) {
        agent.place(FORWARD)
        agent.move(BACK, 1)
    }
    agent.setSlot(2)
    agent.move(UP, 1)
    agent.place(DOWN)
    agent.teleport(world(-6, height, 30), SOUTH)
    agent.place(FORWARD)
    agent.setSlot(1)
})
player.onChat("table", function () {
    blocks.fill(
    OAK_FENCE,
    world(-12, 5, 33),
    world(-13, 5, 34),
    FillOperation.Replace
    )
    blocks.fill(
    SPRUCE_TRAPDOOR,
    world(-16, 6, 35),
    world(-10, 6, 32),
    FillOperation.Replace
    )
    agent.teleport(world(-10, 5, 32), SOUTH)
    agent.setSlot(6)
    for (let index = 0; index < 8; index++) {
        agent.place(FORWARD)
        agent.move(LEFT, 1)
    }
    agent.teleport(world(-16, 5, 32), WEST)
    for (let index = 0; index < 4; index++) {
        agent.place(FORWARD)
        agent.move(LEFT, 1)
    }
})
