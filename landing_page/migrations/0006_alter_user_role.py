# Generated by Django 4.2 on 2023-04-29 13:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('landing_page', '0005_alter_user_role_alter_user_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='role',
            field=models.CharField(choices=[(' ', ' '), ('admin', 'admin'), ('si_staff', 'si_staff'), ('reseller', 'reseller'), ('delivery_staff', 'delivery_staff')], default=None, max_length=50, null=True),
        ),
    ]
