api_key = 'AIzaSyCWjReqFeZbbopqMtApZuUzpnz0_D8F9AE'

from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
import random
import json


youtube = build('youtube', 'v3', developerKey=api_key)


search_params = {
    'chart': 'mostPopular',
    'regionCode': 'US',
    'part': 'snippet,statistics',
    'maxResults': 50
}


try:
    search_response = youtube.videos().list(**search_params).execute()
    video_objects = []
    for item in search_response['items']:
        video_id = item['id']
        video_url = f'https://www.youtube.com/watch?v={video_id}'
        video_name = item['snippet']['title']
        video_channel = item['snippet']['channelTitle']
        video_thumbnail = item['snippet']['thumbnails']['high']['url']
        video_date = item['snippet']['publishedAt']
        video_views = item['statistics']['viewCount']
        video_object = {
            'url': video_url,
            'name': video_name,
            'channel': video_channel,
            'thumbnail': video_thumbnail,
            'date_uploaded': video_date,
            'views': video_views
        }
        video_objects.append(video_object)

    print(json.dumps(video_objects, indent=4))

except HttpError as e:
    print(f'An error occurred: {e}')


