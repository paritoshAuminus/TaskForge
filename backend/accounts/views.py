from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from .serializer import UserSerializer
from .models import User

# [POST] - Register, login & token refresh

# [GET/PATCH] - Get User details & update
class MeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(request):
        pass

    def patch(request):
        pass