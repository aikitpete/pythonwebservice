from django.db import models

# Create your models here.
class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    slug = models.CharField(max_length=10, unique=True,
                            default="question")

    def __str__(self):
        return self.question_text


class Choice(models.Model):
    question = models.ForeignKey(Question)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text
        
class Product(models.Model):
    SOrg = models.CharField(max_length=200, blank=True, null=True)#, related_name='SOrg')
    Cty = models.CharField(max_length=200, blank=True, null=True)#, related_name='Cty')
    Soldtopt = models.CharField(max_length=200, blank=True, null=True)#, related_name='Sold-to pt')
    Name1 = models.CharField(max_length=200, blank=True, null=True)
    OrdRs = models.CharField(max_length=200, blank=True, null=True)
    Dv = models.CharField(max_length=200, blank=True, null=True)
    SaTy = models.CharField(max_length=200, blank=True, null=True)
    Salesdoc = models.CharField(max_length=200, blank=True, null=True)
    Purchaseorderno = models.CharField(max_length=200, blank=True, null=True)
    Item = models.CharField(max_length=200, blank=True, null=True)
    Material = models.CharField(max_length=200, blank=True, null=True)
    maktx = models.CharField(max_length=200, blank=True, null=True)
    Color = models.CharField(max_length=200, blank=True, null=True)
    ColorDescription = models.CharField(max_length=200, blank=True, null=True)
    Size = models.CharField(max_length=200, blank=True, null=True)
    GrV = models.CharField(max_length=200, blank=True, null=True)
    EANNO = models.CharField(max_length=200, blank=True, null=True)
    commcode = models.CharField(max_length=200, blank=True, null=True)
    Desc = models.CharField(max_length=200, blank=True, null=True)
    Descriptn = models.CharField(max_length=200, blank=True, null=True)
    Quality = models.CharField(max_length=200, blank=True, null=True)
    COO = models.CharField(max_length=200, blank=True, null=True)
    Orig = models.CharField(max_length=200, blank=True, null=True)
    Descpdthierlevel1 = models.CharField(max_length=200, blank=True, null=True)
    Descpdthierlevel2 = models.CharField(max_length=200, blank=True, null=True)
    Descpdthierlevel3 = models.CharField(max_length=200, blank=True, null=True)
    Descpdthierlevel4 = models.CharField(max_length=200, blank=True, null=True)
    Descpdthierlevel5 = models.CharField(max_length=200, blank=True, null=True)
    Descpdthierlevel6 = models.CharField(max_length=200, blank=True, null=True)
    Col = models.CharField(max_length=200, blank=True, null=True)
    Thm = models.CharField(max_length=200, blank=True, null=True)
    Dldat = models.CharField(max_length=200, blank=True, null=True)
    Confirmedqty = models.CharField(max_length=200, blank=True, null=True)
    SU = models.CharField(max_length=200, blank=True, null=True)
    Listprice = models.CharField(max_length=200, blank=True, null=True)
    UVP = models.CharField(max_length=200, blank=True, null=True)
    NetWeight = models.CharField(max_length=200, blank=True, null=True)
    WUn = models.CharField(max_length=200, blank=True, null=True)
    GrossWeight = models.CharField(max_length=200, blank=True, null=True)
    WUn = models.CharField(max_length=200, blank=True, null=True)
    
    def __str__(self):
        return self.maktx

class Samplemodel(models.Model):
    doc = models.CharField(max_length=200, blank=True, null=True)
    order = models.CharField(max_length=200, blank=True, null=True)
    nothing = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return self.order

# class Table(models.Model):
#     pass

# class Column(models.Model):
#     data = models.CharField(max_length=200, blank=True, null=True)
#     title = models.CharField(max_length=200, blank=True, null=True)
#     table = models.ForeignKey(Table)

#     def __str__(self):
#         return self.title

# class Line(models.Model):
#     doc = models.CharField(max_length=200, blank=True, null=True)
#     order = models.CharField(max_length=200, blank=True, null=True)
#     nothing = models.CharField(max_length=200, blank=True, null=True)
#     table = models.ForeignKey(Table)

#     def __str__(self):
#         return self.order