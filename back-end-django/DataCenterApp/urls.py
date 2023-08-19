from django.urls import re_path

from DataCenterApp import views

urlpatterns = [re_path(r"^rack$", views.rackApi), re_path(r"^device$", views.deviceApi)]
