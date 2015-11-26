from django.conf.urls import url, include
# from django.contrib.auth.models import User
#from rest_framework import routers
#from rest_framework import serializers
#from rest_framework import viewsets

from django.conf.urls import patterns #ORIG
from django.contrib import admin #ORIG
admin.autodiscover() #ORIG

# # Serializers define the API representation.
# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = User
#         fields = ('url', 'username', 'email', 'is_staff')

# # ViewSets define the view behavior.
# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

# # Routers provide an easy way of automatically determining the URL conf.
# router = routers.DefaultRouter()
# router.register(r'users', UserViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = (
    # url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

    # Examples:
    # url(r'^$', 'djangoserver.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^current_datetime/', 'testapp.views.current_datetime'),
    url(r'^not_found/', 'testapp.views.not_found_view'),
    url(r'^found/', 'testapp.views.found_view'),
)

# urlpatterns = patterns('',
#     url(r'^articles/2003/$', 'news.views.special_case_2003'),
#     url(r'^articles/(\d{4})/$', 'news.views.year_archive'),
#     url(r'^articles/(\d{4})/(\d{2})/$', 'news.views.month_archive'),
#     url(r'^articles/(\d{4})/(\d{2})/(\d+)/$', 'news.views.article_detail'),
# )