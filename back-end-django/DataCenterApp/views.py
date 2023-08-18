from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from DataCenterApp.models import Racks,Devices
from DataCenterApp.serializers import RackSerializer,DeviceSerializer

@csrf_exempt
def rackApi(request,id=0):
    if request.method=='GET':
        racks=Racks.objects.all()
        racks_serializer=RackSerializer(racks,many=True)
        return JsonResponse(racks_serializer.data,safe=False)
    elif request.method=='POST':
        racks_data=JSONParser().parse(request)
        racks_serializer=RackSerializer(data=racks_data)
        if racks_serializer.is_valid():
            racks_serializer.save()
            return JsonResponse("Rack added succesfully",safe=False)
        return JsonResponse("Failed to add Rack",safe=False)

@csrf_exempt
def deviceApi(request, id=0):
    if request.method == 'POST':
        devices_data = JSONParser().parse(request)
        rack_id = devices_data.get('rack_id') 
        
        try:
            rack = Racks.objects.get(pk=rack_id) 
        except Racks.DoesNotExist:
            return JsonResponse("Invalid Rack ID", safe=False, status=400)
        
        devices_serializer = DeviceSerializer(data=devices_data)
        if devices_serializer.is_valid():
            devices_serializer.save(rack=rack) 
            return JsonResponse("Device added successfully", safe=False)
        return JsonResponse("Failed to add Device", safe=False, status=400)

    elif request.method == 'GET':
        devices = Devices.objects.all()
        devices_serializer = DeviceSerializer(devices, many=True)
        return JsonResponse(devices_serializer.data, safe=False)
