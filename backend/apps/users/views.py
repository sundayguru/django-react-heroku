from rest_framework import viewsets
from django.contrib.auth import get_user_model

from .serializers import UserSerializer

User = get_user_model()


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    search_fields = ('first_name', 'last_name', 'email')
    filter_fields = ('id', 'first_name', 'last_name', 'email')
