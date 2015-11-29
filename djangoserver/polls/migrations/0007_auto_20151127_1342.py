# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0006_auto_20151127_1312'),
    ]

    operations = [
        migrations.CreateModel(
            name='Line',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('doc', models.CharField(blank=True, null=True, max_length=200)),
                ('order', models.CharField(blank=True, null=True, max_length=200)),
                ('nothing', models.CharField(blank=True, null=True, max_length=200)),
            ],
        ),
        migrations.RenameModel(
            old_name='Sampledata',
            new_name='Table',
        ),
        migrations.DeleteModel(
            name='Simple',
        ),
        migrations.AddField(
            model_name='column',
            name='table',
            field=models.ForeignKey(default="", to='polls.Table'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='line',
            name='table',
            field=models.ForeignKey(to='polls.Table'),
        ),
    ]
