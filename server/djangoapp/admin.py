# from django.contrib import admin
# from .models import related models


# Register your models here.
from django.contrib import admin
from .models import CarMake, CarModel

# CarModelInline class

# CarModelAdmin class

# CarMakeAdmin class with CarModelInline

# Register models here
admin.site.register(CarMake)
admin.site.register(CarModel)
