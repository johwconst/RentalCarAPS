from django.db import models
from client.models import Client
from seg.models import Seg
from cars.models import Car

class Service(models.Model):

    TIPO_ALUGUEL = (
        ('D', 'Diaria'),
        ('S', 'Semana'),
        ('M', 'Mes'),
    )

    STATUS = (
        ('F', 'Fechada'),
        ('A', 'Aguardando Entrega'),
        ('V', 'Vencido'),
        ('N', 'Novo Aluguel'),
    )

    status = models.CharField(max_length=30, null=True, choices=STATUS, default='N', db_column='de_status')
    veiculo = models.ForeignKey(Car, on_delete=models.DO_NOTHING, null=True, db_column='de_veiculo')
    seguradora = models.ForeignKey(Seg, on_delete=models.DO_NOTHING, null=True, db_column='de_seguradora')
    cliente = models.ForeignKey(Client, on_delete=models.DO_NOTHING, null=True, db_column='de_cliente')
    tipo = models.CharField(max_length=30, null=True, choices=TIPO_ALUGUEL, db_column='tp_aluguel')
    data_de_retirada = models.DateField(null=True, db_column='dt_retirada')
    local_de_retira = models.CharField(max_length=200, db_column='local_retira')
    data_de_devolucao = models.DateField(null=True, db_column='dt_devolucao')
    valor_aluguel = models.IntegerField(null=True, db_column='lv_aluguel')
    cupom = models.CharField(max_length=30, null=True, db_column='nm_cupom')
    numero_contrato = models.CharField(max_length=30, null=True, db_column='nm_contrato')
    observacao = models.TextField(max_length=200, null=True, blank=True, db_column='de_observacao')

    class Meta:
        db_table = 'tb_locacao'

    def __str__(self):
        return self.numero_contrato