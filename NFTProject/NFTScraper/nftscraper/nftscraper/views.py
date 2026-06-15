# nftscraper/views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import os
from django.conf import settings

@csrf_exempt
def nft_data_api(request):
    if request.method == 'GET':
        try:
            # Get the path to your JSON file
            json_path=os.path.join(settings.BASE_DIR, 'NFTs.json')

            
            # Read and return the JSON data
            with open(json_path, 'r') as f:
                data = json.load(f)
            unique_data = []
            seen = set()
            for nft in data:
                key = nft.get("name")  # You can also use 'rank' or another unique field
                if key not in seen:
                    seen.add(key)
                    unique_data.append(nft)
                
            return JsonResponse({'success': True, 'data': unique_data})
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)})
    
    return JsonResponse({'success': False, 'error': 'Method not allowed'})