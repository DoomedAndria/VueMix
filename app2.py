api_key = 'AIzaSyCWjReqFeZbbopqMtApZuUzpnz0_D8F9AE'
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
import random
import json

# Set up credentials and build API client
youtube = build('youtube', 'v3', developerKey=api_key)

# Set search parameters
search_params = {
    'q': 'music',
    'type': 'video',
    'part': 'id,snippet',
    'maxResults': 50
}

# Search for videos using the API
try:
    search_response = youtube.search().list(**search_params).execute()
    video_objects = []
    for item in search_response['items']:
        video_id = item['id']['videoId']
        video_url = f'https://www.youtube.com/watch?v={video_id}'
        video_name = item['snippet']['title']
        video_channel = item['snippet']['channelTitle']
        video_thumbnail = item['snippet']['thumbnails']['default']['url']
        video_date = item['snippet']['publishedAt']
        video_object = {
            'url': video_url,
            'name': video_name,
            'channel': video_channel,
            'thumbnail': video_thumbnail,
            'date_uploaded': video_date
        }
        video_objects.append(video_object)

    # Print the list of video objects as JSON
    print(json.dumps(video_objects, indent=4))

except HttpError as e:
    print(f'An error occurred: {e}')

