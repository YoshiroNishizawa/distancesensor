basic.showIcon(IconNames.Pitchfork)
basic.forever(function () {
    serial.writeValue("x", pins.analogReadPin(AnalogPin.P2))
})
