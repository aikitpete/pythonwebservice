from rest_framework import serializers
from polls.models import Product, Samplemodel
from django.contrib.auth.models import User
from rest_framework.renderers import JSONRenderer
        
class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ('SOrg','Cty','Soldtopt','Name1','OrdRs','Dv','SaTy','Salesdoc','Purchaseorderno','Item','Material','maktx','Color',
                    'ColorDescription','Size','GrV','EANNO','commcode','Desc','Descriptn','Quality','COO','Orig','Descpdthierlevel1',
                    'Descpdthierlevel2','Descpdthierlevel3','Descpdthierlevel4','Descpdthierlevel5',
                    'Descpdthierlevel6','Col','Thm','Dldat','Confirmedqty','SU','Listprice','UVP','NetWeight','WUn','GrossWeight','WUn')

class SamplemodelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Samplemodel
        fields = ('doc', 'order', 'nothing')