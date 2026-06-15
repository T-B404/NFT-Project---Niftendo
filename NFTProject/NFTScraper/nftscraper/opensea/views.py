from django.shortcuts import render
from .models import NftCollection

def nft_list(request):
    
       
    nfts = NftCollection.objects.all()
    return render(request, 'nft_list.html', {'nfts': nfts})
   
    
    
