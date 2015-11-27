from rest_framework import serializers
from polls.models import Question, Choice, Product, Simple
from django.contrib.auth.models import User


class QuestionSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Question
        fields = ('question_text', 'pub_date', 'slug')
                  
class ChoiceSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Choice
        fields = ('question', 'choice_text', 'votes')
        
class ProductSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Product
        fields = ('SOrg','Cty','Soldtopt','Name1','OrdRs','Dv','SaTy','Salesdoc','Purchaseorderno','Item','Material','maktx','Color',
                    'ColorDescription','Size','GrV','EANNO','commcode','Desc','Descriptn','Quality','COO','Orig','Descpdthierlevel1',
                    'Descpdthierlevel2','Descpdthierlevel3','Descpdthierlevel4','Descpdthierlevel5',
                    'Descpdthierlevel6','Col','Thm','Dldat','Confirmedqty','SU','Listprice','UVP','NetWeight','WUn','GrossWeight','WUn')
        
class SimpleSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Simple
        fields = ('doc', 'order', 'nothing')