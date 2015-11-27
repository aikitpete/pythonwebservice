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
    SOrg = models.CharField(max_length=200)
    Cty = models.CharField(max_length=200)
    Soldto = models.CharField(max_length=200)
    pt = models.CharField(max_length=200)
    Name1 = models.CharField(max_length=200)
    OrdRs = models.CharField(max_length=200)
    Dv = models.CharField(max_length=200)
    SaTy = models.CharField(max_length=200)
    Salesdoc = models.CharField(max_length=200)
    Purchaseorderno = models.CharField(max_length=200)
    Item = models.CharField(max_length=200)
    Material = models.CharField(max_length=200)
    maktx = models.CharField(max_length=200)
    Color = models.CharField(max_length=200)
    ColorDescription = models.CharField(max_length=200)
    Size = models.CharField(max_length=200)
    GrV = models.CharField(max_length=200)
    EANNO = models.CharField(max_length=200)
    commcode = models.CharField(max_length=200)
    Desc = models.CharField(max_length=200)
    Descriptn = models.CharField(max_length=200)
    Quality = models.CharField(max_length=200)
    COO = models.CharField(max_length=200)
    Orig = models.CharField(max_length=200)
    Descpdthierlevel1 = models.CharField(max_length=200)
    Descpdthierlevel2 = models.CharField(max_length=200)
    Descpdthierlevel3 = models.CharField(max_length=200)
    Descpdthierlevel4 = models.CharField(max_length=200)
    Descpdthierlevel5 = models.CharField(max_length=200)
    Descpdthierlevel6 = models.CharField(max_length=200)
    Col = models.CharField(max_length=200)
    Thm = models.CharField(max_length=200)
    Dldat = models.CharField(max_length=200)
    Confirmedqty = models.CharField(max_length=200)
    SU = models.CharField(max_length=200)
    Listprice = models.CharField(max_length=200)
    UVP = models.CharField(max_length=200)
    NetWeight = models.CharField(max_length=200)
    WUn = models.CharField(max_length=200)
    GrossWeight = models.CharField(max_length=200)
    WUn = models.CharField(max_length=200)
    
    def __str__(self):
        return self.maktx

class Simple(models.Model):
    doc = models.CharField(max_length=200)
    order = models.CharField(max_length=200)
    nothing = models.CharField(max_length=200)
    
    def __str__(self):
        return self.order