Process Object


Şu an için tamamıyla kavramak bizi zorlasa da process nesnesi, node.js çalışma ortamında o an yapılan iş ile ilgili bilgiler içerir. Bizim için önemli olan kısım ise process.argv özelliğidir. process.argv bize node.js programı çalıştığında komut satırından girilen argümanları bir array olarak bize sunar.



Örneğin test.js dosyasını node test.js one two three komutuyla çalıştırdığımızda, (rakamlar satır sırasını gösteriyor)



0: /usr/local/bin/node
1: /Users/mjr/work/node/process-args.js
2: one
3: two=three
4: four


sonucunu elde ederiz. O zaman biz bir şekilde bu arrayin ilk iki elemanından kurtulabilirsek argümanlara ulaşabiliriz. Bunun için array.slice metodundan faydalanacağız.



const arguments = process.argv.slice(2);


bize sadece argümanlardan yeni bir nesne döner. arguments[0], arguments[1], ....arguments[n] ile n tane argümana ulaşabiliriz. Bize 2 tane argüman gerekli olduğu için arguments[0] ve arguments[1]'i kullanacağız. ve uygulamamızı çalıştırmak için



showPrimeNumbers(arguments[0] *1, arguments[1]* 1);


yeterli olacaktır. Burada argümanları 1 ile çarpmamızın nedeni ise komut satırından girilen argümanlar varsayılan olarak String veritipine dönüşür, onu Number veritipine dönüştürmek isteriz.

