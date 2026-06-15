from django.urls import path
from . import views

urlpatterns = [
    path('', views.nft_list, name='nft-list'),
   
]