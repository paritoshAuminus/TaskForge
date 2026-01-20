from rest_framework import serializers
from .models import Issue, Project, Member, FlowDiagram

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class IssueSerializer(serializers.ModelSerializer):
    created_by = serializers.ReadOnlyField(source='created_by.id')
    project = serializers.ReadOnlyField(source='project.id')

    class Meta:
        model = Issue
        fields = '__all__'

class MemberSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'

class FlowSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlowDiagram
        fields = '__all__'
