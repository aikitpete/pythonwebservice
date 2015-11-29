# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0007_auto_20151127_1342'),
    ]

    operations = [
        migrations.CreateModel(
            name='Samplemodel',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
                ('doc', models.CharField(max_length=200, null=True, blank=True)),
                ('order', models.CharField(max_length=200, null=True, blank=True)),
                ('nothing', models.CharField(max_length=200, null=True, blank=True)),
            ],
        ),
    ]
