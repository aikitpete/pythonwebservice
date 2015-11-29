from django.contrib import admin
from polls.models import Question, Choice, Product, Line, Column, Table, Samplemodel
# Register your models here.
admin.site.register(Question)
admin.site.register(Choice)
admin.site.register(Product)
admin.site.register(Line)
admin.site.register(Column)
admin.site.register(Table)
admin.site.register(Samplemodel)