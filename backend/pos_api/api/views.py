from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from pos_app.models import UserProfile
from api.serializers import UserProfileSerializers


class UserProfileListApiView(APIView):

    def get(self, request, *args, **kwargs):
        
        user_profile = UserProfile.objects.all()
        serializers = UserProfileSerializers(user_profile, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)
    
    def post(self, request, *args, **kwargs):

        serializer = UserProfileSerializers(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(
                {
                    'message': 'User profile created successfully',
                    'data': serializer.data
                },
                status=status.HTTP_201_CREATED
            )
        
        return Response(
            {
                'message': 'Failed to create user profile',
                'errors': serializer.errors
            },
            status=status.HTTP_400_BAD_REQUEST
        )

class UserProfileListDetailApiView(APIView):

    def get_object(self, id):
        try:
            return UserProfile.objects.get( id = id )
        except UserProfile.DoesNotExist:
            return None
    
    def get(self, request, id, *args, **kwargs):

        user_profile_instance = self.get_object(id)
        if not user_profile_instance:
            return Response(
                {
                    'status' : status.HTTP_400_BAD_REQUEST,
                    'message' : 'Data does not exists...',
                    'data' : {}
                }, status = status.HTTP_400_BAD_REQUEST
            )
        
        serializers = UserProfileSerializers(user_profile_instance)
        response = {
            'status'  : status.HTTP_400_BAD_REQUEST,
            'message' : 'Data retrieve successfully....',
            'data'    : serializers.data
        }
        return Response(response, status = status.HTTP_200_OK)
    
    def put(self, request, id, *args, **kwargs):

        user_profile_instance = self.get_object(id)
        
        if not user_profile_instance:
            
            return Response(
                {
                    'status' : status.HTTP_400_BAD_REQUEST,
                    'message' : 'Data does not exists...',
                    'data' : {}
                }, status = status.HTTP_400_BAD_REQUEST
            )
        
        serializer = UserProfileSerializers(instance = user_profile_instance, data = request.data, partial = True)
        
        if serializer.is_valid():
            
            serializer.save()
            
            response = {
                'status'  : status.HTTP_200_OK,
                'message' : 'Data update successfully....',
                'data'    : serializer.data
            }
            return Response(response, status = status.HTTP_200_OK)
                
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id, *args, **kwargs):

        user_profile_instance = self.get_object(id)
        
        if not user_profile_instance:
            
            return Response(
                {
                    'status' : status.HTTP_400_BAD_REQUEST,
                    'message' : 'Data does not exists...',
                    'data' : {}
                }, status = status.HTTP_400_BAD_REQUEST
            )
        
        user_profile_instance.delete()
        
        return Response(
            {
                'status' : status.HTTP_204_NO_CONTENT,
                'message' : 'Data delete successfully....',
                'data' : {}
            }, status = status.HTTP_204_NO_CONTENT
        )