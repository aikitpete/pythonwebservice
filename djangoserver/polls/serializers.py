from rest_framework import serializers
from polls.models import Question, Choice, Product, Simple, Column
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
        
class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        data = Product.objects.all()
        model = Product
        fields = ('SOrg','Cty','Soldtopt','Name1','OrdRs','Dv','SaTy','Salesdoc','Purchaseorderno','Item','Material','maktx','Color',
                    'ColorDescription','Size','GrV','EANNO','commcode','Desc','Descriptn','Quality','COO','Orig','Descpdthierlevel1',
                    'Descpdthierlevel2','Descpdthierlevel3','Descpdthierlevel4','Descpdthierlevel5',
                    'Descpdthierlevel6','Col','Thm','Dldat','Confirmedqty','SU','Listprice','UVP','NetWeight','WUn','GrossWeight','WUn')
        
class SimpleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Simple
        fields = ('doc', 'order', 'nothing')
        
class ColumnSerializer(serializers.ModelSerializer):

    class Meta:
        model = Column
        fields = ('title', 'data')
        
class SampledataSerializer(serializers.Serializer):
    
    columns = ColumnSerializer(many=True)
    data = SimpleSerializer(many=True)
    
    def create(self, validated_data):
        columns_data = validated_data.pop('columns')
        data_data = validated_data.pop('data')
    # takeoutOrder = TakeoutOrder.objects.create(**validated_data)

    # for rows_data in Simple.objects.all():
    #     Component.objects.create(**component_data)

    # for meal_data in meals_data:
    #     meal_data.update({'takeoutOrder':takeoutOrder}
    #     meal = Meal.objects.create(**meal_data)
    #     meal_components = meal_data.pop('components')

    #     for meal_comp in meal_components:
    #         component = Component.objects.get(pk=meal_comp)
    #         MealComponent.objects.create(meal=meal,component=component)
    
    
    