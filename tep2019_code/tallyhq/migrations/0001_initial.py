# Generated by Django 2.1.7 on 2019-03-03 23:14

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('max_packs', models.IntegerField(validators=[django.core.validators.MinValueValidator(1)])),
                ('qty_per_unit', models.IntegerField(validators=[django.core.validators.MinValueValidator(1)])),
                ('unit_label_name', models.CharField(max_length=15)),
            ],
        ),
    ]