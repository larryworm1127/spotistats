from django.urls import path
from . import views


urlpatterns = [
    path('api/auth', views.auth, name='auth'),
    path('sign_out', views.sign_out, name='sign_out'),
    path('api/playlists', views.playlists, name='playlists'),
    path('api/top_artists', views.top_artists, name='top_artists'),
    path('api/top_tracks', views.top_tracks, name='top_tracks'),
    path('api/current_user', views.current_user, name='current_user')
]
