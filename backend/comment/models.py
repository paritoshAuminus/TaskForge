from django.db import models
from accounts.models import User
from issues.models import Issue, Project

class IssueComment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='issue_comments')
    text = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    issue = models.ForeignKey(Issue, on_delete=models.CASCADE, related_name='comments')

    def __str__(self):
        return f'{self.user} - {self.text} ({self.issue})'

class ProjectComment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='project_comments')
    text = models.CharField(max_length=200)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='comments')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.user} - {self.text} ({self.project})'

