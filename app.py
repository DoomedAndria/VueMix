import requests
import json

playlist_id = '50qp6OpTNdxwF808MkWSPY' 
access_token = 'BQC1FqiJ4TAemScK_iy2F5o4cELr9N_ZZpejjhD3Waj-P8btOlbors8n-Q8fKP2jufQJBAMCYF__YhlCfQ-GR6zOSgF2x6DnFcQ644ItvffbesiRzW2HhFHtj4ZaHowSlcMBjnbcFddSkW8BclAhHCGf6QcCZ_kq2F5EVZiRZl3wc8_cAEpNzNMANOmxV33MvsDq' # replace with your access token

headers = {'Authorization': 'Bearer ' + access_token}


response = requests.get('https://api.spotify.com/v1/playlists/' + playlist_id, headers=headers)


song_list = []


song_id = 1


for item in response.json()['tracks']['items']:
    song_name = item['track']['name']
    artist_name = item['track']['artists'][0]['name']
    image_url = item['track']['album']['images'][0]['url']
    preview_url = item['track']['preview_url']
    adding_date = item['added_at']
    track_id = item['track']['id']
    track_url = f'https://open.spotify.com/track/{track_id}'
    
 
    song_info = {
        'id': song_id,
        'name': song_name,
        'artist': artist_name,
        'image': image_url,
        'preview': preview_url,
        'date_added': adding_date,
        'url': track_url
    }
    
    
    song_list.append(song_info)
    
    
    song_id += 1


song_json = json.dumps(song_list)


print(song_json)
