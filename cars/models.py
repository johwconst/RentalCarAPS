from django.db import models

# Create your models here.

class Car(models.Model):
    MARCA_CHOICES = (
        ('SD', 'Sea doo'),
        ('CH', 'Chevrolet'),
        ('FI', 'Fiat'),
        ('FO', 'Ford'),
        ('KW', 'Kawasaki'),
        ('VO', 'Volkswagen'),
        ('YA', 'Yamaha')
    )

    TIPO = (
        ('JT', 'Jetski'),
        ('CA', 'Carro'),
    )

    MARCA_DICT = {key: value for (key, value) in MARCA_CHOICES}
    disponibilidade = models.BooleanField(null=True, default=True)
    placa = models.CharField(max_length=7, null=True, db_column='de_placa')
    marca = models.CharField(max_length=120, null=True, choices=MARCA_CHOICES, db_column='de_marca')
    tipo = models.CharField(max_length=120, null=True, choices=TIPO, db_column='de_tipo')
    data_fabricacao = models.DateField(max_length=4, null=True, db_column='data_fabricacao')
    data_entrada = models.DateField(max_length=4, null=True, db_column='data_entrada')

    class Meta:
        db_table = 'tb_veiculo'

    def __str__(self):
        return self.placa