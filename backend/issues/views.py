from rest_framework.viewsets import ModelViewSet
from .models import Issue,  Project, Member
from .serializer import IssueSerializer, ProjectSerializer


class ProjectView(ModelViewSet):
    serializer_class = ProjectSerializer

    """
    Users can ONLY see projects where they are a member.
    Non-member projects do not exist for them (404 behavior).
    """
    def get_queryset(self):
        return Project.objects.filter(
            members__user = self.request.user
        )
    
    """
    When a project is created:
    - The creator automatically becomes the OWNER
    - Membership is created implicitly
    """
    def perform_create(self, serializer):
        project = serializer.save()

        Member.objects.create(
            user = self.request.user,
            project = project,
            role = 'OWN'
        )


class IssueView(ModelViewSet):
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer
