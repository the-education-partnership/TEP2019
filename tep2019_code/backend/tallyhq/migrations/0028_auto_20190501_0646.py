# Generated by Django 2.1.7 on 2019-05-01 06:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tallyhq', '0027_auto_20190501_0630'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='checkout_day',
        ),
        migrations.AlterField(
            model_name='order',
            name='teacher',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tallyhq.Teacher', unique_for_date='checkout_time'),
        ),
    ]
