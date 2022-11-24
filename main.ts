let état_actuel = 0
let état_passe = 0
servos.P0.setAngle(150)
basic.forever(function () {
    état_actuel = pins.digitalReadPin(DigitalPin.P16)
    if (état_actuel != état_passe) {
        if (état_actuel == 1) {
            servos.P0.setAngle(60)
            basic.pause(2000)
            servos.P0.setAngle(150)
        }
    }
    état_passe = état_actuel
    état_actuel = 0
})
