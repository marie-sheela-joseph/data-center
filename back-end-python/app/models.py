class Rack:
    def __init__(self, availableVerticalUnits, devices):
        self.availableVerticalUnits = availableVerticalUnits
        self.devices = devices

class Device:
    def __init__(self, deviceType, modelName, numberOfPorts, verticalSize):
        self.deviceType = deviceType
        self.modelName = modelName
        self.numberOfPorts = numberOfPorts
        self.verticalSize = verticalSize
