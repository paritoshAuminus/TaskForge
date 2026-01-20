from django.contrib import admin
from .models import IssueComment, ProjectComment

# Register your models here.
admin.site.register(IssueComment)
admin.site.register(ProjectComment)