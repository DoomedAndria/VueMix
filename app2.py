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
    'maxResults': 40
}


try:
    search_response = youtube.videos().list(**search_params).execute()
    video_objects = []
    for index, item in enumerate(search_response['items']):
        video_id = item['id']
        video_url = f'https://www.youtube.com/watch?v={video_id}'
        video_name = item['snippet']['title']
        video_channel = item['snippet']['channelTitle']
        video_channel_id = item['snippet']['channelId']
        channel_response = youtube.channels().list(part='snippet', id=video_channel_id).execute()
        video_channel_image = channel_response['items'][0]['snippet']['thumbnails']['high']['url']
        video_thumbnail = item['snippet']['thumbnails']['high']['url']
        video_date = item['snippet']['publishedAt']
        video_views = item['statistics']['viewCount']
        video_object = {
            'id': index+1,
            'url': video_url,
            'name': video_name,
            'channel': video_channel,
            'channel_image': video_channel_image,
            'thumbnail': video_thumbnail,
            'date_uploaded': video_date,
            'views': video_views
        }
        video_objects.append(video_object)

    print(json.dumps(video_objects, indent=4))

except HttpError as e:
    print(f'An error occurred: {e}')



