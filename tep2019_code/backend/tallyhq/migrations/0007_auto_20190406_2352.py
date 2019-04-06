# Generated by Django 2.1.7 on 2019-04-06 23:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tallyhq', '0006_auto_20190404_0345'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='orderitem',
            unique_together={('order', 'item')},
        ),
        migrations.AlterUniqueTogether(
            name='school',
            unique_together={('name',)},
        ),
        migrations.AlterUniqueTogether(
            name='teacher',
            unique_together={('email',)},
        ),
    ]
