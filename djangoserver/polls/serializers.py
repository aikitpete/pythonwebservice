from rest_framework import serializers
from polls.models import Question, Choice, Product, Samplemodel
from django.contrib.auth.models import User
from rest_framework.renderers import JSONRenderer

class QuestionSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Question
        fields = ('question_text', 'pub_date', 'slug')
                  
class ChoiceSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Choice
        fields = ('question', 'choice_text', 'votes')
        
# class ProductSerializer(serializers.ModelSerializer):

#     class Meta:
#         data = Product.objects.all()
#         model = Product
#         fields = ('SOrg','Cty','Soldtopt','Name1','OrdRs','Dv','SaTy','Salesdoc','Purchaseorderno','Item','Material','maktx','Color',
#                     'ColorDescription','Size','GrV','EANNO','commcode','Desc','Descriptn','Quality','COO','Orig','Descpdthierlevel1',
#                     'Descpdthierlevel2','Descpdthierlevel3','Descpdthierlevel4','Descpdthierlevel5',
#                     'Descpdthierlevel6','Col','Thm','Dldat','Confirmedqty','SU','Listprice','UVP','NetWeight','WUn','GrossWeight','WUn')

class SamplemodelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Samplemodel
        fields = ('doc', 'order', 'nothing')
        
# class ColumnSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Column
#         fields = [
#             'data',
#             'title'
#         ]

# class LineSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Line
#         fields = [
#             'doc',
#             'order',
#             'nothing'
#         ]

# class TableSerializer(serializers.ModelSerializer):
#     columns = ColumnSerializer(many=True)
#     lines = LineSerializer(many=True)

#     class Meta:
#         model = Table
#         fields = [
#             'columns',
#             'lines'
#         ]