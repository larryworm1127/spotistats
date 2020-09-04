import os
import uuid

from django.shortcuts import redirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from spotipy import Spotify
from spotipy.oauth2 import SpotifyOAuth

from spotistats.settings import BASE_DIR

caches_folder = f'{BASE_DIR}/.django_session/'


def session_cache_path(session):
    return caches_folder + session.get('uuid')


@api_view(['GET'])
def auth(request):
    if not request.session.get('uuid'):
        request.session['uuid'] = str(uuid.uuid4())

    auth_manager = SpotifyOAuth(
        scope='user-read-currently-playing user-top-read',
        client_secret='4aa24394c2fb45958a4e7d6f3f5eef40',
        redirect_uri='http://127.0.0.1:8000/api/auth',
        cache_path=session_cache_path(request.session),
        show_dialog=True
    )

    if request.GET.get('code'):
        auth_manager.get_access_token(request.GET.get('code'))
        return redirect('index')

    if not auth_manager.get_cached_token():
        auth_url = auth_manager.get_authorize_url()
        return Response({"auth_url": auth_url})

    spotify = Spotify(auth_manager=auth_manager)
    return Response({"name": spotify.me()["display_name"]})


def sign_out(request):
    os.remove(session_cache_path(request.session))
    request.session.clear()
    try:
        # Remove the CACHE file (.cache-test) so that a new user can authorize.
        os.remove(session_cache_path(request.session))
    except OSError as e:
        print("Error: %s - %s." % (e.filename, e.strerror))
    return redirect('index')


@api_view(['GET'])
def playlists(request):
    auth_manager = SpotifyOAuth(cache_path=session_cache_path(request.session))
    if not auth_manager.get_cached_token():
        return redirect('index')

    spotify = Spotify(auth_manager=auth_manager)
    return Response(spotify.current_user_playlists())


@api_view(['GET'])
def top_artists(request):
    auth_manager = SpotifyOAuth(cache_path=session_cache_path(request.session))
    if not auth_manager.get_cached_token():
        return redirect('index')
    spotify = Spotify(auth_manager=auth_manager)
    artist = spotify.current_user_top_artists()
    return Response(artist)


@api_view(['GET'])
def top_tracks(request):
    auth_manager = SpotifyOAuth(cache_path=session_cache_path(request.session))
    if not auth_manager.get_cached_token():
        return redirect('index')
    spotify = Spotify(auth_manager=auth_manager)
    track = spotify.current_user_top_tracks()
    return Response(track)


@api_view(['GET'])
def current_user(request):
    auth_manager = SpotifyOAuth(cache_path=session_cache_path(request.session))
    if not auth_manager.get_cached_token():
        return redirect('index')
    spotify = Spotify(auth_manager=auth_manager)
    return Response(spotify.current_user())
