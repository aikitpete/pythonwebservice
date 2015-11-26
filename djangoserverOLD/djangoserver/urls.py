"""djangoserver URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url # OLD AND NEW

from rest_framework import routers
from testapp import views as TestappViews
from snippets import views as SnippetsViews
from django.contrib import admin # OLD
from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from django.conf.urls import include
from snippets.models import Snippet
from snippets.serializers import SnippetSerializer5
from rest_framework import mixins
from rest_framework import generics

router = routers.DefaultRouter()
router.register(r'users', TestappViews.UserViewSet)
router.register(r'groups', TestappViews.GroupViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    # url(r'^', include(router.urls)),
    # url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^admin/', include(admin.site.urls)), # OLD
    # url(r'^', include('snippets.urls')),
    url(r'^snippets/$', SnippetsViews.snippet_list),
    url(r'^snippets/(?P<pk>[0-9]+)/$', SnippetsViews.snippet_detail),
    url(r'^snippets3/$', SnippetsViews.SnippetList.as_view()),
    url(r'^snippets3/(?P<pk>[0-9]+)/$', SnippetsViews.SnippetDetail.as_view()),
    url(r'^users/$', SnippetsViews.UserList.as_view()),
    url(r'^users/(?P<pk>[0-9]+)/$', SnippetsViews.UserDetail.as_view()),
    url(r'^$', SnippetsViews.api_root),
    url(r'^snippets5/(?P<pk>[0-9]+)/highlight/$', SnippetsViews.SnippetHighlight.as_view()),
]

#urlpatterns = format_suffix_patterns(urlpatterns)

class SnippetList(mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  generics.GenericAPIView):
    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer5

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
        
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
        
class SnippetDetail(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin,
                    generics.GenericAPIView):
    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer5

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

class SnippetList(generics.ListCreateAPIView):
    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer5


class SnippetDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer5
    


# API endpoints
urlpatterns += format_suffix_patterns([
    url(r'^$', SnippetsViews.api_root),
    url(r'^snippets5/$',
        SnippetsViews.SnippetList.as_view(),
        name='snippet-list'),
    url(r'^snippets5/(?P<pk>[0-9]+)/$',
        SnippetsViews.SnippetDetail.as_view(),
        name='snippet-detail'),
    url(r'^snippets5/(?P<pk>[0-9]+)/highlight/$',
        SnippetsViews.SnippetHighlight.as_view(),
        name='snippet-highlight'),
    url(r'^users5/$',
        SnippetsViews.UserList.as_view(),
        name='user-list5'),
    url(r'^users5/(?P<pk>[0-9]+)/$',
        SnippetsViews.UserDetail.as_view(),
        name='user-detail')
])

# Login and logout views for the browsable API
urlpatterns += [
    url(r'^api-auth/', include('rest_framework.urls',
                               namespace='rest_framework')),
]