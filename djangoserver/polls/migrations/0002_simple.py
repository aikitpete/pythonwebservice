# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Simple',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, verbose_name='ID', auto_created=True)),
                ('doc', models.CharField(max_length=200)),
                ('order', models.CharField(max_length=200)),
                ('nothing', models.CharField(max_length=200)),
            ],
        ),
    ]
