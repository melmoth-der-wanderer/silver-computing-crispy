# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-07-24 12:35
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('feed', '0002_auto_20160723_2111'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='feed',
            options={'ordering': ('title', 'last_updated_at')},
        ),
        migrations.AlterField(
            model_name='feed',
            name='last_updated_at',
            field=models.DateTimeField(blank=True, help_text='Last time the feed has been updated', null=True, verbose_name='Last updated at'),
        ),
    ]
