OLED.init(128, 64)
tinkercademy.crashSensorSetup(DigitalPin.P1)
while (!(tinkercademy.crashSensor())) {
    OLED.writeStringNewLine("Astept obiectul...")
    basic.pause(1000)
}
OLED.writeStringNewLine("Obiectul a fost asezat.")
basic.pause(500)
OLED.clear()
basic.forever(function () {
    if (tinkercademy.crashSensor()) {
        OLED.writeStringNewLine("Obiect in siguranta!")
        basic.pause(500)
        OLED.clear()
    } else {
        for (let index = 0; index < 6; index++) {
            OLED.writeStringNewLine("Obiect furat!")
            music.playTone(262, music.beat(BeatFraction.Whole))
            tinkercademy.LED(DigitalPin.P2, OnOff.On)
            basic.pause(300)
            tinkercademy.LED(DigitalPin.P2, OnOff.Off)
            basic.pause(300)
        }
    }
})
