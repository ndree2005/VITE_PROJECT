from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class UserProfile(models.Model):

    class Gender(models.TextChoices):
        MALE = 'male', 'Male'
        FEMALE = 'female', 'Female'
        CUSTOM = 'custom', 'Custom'

    class Country(models.TextChoices):
        ID = 'ID', 'Indonesia'
        US = 'US', 'United States'
        MY = 'MY', 'Malaysia'
        
    # Define the fields for the UserProfile model

    first_name = models.CharField(max_length=20)
    surname = models.CharField(max_length=20)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=15, choices=Gender.choices, default=Gender.CUSTOM)
    country = models.CharField(max_length=15, choices=Country.choices, default=Country.ID)
    phone_number = models.CharField(max_length=15)
    email = models.EmailField(max_length=254, unique=True)
    password = models.CharField(max_length=128, null=True, blank=True)

    # Audit fields

    user_created = models.ForeignKey(User, related_name='created_profiles', blank=True, null=True, on_delete=models.SET_NULL)
    user_update = models.ForeignKey(User, related_name='updated_profiles', blank=True, null=True, on_delete=models.SET_NULL)

    # Timestamp fields

    created_on = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.first_name} {self.surname}"
    


#class Category(models.Model):    
#    name = models.CharField(max_length = 100)    
#    status = models.ForeignKey(UserProfile, related_name = 'status_category', on_delete = models.PROTECT)    
#    user_created = models.ForeignKey(User, related_name='created_profiles', blank=True, null=True, on_delete=models.SET_NULL)
#    user_update = models.ForeignKey(User, related_name='updated_profiles', blank=True, null=True, on_delete=models.SET_NULL)
#    # created_on = models.DateTimeField(blank = True, null = True)
#    # last_modified = models.DateTimeField(blank = True, null = True)
#    created_on = models.DateTimeField(auto_now_add=True)
#    last_modified = models.DateTimeField(auto_now=True)
#
#    def __str__(self):
#        return self.name
