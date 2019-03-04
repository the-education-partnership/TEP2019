from django.db import models
from django.core.validators import MinValueValidator


class Item(models.Model):
    # title of item (e.g. 'pencils')
    name = models.CharField(max_length=30)

    # display label for unites (e.g. 'packs')
    unit_label_name = models.CharField(max_length=15)

    # maximum number of units that can be taken for this item
    max_units = models.IntegerField(validators=[MinValueValidator(1)])

    # number of the item per unit (e.g. 8 (pencils per pack))
    qty_per_unit = models.IntegerField(validators=[MinValueValidator(1)])

    # whether or not the item is active
    active = models.BooleanField(default=True)


class School(models.Model):
    name = models.CharField(max_length=50)
    active = models.BooleanField(default=True)


class Teacher(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=30)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    school = models.ForeignKey(School, on_delete=models.SET_NULL)
    active = models.BooleanField(default=True)


# Order model: one per teacher visit, summarizes what a teacher got
class Order(models.Model):
    # date the teacher visited TEP
    shopping_date = models.DateField()

    # whether this order has been exported to csv yet
    uploaded = models.BooleanField(default=False)

    # whether the waiver was signed this time
    waiver_signed = models.BooleanField(default=False)

    # teacher associated with the order
    teacher = models.ForeignKey(Teacher, on_delete=models.SET_NULL)


# ValidationPassword: the password that volunteers/TEP employees enter to validate the form
class ValidationPassword(models.Model):
    digest = models.CharField(max_length=30)
    date = models.DateField()
    current = models.BooleanField(default=True)