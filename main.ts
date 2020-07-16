input.onButtonPressed(Button.A, function () {
    led.plot(PosX, 0)
    PosX += 1
})
input.onButtonPressed(Button.B, function () {
    led.unplot(PosX, 0)
    PosX += 1
})
let PosX = 0
PosX = 0
basic.forever(function () {
    let X = 0
    led.plot(X, 0)
})
