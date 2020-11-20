from django.contrib import admin
from baseball.models import Team, Player


class PlayerInline(admin.StackedInline):
    model = Player
    extra = 2


@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    inlines = (PlayerInline,)
    list_display = ('owner', 'id', 'hometown', 'stadium', 'founding_day')


@admin.register(Player)
class PlayerAdmin(admin.ModelAdmin):
    list_display = ('owner', 'id', 'team', 'name', 'image', 'position', 'birth_day')
