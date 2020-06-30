# Generated by Django 3.0.7 on 2020-06-30 03:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tipo_client', models.CharField(choices=[('FI', 'Pessoa Fisica'), ('JU', 'Pessoa Juridica')], db_column='de_tipo', max_length=120, null=True)),
                ('nome_completo', models.CharField(db_column='de_nome', max_length=120, null=True)),
                ('cpf_cnpj', models.CharField(db_column='de_cpf_cnpj', max_length=14, null=True)),
                ('email', models.EmailField(db_column='de_email', max_length=254, null=True)),
                ('telefone', models.CharField(db_column='nr_tel_celular', max_length=22, null=True)),
                ('tipo_endereco', models.CharField(choices=[('R', 'Residencial'), ('C', 'Comercial')], db_column='id_tipo_endereco', default='R', max_length=1)),
                ('uf', models.CharField(choices=[('AC', 'Acre'), ('AL', 'Alagoas'), ('AP', 'Amapá'), ('BA', 'Bahia'), ('CE', 'Ceará'), ('DF', 'Distrito Federal'), ('ES', 'Espírito Santo'), ('GO', 'Goiás'), ('MA', 'Maranhão'), ('MG', 'Minas Gerais'), ('MS', 'Mato Grosso do Sul'), ('MT', 'Mato Grosso'), ('PA', 'Pará'), ('PB', 'Paraíba'), ('PE', 'Pernanbuco'), ('PI', 'Piauí'), ('PR', 'Paraná'), ('RJ', 'Rio de Janeiro'), ('RN', 'Rio Grande do Norte'), ('RO', 'Rondônia'), ('RR', 'Roraima'), ('RS', 'Rio Grande do Sul'), ('SC', 'Santa Catarina'), ('SE', 'Sergipe'), ('SP', 'São Paulo'), ('TO', 'Tocantins')], db_column='id_uf', default='SC', max_length=2, verbose_name='UF')),
                ('cidade', models.CharField(db_column='de_cidade', max_length=250)),
                ('cep', models.BigIntegerField(db_column='de_cep', verbose_name='CEP')),
                ('rua', models.CharField(db_column='de_rua', max_length=250)),
                ('numero', models.IntegerField(db_column='nr_numero', verbose_name='Número')),
                ('bairro', models.CharField(db_column='de_bairro', max_length=250)),
                ('complemento', models.CharField(db_column='de_complemento', max_length=250, null=True)),
            ],
            options={
                'db_table': 'tb_usuario',
            },
        ),
    ]
