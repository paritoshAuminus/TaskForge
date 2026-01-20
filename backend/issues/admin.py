from django.contrib import admin
from .models import Issue, Project, Member, FlowDiagram

# Register your models here.
admin.site.register(Project)
admin.site.register(Issue)
admin.site.register(Member)
admin.site.register(FlowDiagram)