from rest_framework import serializers

from .models import Devices, Racks


class DeviceSerializer(serializers.ModelSerializer):
    rackId = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Devices
        fields = [
            "rackId",
            "deviceId",
            "deviceType",
            "modelName",
            "numberOfPorts",
            "verticalSize",
        ]


class RackSerializer(serializers.ModelSerializer):
    devices = DeviceSerializer(many=True, read_only=True)

    class Meta:
        model = Racks
        fields = ["rackId", "availableVerticalUnits", "devices"]
