from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from issues.views import IssueView, ProjectView

router = DefaultRouter()
router.register(r'issues', IssueView, basename='issue')
router.register(r'projects', ProjectView, basename='project')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/auth/', include('accounts.urls')),
    path('api/v1/', include(router.urls)),
    path('api/v1/comments/', include('comment.urls')),
]
