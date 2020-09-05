from django.urls import path

from . import views

urlpatterns = [
    path('auth', views.auth, name='auth'),
    path('sign_out', views.sign_out, name='sign_out'),
    path('playlists', views.playlists, name='playlists'),
    path('top_artists/<str:time_range>', views.top_artists, name='top_artists'),
    path('top_tracks/<str:time_range>', views.top_tracks, name='top_tracks'),
    path('current_user', views.current_user, name='current_user')
]
