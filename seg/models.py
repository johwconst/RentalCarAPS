from django.db import models

# Create your models here.
from django.db import models

class Seg(models.Model):

    TIPO_SEGURADORA = (
        ('1', 'Total'),
        ('2', 'Danos'),
        ('3', 'Roubo'),
        ('4', 'Desastres'),
    )

    nome = models.CharField(max_length=120, null=True, db_column='de_nome')
    cnpj = models.CharField(max_length=14, null=True, db_column='de_cnpj')
    email = models.EmailField(null=True, db_column='de_email')
    telefone = models.CharField(max_length=22, null=True, db_column='nr_tel_celular')
    tipo_de_seguro = models.CharField(max_length=120, null=True, choices=TIPO_SEGURADORA, db_column='de_tipo_seguradora')
    id_contrato = models.CharField(max_length=30, null=True, db_column='de_contrato')

    class Meta:
        db_table = 'tb_seguradora'

    def __str__(self):
        return self.nome
