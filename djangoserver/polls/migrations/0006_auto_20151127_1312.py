# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0005_column_sampledata'),
    ]

    operations = [
        migrations.AlterField(
            model_name='column',
            name='data',
            field=models.CharField(null=True, max_length=200, blank=True),
        ),
        migrations.AlterField(
            model_name='column',
            name='title',
            field=models.CharField(null=True, max_length=200, blank=True),
        ),
        migrations.AlterField(
            model_name='simple',
            name='doc',
            field=models.CharField(null=True, max_length=200, blank=True),
        ),
        migrations.AlterField(
            model_name='simple',
            name='nothing',
            field=models.CharField(null=True, max_length=200, blank=True),
        ),
        migrations.AlterField(
            model_name='simple',
            name='order',
            field=models.CharField(null=True, max_length=200, blank=True),
        ),
    ]
