from django.contrib import admin
from namecard.models import Namecard_TBL

# Register your models here.
@admin.register(Namecard_TBL)
class NamecardAdmin(admin.ModelAdmin):
    list_display=('name', 'tel', 'company', 'email', 'group')
