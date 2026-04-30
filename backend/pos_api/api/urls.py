from django.urls import path, include
from api import views
from rest_framework.urlpatterns import format_suffix_patterns
from .views import ( UserProfileListApiView, UserProfileListDetailApiView )


app_name = 'api'
urlpatterns = [
    # Your URL patterns here
    path('api/user_profile', views.UserProfileListApiView.as_view()),
    path('api/user_profile/<int:id>', views.UserProfileListDetailApiView.as_view()),
]