from django.db import models
from accounts.models import User

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=500, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Member(models.Model):
    ROLE_CHOICE = [
        ('OWN', 'Owner'),
        ('MAN', 'Maintainer'),
        ('CON', 'Contributor'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='memberships')
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='members')
    role = models.CharField(choices=ROLE_CHOICE, max_length=3)

    def __str__(self):
        return f'{self.role} - {self.user} - {self.project}'

class Issue(models.Model):
    STATUS_CHOICE = [
        ('TODO', 'TODO'),
        ('PROG', 'In Progress'),
        ('DONE', 'Done'),
    ]

    PRIORITY_CHOICE = [
        ('LOW', 'Low'),
        ('MED', 'Medium'),
        ('HIGH', 'High'),
    ]

    title = models.CharField(max_length=50)
    description = models.CharField(max_length=200, null=True, blank=True)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='issues')
    created_by = models.ForeignKey(Member, on_delete=models.CASCADE, related_name='created_issues')
    status = models.CharField(choices=STATUS_CHOICE, max_length=4)
    priority = models.CharField(choices=PRIORITY_CHOICE, max_length=4)

    def __str__(self):
        return f'({self.project}) - {self.title} - {self.status} - {self.priority}'
    
class FlowDiagram(models.Model):
    chart_data = models.TextField()
    created_by = models.ForeignKey(Member, on_delete=models.CASCADE, related_name='flow_chart')
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='project_diagram')
