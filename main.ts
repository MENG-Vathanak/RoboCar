basic.forever(function () {
    RoboCar.MotorRun(RoboCar.enMotors.M1, 255)
    RoboCar.MotorRun(RoboCar.enMotors.M2, 255)
    RoboCar.MotorRun(RoboCar.enMotors.M3, 255)
    RoboCar.MotorRun(RoboCar.enMotors.M4, 255)
    basic.pause(5000)
    RoboCar.MotorStopAll()
    basic.pause(2000)
    RoboCar.MotorRun(RoboCar.enMotors.M1, -255)
    RoboCar.MotorRun(RoboCar.enMotors.M2, -255)
    RoboCar.MotorRun(RoboCar.enMotors.M3, -255)
    RoboCar.MotorRun(RoboCar.enMotors.M4, -255)
    basic.pause(5000)
    RoboCar.MotorStopAll()
    basic.pause(2000)
})