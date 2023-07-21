Promise Nedir?


Promise bir işlemin sonucunu temsil eden bir Javascript nesnesidir. Promise nesnesi Resolve ve Reject adında iki tane parametre alır ve olumlu durumlarda Resolve ile belirtilen işlemlerin, olumsuz durumlarda da Reject ile belirtilen işlemlerin yapılacağına dair güvence verir. Promise yapısı olumlu sonuçları .then(), olumsuz sonuçları da .catch() ile karşılar.


Async Await Yapısı?


Async - Await yapısı ES8 ile birlikte gelmiştir ve Promise yapısının daha anlaşılır bir söz dizimi ile yazılmasıdır. Bir fonksiyon async anahtar kelimesi ile birlikte tanımlanırsa, fonksiyonun olumlu sonuçlanması sonucunda bir Promise döner. Bir async fonksiyon await anahtar kelimesi ile birlikte kullanılırsa ilgili Promise olumlu bir şekilde dönene kadar async fonksiyonunun çalışması bekletilir.