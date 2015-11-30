from django.shortcuts import render_to_response
from django.http import HttpResponseBadRequest, JsonResponse, HttpResponse
from django import forms
from django.template import RequestContext
import django_excel as excel
from polls.models import Product, Samplemodel
from polls.serializers import SamplemodelSerializer, ProductSerializer
import pyexcel.ext.xls
import pyexcel.ext.xlsx
import sys
PY2 = sys.version_info[0] == 2
if PY2:
    import pyexcel.ext.ods
else:
    import pyexcel.ext.ods3
from rest_framework import permissions
from rest_framework import renderers
from rest_framework import viewsets
from rest_framework.decorators import detail_route
from rest_framework.response import Response
import pyexcel

data = [
    [1, 2, 3],
    [4, 5, 6]
]


class UploadFileForm(forms.Form):
    file = forms.FileField()


# Create your views here.
def upload(request):
    if request.method == "POST":
        form = UploadFileForm(request.POST, request.FILES)
        if form.is_valid():
            filehandle = request.FILES['file']
            return excel.make_response(filehandle.get_sheet(), "csv")
    else:
        form = UploadFileForm()
    return render_to_response(
        'upload_form.html',
        {
            'form': form,
            'title': 'Excel file upload and download example',
            'header': 'Please choose any excel file from your cloned repository:'
        },
        context_instance=RequestContext(request))


def download(request, file_type):
    sheet = excel.pe.Sheet(data)
    return excel.make_response(sheet, file_type)


def export_data(request, atype):
    if atype == "sheet":
        return excel.make_response_from_a_table(
            Question, 'xls')
    elif atype == "book":
        return excel.make_response_from_tables(
            [Question, Choice], 'xls')
    elif atype == "custom":
        question = Question.objects.get(slug='ide')
        query_sets = Choice.objects.filter(question=question)
        column_names = ['choice_text', 'id', 'votes']
        return excel.make_response_from_query_sets(
            query_sets,
            column_names,
            'xls')


def import_data(request):
    if request.method == "POST":
        form = UploadFileForm(request.POST,
                              request.FILES)
        def choice_func(row):
            q = Question.objects.filter(slug=row[0])[0]
            row[0] = q
            return row
        if form.is_valid():
            request.FILES['file'].save_book_to_database(
                models=[Question, Choice],
                initializers=[None, choice_func],
                mapdicts=[
                    ['question_text', 'pub_date', 'slug'],
                    ['question', 'choice_text', 'votes']]
            )
            return HttpResponse("OK", status=200)
        else:
            return HttpResponseBadRequest()
    else:
        form = UploadFileForm()
    return render_to_response(
        'upload_form.html',
        {
            'form': form,
            'title': 'Import excel data into database example',
            'header': 'Please upload sample-data.xls:'
        },
        context_instance=RequestContext(request))


def import_dataa(request):
    if request.method == "POST":
        form = UploadFileForm(request.POST,
                              request.FILES)
        if form.is_valid():
            request.FILES['file'].save_to_database(
                model=Question,
                mapdict=['question_text', 'pub_date'])
            return HttpResponse("OK")
        else:
            return HttpResponseBadRequest()
    else:
        form = UploadFileForm()
    return render_to_response('upload_form.html',
                              {'form': form},
                              context_instance=RequestContext(request))


def exchange(request, file_type):
    form = UploadFileForm(request.POST, request.FILES)
    if form.is_valid():
        filehandle = request.FILES['file']
        return excel.make_response(filehandle.get_sheet(), file_type)
    else:
        return HttpResponseBadRequest()


def parse(request, data_struct_type):
    form = UploadFileForm(request.POST, request.FILES)
    if form.is_valid():
        filehandle = request.FILES['file']
        if data_struct_type == "array":
            return JsonResponse({"result": filehandle.get_array()})
        elif data_struct_type == "dict":
            return JsonResponse(filehandle.get_dict())
        elif data_struct_type == "records":
            return JsonResponse({"result": filehandle.get_records()})
        elif data_struct_type == "book":
            return JsonResponse(filehandle.get_book().to_dict())
        elif data_struct_type == "book_dict":
            return JsonResponse(filehandle.get_book_dict())
        else:
            return HttpResponseBadRequest()
    else:
        return HttpResponseBadRequest()

def import_realdata(request):
    if request.method == "POST":
        form = UploadFileForm(request.POST,
                              request.FILES)
        if form.is_valid():
            request.FILES['file'].save_book_to_database(
                models=[Product],
                initializers=[None],
                mapdicts=[
                    ['SOrg','Cty','Soldtopt','Name1','OrdRs','Dv','SaTy','Salesdoc',
                    'Purchaseorderno','Item','Material','maktx','Color',
                    'ColorDescription','Size','GrV','EANNO','commcode','Desc','Descriptn','Quality','COO',
                    'Orig','Descpdthierlevel1',
                    'Descpdthierlevel2','Descpdthierlevel3','Descpdthierlevel4','Descpdthierlevel5',
                    'Descpdthierlevel6','Col','Thm','Dldat','Confirmedqty','SU','Listprice','UVP','NetWeight',
                    'WUn','GrossWeight','WUn']
                ]
            )
            return HttpResponse("OK", status=200)
        else:
            return HttpResponseBadRequest()
    else:
        form = UploadFileForm()
    return render_to_response(
        'upload_form.html',
        {
            'form': form,
            'title': 'Import excel data into database example',
            'header': 'Please upload NOS Artikelstammdaten 16B.xlsx:'
        },
        context_instance=RequestContext(request))

def import_sampledata(request):
    if request.method == "POST":
        form = UploadFileForm(request.POST,
                              request.FILES)
        if form.is_valid():
            request.FILES['file'].save_book_to_database(
                models=[Samplemodel],
                initializers=[None],
                mapdicts=[
                    ['doc','order','nothing']
                ]
            )
            return HttpResponse("OK", status=200)
        else:
            return HttpResponseBadRequest()
    else:
        form = UploadFileForm()
    return render_to_response(
        'upload_form.html',
        {
            'form': form,
            'title': 'Import excel data into database example',
            'header': 'Please upload simpledata.xls:'
        },
        context_instance=RequestContext(request))
        
def import_supersimpledata(request):
    if request.method == "POST":
        form = UploadFileForm(request.POST,
                              request.FILES)
        def init_func(row):
            print('Something1')
            table = Table()
            line = Line(doc=row[0],order=row[1],nothing=row[2],table=table)
            column = Column(data=row[0],title=row[0],table=table)
            table.save()
            print('Something2')
            return row
        if form.is_valid():
            file = request.FILES['file']
            print('SomethingA')
            file.save_to_database(
                # models=[Table],
                initializer=init_func
                # mapdicts=[
                #     ['doc','order','nothing']
                # ]
            )
            print('SomethingB')
            # file.save_book_to_database(
            #     models=[Simple],
            #     initializers=[None],
            #     mapdicts=[
            #         ['doc','title']
            #     ]
            # )
            return HttpResponse("OK", status=200)
        else:
            return HttpResponseBadRequest()
    else:
        form = UploadFileForm()
    return render_to_response(
        'upload_form.html',
        {
            'form': form,
            'title': 'Import excel data into database example',
            'header': 'Please upload supersimpledata.xls:'
        },
        context_instance=RequestContext(request))

from rest_framework.renderers import JSONRenderer    
from django.http import JsonResponse
import collections
from collections import OrderedDict
from polls.jsonp_decorator import json_response

@json_response
def sampledata(request):

    bunch = SamplemodelSerializer(Samplemodel.objects.all(), many=True)                                                                              

    headers = bunch.data[0].keys()   
    titles = bunch.data[0].keys()   
    
    headers_prepared = list(map (lambda x,y: {'data': x,'title': y} , headers, titles))
    
    
    ordered_all = ( ('columns', headers_prepared), ('data', bunch.data) )
    
    data = collections.OrderedDict(ordered_all)
    
    return data
    
@json_response
def productdata(request):

    bunch = ProductSerializer(Product.objects.all(), many=True)                                                                              

    headers = bunch.data[0].keys()   
    titles = bunch.data[0].keys()   
    
    headers_prepared = list(map (lambda x,y: {'data': x,'title': y} , headers, titles))
    
    
    ordered_all = ( ('columns', headers_prepared), ('data', bunch.data) )
    
    data = collections.OrderedDict(ordered_all)
    
    return data