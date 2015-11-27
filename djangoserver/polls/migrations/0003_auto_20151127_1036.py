# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0002_simple'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='Soldto',
            new_name='Soldtopt',
        ),
        migrations.RemoveField(
            model_name='product',
            name='pt',
        ),
    ]
