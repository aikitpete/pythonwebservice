# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('testapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='comments',
            field=jsonfield.fields.JSONField(default=""),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='post',
            name='tags',
            field=jsonfield.fields.JSONField(default=""),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='post',
            name='text',
            field=models.TextField(default=""),
            preserve_default=False,
        ),
    ]
