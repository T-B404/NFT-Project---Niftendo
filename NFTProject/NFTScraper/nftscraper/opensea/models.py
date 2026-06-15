from django.db import models

class NftCollection(models.Model):
    rank = models.CharField(max_length=10)
    img = models.URLField(blank=True)
    name = models.CharField(max_length=255)
    volume = models.CharField(max_length=100)
    market_cap = models.CharField(max_length=100)
    floor_price = models.CharField(max_length=100)
    avg_price = models.CharField(max_length=100)
    sales = models.CharField(max_length=100)
    asserts = models.CharField(max_length=100)
    owners = models.CharField(max_length=100)
    owners_percent = models.CharField(max_length=100)

    def __str__(self):
        return self.name
