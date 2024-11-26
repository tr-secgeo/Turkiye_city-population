## Açık Verilerden 2B Web Haritası Oluşturma
Türkiye şehirlerine ait TÜİK den alınan 2024 yılı güncellenen nüfus verilerinin vektör veriler ile ilişkilendirilerek oluşturulan bir web-cbs tematik harita oluşturma projesidir.

 Web-CBS Türkiye Nüfus Tematik haritası üzerinden;
 
     - dinamik nüfus verilerini sorgulayabilme,
     - mesafe ve alan ölçümlerini yapabilme,
     - anlık konum bilgisini harita da gösterebilme,
    
yeteneklerine sahip bir web-cbs projesidir.

 
## Açık Vektör Veri indirme link ve Yöntemleri

1- Bölgesel veri indirme linki 
- https://download.geofabrik.de/

2- Sorgulama yapmadan il/ilçe/mahalle bazlı açık veri indirebileceğiniz link 
- https://extract.bbbike.org/

3- Sorgulama ile veri çekilebilen OSM Overpass API 
- https://overpass-turbo.eu/?q=LyoKVGhpcyBoYcSGYmVlbiBnxI1lcmF0ZWQgYnkgdGhlIG92xJJwxIlzLXR1cmJvIHdpemFyZC7EgsSdxJ9yaWdpbmFsIHNlxLBjaMSsxIk6CsOiwoDCnGFkbcS6X2xlxKFsPTggxLogVMSoa2V5xYjCnQoqLwpbb3V0Ompzb25dW3RpbWXFpcWnMjUwXTsKLy8gZmV0xYIgxLDFgCDFiMKcxZlyxZvFncKAwp3Em8SrxL_FgcWDxLoKe3vEkG9jb2RlQXLFgDrGiMaKfX0tPi7GkHLFgsadxYDFucW7xI_ElMSdciDGnnN1bHRzCigKICDGrnF1xJLEmsSjcnTFvW9yOsaFxYnFi8WNbsWPxZFlxZM4xZ7GvCBuxpplWyLHjcWOxZDFkiI9IjgiXSjGg2HGp8WAxqloxqthKcW5xr13YXnHm8edx4_Hn8eSx6HHo8elx6fGnsepxqjGqse_x7DHlsaebMSUacWrx7bFjMeex5Fsx7vHpMemx6jHqsaRx67IhMiExq5wxLdux4bGtMa2xrgKxbPEmMaaecW5PsW5yKJzxZvEvXF0Ow&c=BYr5mOXymJ
- NOT: İndirmek istediğiniz verinin detay bilgisini buradan elde ederek overpass API sayfasın da küçük scriptler ile elde edebilirsiniz. https://www.openstreetmap.org/#map=18/38.370442/34.026021&layers=C
- NOT: Overpass API için farklı osm verileri indirmek için yazılan örnek scriptleri bu sayfayı inceleyerek öğrenebilirsiniz https://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_API_by_Example

NOT: Bilgisayar ortamın da düzenlediğimiz proje klasörü içerisin de aşağıdaki git komutlarını açtığımız bash terminalin de çalıştırırız;

         - git init
         - git status
         - git branch -m master main
         - git add .
         - git commit -m "Dosyalar Bilgisayardan yüklendi."
         - git log
         - git config user.name
         - git config user.email
         - git remote -v
         - git remote add origin "https://github.com/tr-secgeo/Turkiye_city-population.git" 
         - git push -u origin main
