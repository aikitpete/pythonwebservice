from django.db import models

from djangotoolbox.fields import ListField

from testapp.forms import StringListField

class CategoryField(ListField):
    
    def formfield(self, **kwargs):
        return models.Field.formfield(self, StringListField, **kwargs)

class Post(models.Model):
    
    title = models.CharField(max_length=200)
    text = models.TextField()
    tags = CategoryField()
    comments = CategoryField()
    
    def __str__(self):              # __unicode__ on Python 2
        return self.title