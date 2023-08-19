from django.db import models


class Racks(models.Model):
    rackId = models.AutoField(primary_key=True)
    availableVerticalUnits = models.IntegerField()

    def __str__(self):
        return f"Rack {self.rackId}"


class Devices(models.Model):
    deviceId = models.AutoField(primary_key=True)
    deviceType = models.CharField(max_length=255)
    modelName = models.CharField(max_length=255)
    numberOfPorts = models.PositiveIntegerField()
    verticalSize = models.PositiveIntegerField()
    rack = models.ForeignKey(Racks, on_delete=models.CASCADE)

    def __str__(self):
        return f"Device {self.deviceId} in Rack {self.rack.rackId}"
