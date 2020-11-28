radio.onReceivedValue(function (name, value) {
    if (name == "speed") {
        speed = value
    } else if (name == "A") {
        A = value
    } else if (name == "B") {
        B = value
    } else if (name == "C") {
        C = value
    } else if (name == "speed1") {
        speed1 = value
    }
})
let speed1 = 0
let C = 0
let B = 0
let A = 0
let speed = 0
radio.setGroup(1)
pins.setPull(DigitalPin.P0, PinPullMode.PullDown)
pins.setPull(DigitalPin.P1, PinPullMode.PullDown)
pins.setPull(DigitalPin.P2, PinPullMode.PullDown)
pins.setPull(DigitalPin.P5, PinPullMode.PullDown)
pins.setPull(DigitalPin.P13, PinPullMode.PullDown)
pins.setPull(DigitalPin.P14, PinPullMode.PullDown)
basic.forever(function () {
    if (A == 0 && B == 1) {
        if (speed > 0) {
            pins.analogWritePin(AnalogPin.P0, Math.abs(speed))
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P5, 1)
            pins.analogWritePin(AnalogPin.P2, Math.abs(speed))
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.digitalWritePin(DigitalPin.P14, 0)
        } else if (speed < 0) {
            pins.analogWritePin(AnalogPin.P0, Math.abs(speed))
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P5, 0)
            pins.analogWritePin(AnalogPin.P2, Math.abs(speed))
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.digitalWritePin(DigitalPin.P14, 1)
        }
    } else if (A == 0 && B == 0) {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P5, 0)
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
    if (A == 1 && B == 0) {
        if (speed1 > 0) {
            pins.analogWritePin(AnalogPin.P0, Math.abs(speed))
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P5, 1)
            pins.analogWritePin(AnalogPin.P2, Math.abs(speed) + 100)
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.digitalWritePin(DigitalPin.P14, 0)
        } else if (speed1 < 0) {
            pins.analogWritePin(AnalogPin.P0, Math.abs(speed) + 100)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P5, 1)
            pins.analogWritePin(AnalogPin.P2, Math.abs(speed))
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.digitalWritePin(DigitalPin.P14, 0)
        }
    } else if (A == 0 && B == 0) {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P5, 0)
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else {
    	
    }
})
