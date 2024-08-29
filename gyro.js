class HelloWorld {
    is_running = false;
    Orientation_a = false;
    Orientation_b = false;
    Orientation_g = false;
    Accelerometer_gx = false;
    Accelerometer_gy = false;
    Accelerometer_gz = false;
    Accelerometer_x = false;
    Accelerometer_y = false;
    Accelerometer_z = false;
    Gyroscope_x = false;
    Gyroscope_y = false;
    Gyroscope_z = false;

    getInfo() {
        return {
            id: "Sensors",
            name: "Sensors",
            blocks: [
                {
                    opcode: "Req",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "Start",
                },
                {
                    opcode: "ret_Orientation_a",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "Orientation_a"
                },
                {
                    opcode: "ret_Orientation_b",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "Orientation_b"
                },
                {
                    opcode: "ret_Orientation_g",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "Orientation_g"
                },
                {
                    opcode: "ret_Accelerometer_gx",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "Accelerometer_gx"
                },
                {
                    opcode: "ret_Accelerometer_gy",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "Accelerometer_gy"
                },
                {
                    opcode: "ret_Accelerometer_gz",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "Accelerometer_gz"
                },
                {
                    opcode: "ret_Accelerometer_x",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "Accelerometer_x"
                },
                {
                    opcode: "ret_Accelerometer_y",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "Accelerometer_y"
                },
                {
                    opcode: "ret_Accelerometer_z",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "Accelerometer_z"
                },
                {
                    opcode: "ret_Gyroscope_x",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "Gyroscope_x"
                },
                {
                    opcode: "ret_Gyroscope_y",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "Gyroscope_y"
                },
                {
                    opcode: "ret_Gyroscope_z",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "Gyroscope_z"
                },
            ],
        };
    }

    ret_Orientation_a() {
        return this.Orientation_a
    }

    ret_Orientation_b() {
        return this.Orientation_b
    }

    ret_Orientation_g() {
        return this.Orientation_g
    }


    ret_Accelerometer_gx() {
        return this.Accelerometer_gx
    }

    ret_Accelerometer_gy() {
        return this.Accelerometer_gy
    }

    ret_Accelerometer_gz() {
        return this.Accelerometer_gz
    }

    ret_Accelerometer_x() {
        return this.Accelerometer_x
    }

    ret_Accelerometer_y() {
        return this.Accelerometer_y
    }

    ret_Accelerometer_z() {
        return this.Accelerometer_z
    }

    ret_Gyroscope_z() {
        return this.Gyroscope_z
    }

    ret_Gyroscope_x() {
        return this.Gyroscope_x
    }
    ret_Gyroscope_y() {
        return this.Gyroscope_y
    }

    hello() {
        return "World!";
    }

    handleOrientation(event) {
        this.Orientation_a = event.alpha
        this.Orientation_b = event.beta
        this.Orientation_g = event.gamma
    }


    handleMotion(event) {
        this.Accelerometer_gx = event.accelerationIncludingGravity.x
        this.Accelerometer_gy = event.accelerationIncludingGravity.y
        this.Accelerometer_gz = event.accelerationIncludingGravity.z

        this.Accelerometer_x = event.acceleration.x
        this.Accelerometer_y = event.acceleration.y
        this.Accelerometer_z = event.acceleration.z

        this.Gyroscope_z = event.rotationRate.alpha
        this.Gyroscope_x = event.rotationRate.beta
        this.Gyroscope_y = event.rotationRate.gamma
    }


    Req() {
        if (this.is_running) { }
        else {
            //e.preventDefault();

            // Request permission for iOS 13+ devices
            if (
                DeviceMotionEvent &&
                typeof DeviceMotionEvent.requestPermission === "function"
            ) {
                DeviceMotionEvent.requestPermission();
            }

            window.removeEventListener("devicemotion", this.handleMotion);
            window.removeEventListener("deviceorientation", this.handleOrientation);
            this.is_running = true;
        }

    };
}
Scratch.extensions.register(new HelloWorld());
