from rest_framework import serializers
from pos_app.models import UserProfile
from django.contrib.auth.hashers import make_password

#from django.contrib.auth import authenticate
#from rest_framework.validators import UniqueValidator
#from django.contrib.auth.password_validation import validate_password

class UserProfileSerializers(serializers.ModelSerializer):    
    class Meta:
        model = UserProfile
        fields = (
            'id', 
            'first_name', 
            'surname', 
            'date_of_birth', 
            'gender', 
            'country',
            'phone_number',
            'email',
            'password',
            'created_on',
            'last_modified',
        )
        read_only_fields = ('id', 'user_created', 'user_update', 'created_on', 'last_modified')
        extra_kwargs = {
            'password': {'write_only': True},
        }
    
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = super().create(validated_data)
        if password:
            instance.password = make_password(password)
            instance.save()
        return instance
    
    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        instance = super().update(instance, validated_data)
        if password:
            instance.password = make_password(password)
            instance.save()
        return instance