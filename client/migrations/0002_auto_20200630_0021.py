# Generated by Django 3.0.7 on 2020-06-30 03:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('client', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='numero',
            field=models.IntegerField(db_column='nr_numero', verbose_name='Numero'),
        ),
    ]
