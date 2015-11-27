from django.conf.urls import patterns, include, url
from django.contrib import admin
from polls import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'questions', views.QuestionViewSet)
router.register(r'choices', views.ChoiceViewSet)
router.register(r'products', views.ProductViewSet)
router.register(r'simples', views.SimpleViewSet)
router.register(r'columns', views.ColumnViewSet)
router.register(r'sampledata', views.SampledataViewSet)

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'mysite.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    
    url(r'^', include(router.urls)),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^polls/', include('polls.urls')),

)
