from django.db import models

# Create your models here.
class Client(models.Model):

    TIPO_CLIENTE = (
        ('FI', 'Pessoa Fisica'),
        ('JU', 'Pessoa Juridica'),
    )
    RESIDENCIAL = 'R'
    COMERCIAL = 'C'
    TIPO_ENDERECO = (
        (RESIDENCIAL, 'Residencial'),
        (COMERCIAL, 'Comercial'),
    )

    UF_CHOICES = (
        ('AC', 'Acre'),
        ('AL', 'Alagoas'),
        ('AP', 'Amapá'),
        ('BA', 'Bahia'),
        ('CE', 'Ceará'),
        ('DF', 'Distrito Federal'),
        ('ES', 'Espírito Santo'),
        ('GO', 'Goiás'),
        ('MA', 'Maranhão'),
        ('MG', 'Minas Gerais'),
        ('MS', 'Mato Grosso do Sul'),
        ('MT', 'Mato Grosso'),
        ('PA', 'Pará'),
        ('PB', 'Paraíba'),
        ('PE', 'Pernanbuco'),
        ('PI', 'Piauí'),
        ('PR', 'Paraná'),
        ('RJ', 'Rio de Janeiro'),
        ('RN', 'Rio Grande do Norte'),
        ('RO', 'Rondônia'),
        ('RR', 'Roraima'),
        ('RS', 'Rio Grande do Sul'),
        ('SC', 'Santa Catarina'),
        ('SE', 'Sergipe'),
        ('SP', 'São Paulo'),
        ('TO', 'Tocantins')
    )

    tipo_client = models.CharField(max_length=120, null=True,  choices=TIPO_CLIENTE, db_column='de_tipo')
    nome_completo = models.CharField(max_length=120, null=True, db_column='de_nome')
    cpf_cnpj = models.CharField(max_length=14, null=True, db_column='de_cpf_cnpj')
    email = models.EmailField(null=True, db_column='de_email')
    telefone = models.CharField(max_length=22, null=True, db_column='nr_tel_celular')
    tipo_endereco = models.CharField(max_length=1, choices=TIPO_ENDERECO, default=RESIDENCIAL, db_column='id_tipo_endereco')
    uf = models.CharField('UF', max_length=2, choices=UF_CHOICES, default='SC', db_column='id_uf')
    cidade = models.CharField(max_length=250, db_column='de_cidade')
    cep = models.BigIntegerField('CEP', db_column='de_cep')
    rua = models.CharField(max_length=250, db_column='de_rua')
    numero = models.IntegerField('Numero', db_column='nr_numero')
    bairro = models.CharField(max_length=250, db_column='de_bairro')
    complemento = models.CharField(max_length=250, null=True, db_column='de_complemento')

    class Meta:
        db_table = 'tb_usuario'

    def __str__(self):
        return self.cpf_cnpj