<h1>RestApi?<h1>/

<img src='https://res.cloudinary.com/practicaldev/image/fetch/s--YTDTEgpk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ekawmj3rafdtn06hzj79.png'/>
<hr/>
<br/>
Yeni bir teknoloji öğrenirken başlangıç olarak temel kavramların anlatılması benim de kullandığım bir yöntem. Ancak bu çalışmanın teorik bölümlerine geçmeden önce senaryo düzeyinde de olsa pratik bir örnek üzerinden giriş yapmayı tercih ettim.

Örnek uygulamamızın 3 temel işlevi var.

Popüler filmleri sıralamak
Filmler arasında isme göre arama yapabilmek
Seçtiğimiz bir filmin detaylarını görebilmek
Temel sorumuz şu? Bu işlevleri yerine getirebilecek altyapıyı nasıl oluşturabiliriz? Evet, bir veri tabanı oluşturup ihtiyacımız olan bilgilere ulaşabiliriz değil mi? Ancak veri tabanı konusunda yeterliliğimiz olmayabilir veya buna ek bir kaynak ayırmak istemeyebiliriz ayrıca devamlı olarak güncelleme zorunluluğu da cabası! Bir şekilde bu 3 işlevimiz bize altın tepside sunulsaydı çok güzel olurdu değil mi? İşte bu işlevler bize The Movie Database https://www.themoviedb.org/ tarafından sunulabilir. Bizim bir şekilde TMDB veri tabanı ile iletişime geçmemiz lazım. Başka bir uygulamanın direk veritabanı ile iletişime geçmemize izin verilmeyeceğine göre ne yapabiliriz? İşte burada API kavramı devreye girer.

API (Application Programming Interface)
En basitleştirilmiş tanımıyla API; Bir kod bölümünün başka bir kod bölümüyle iletişime geçmesidir. API'ın en genel tanımı bu olmakla birlikte genel olarak ve bu çalışmamız çerçevesinde web üzerinden çoğunlukla HTTP protokolüne göre çalışan API'lar ifade edilir.

API'ların kullanımında kendi yazdığımız uygulamalar ile kullandığımız API'lar farklı programlama dillerine sahip olabilirler. Ayrıca API'lar platform bağımsız çalışırlar.

Senaryomuza dönersek. Biz uygulamamızın yapmasını istediğimiz işlevleri TMDB API kullanarak gerçekleştirebiliriz. Bizim için yapmamız gereken sadece ilgili API' ın belirtmiş olduğu sorgu adreslerine uygun istekler göndermektir.

API Örnekleri
OOP Public Methods
Node.js FS Modülü, Go(lang) FMT Paketi
GitHub API (https://docs.github.com/en/rest )
API Nedir?Özetle, bir uygulamada gerçekleştirmek istediğimiz ek bir işlemi, o işlemi sağlayan başka bir uygulamadan API kullanarak gerçekleştirebiliriz.

Neden API Kullanırız?
API kullanımı bizi ilgili işlemin gerektireceği iş yükünden kurtarır. “API hayatı kolaylaştırır”.
API lar özel kullanıcı kitlelerine yönelik hazırlanırlar ve ilgili verileri hızlı bir şekilde oluşturmamızı sağlarlar. ( IMDB API, GitHub API ..)
Platform bağımsız çalışırlar.
Güncelleme durumunda bizim yapmamız gereken işlemler sınırlıdır.


<h2>RestApi Nedir<h2>

Representational state transfer; İlgili isteğe karşılık gelen verinin JSON / XML gibi dosya formatlarında gönderilmesidir. REST API, REST mimarisinin prensiplerine taşıyan API’lardır. Tüm prensiplerin karşılanması durumunda RESTful API olarak da adlandırılır.

<img src='https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/rest-api/rest-api-nedir/figures/RestApi.png'/>
Özetle, bir uygulamada gerçekleştirmek istediğimiz ek bir işlemi, o işlemi sağlayan başka bir uygulamadan API kullanarak gerçekleştirebiliriz.

REST Prensipleri
İstemci – Sunucu: (Client – Server)
Tek Tip Arayüz: (Uniform Interface)
Durumsuzluk: (Statelessness)
Önbelleklenebilir: (Cacheable)
Katmanlı Sistem: (Layered System)
İsteğe Bağlı Kod: (Code On Demand - Optional)

<h1>REST Prensipleri (Kısıtlamaları) I
İstemci - Sunucu (Client - Server) Prensibi</h1>

<strong>İstemci isteği gönderen, sunucu da ilgili cevabı veren durumundadır. Birbirlerinin sorumluluk alanlarına girmezler. Birbirlerinden bağımsız programlama dilleri ve teknolojiler kullanabilirler.</strong>

<img src="https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/rest-api/rest-prensipleri-I/figures/ReqRes.png"/>

<h2>Tek Tip Arayüz (Uniform Interface) Prensibi</h2>
Aynı kaynağa yönelik olan tüm istekler, isteğin nereden geldiğinden bağımsız olarak aynı şekilde görünmelidir. Bu aynı zamanda istemci – sunucu bağımsızlığını da destekler. 4 temel özelliği bulunmaktadır.
<img src="https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/rest-api/rest-prensipleri-I/figures/UniformInterface.jpg"/>

Durumsuzluk (Statelessness) Prensibi
STATE
Söz konusu veriyi - durumu belirtir, örneğin bir veritabanı için düşünürsek veritabanında o an için bulunan veridir. Bir React uygulamasını düşünürsek herhangi bir component’ın o an ki durumu. Modal’ın açık veya kapalı olması, kullanıcının giriş, çıkış durumu gibi.
Stateful ( Durum bilgisi olan ) vs Stateless ( Durum bilgisi olmayan ) İstemci tafından gerçekleştirilen her istek birbirinden bağımsızdır ve sunucu bu isteklerin her birini bağımsız olarak değerlendirir. Sunucu istemci tarafından kendisine gönderilen bilgileri tutmamalıdır. Örneğin bir isteğimiz kimlik doğrulama (Authentication) işlemi gerektiriyorsa ilgili tüm bilgiler (token vs..) istemci tarafından sunucuya devamlı olarak gönderilmelidir.

<h1> REST Prensipleri (Kısıtlamaları) II
Önbelleklenebilir ( Cacheable ) Prensibi</h1>
Sunucu gelen isteklere verilen cevapların önbelleklenebilir olup olmadığını belirtmelidir. Örneğin “Cache-Control”, “Expires” gibi HTTP başlıkları önbellek ile ilgili bilgiler taşır.

<h2>Katmanlı Sistem ( Layered System ) Prensibi
İstemci – sunucu arasındaki ilişki katmanlara ayrılabilir, ve bileşenler sadece ilişkili oldukları katmanlara karşı sorumlu olurlar.</h2>

<h2>İsteğe Bağlı Kod ( Code On Demand - Optional ) Prensibi
Sunucu, istemci tarafına istemcinin işlevini genişletecek ek kodlar gönderebilir. Bu özellik istemci tarafında yapılması gereken işlemleri hafifletir.

Örneğin sunucu, istemci tarafına döneceği HTML dökümanın içerisine JavaScript kodları ekleyebilir.</h2>

<h1>HTTP Nedir?</h1>
Hyper Text Transfer Protocol ifadesinin kısaltmasıdır. İstemci ile sunucu arasındaki veri akışının kurallarını belirleyen protokoldür. İstek – Cevap (request, response) modeline göre çalışır.

HTTP
<img src="https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/rest-api/http-nedir/figures/HTTP.jpeg"/>
REST Mimarisinde HTTP'nin Rolü
REST mimarisinin prensiplerinden ilki istemci - sunucu çalışma modelidir. Biz bir istekte bulunuruz ve sunucu isteğimize karşılık olan durumu (state) bize bir sunum (presentation) olarak gönderir. HTTP protokolü burada bu sunum transferi için kurulan iletişimin kurallarını belirler. REST mimarisine uygun API'ların neredeyse tamamında HTTP protokolü kullanılır.

HTTP Request
İstek (Request) yapısını belirtir. 4 bölümden oluşur.
<img src="https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/rest-api/http-nedir/figures/Request.png"/>
Request

Yapılan isteğin detayları belirtilir.

HTTP Response
Cevap (Response) yapısını belirtir. 4 bölümden oluşur.

<img src="https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/rest-api/http-nedir/figures/Response.png"/>

Response

Alınan cevabın detayları belirtilir.


HTTP Durum Kodları (Status Codes)
Sunucu tarafından ilgili isteğin sonucunu belirten, 3 rakamdan oluşan sayısal ifadelerdir.

Informational responses (Bidirimsel cevaplar) (100–199)

100 Continue
102 Processing
Successful responses (Başarılı cevaplar) (200–299)

200 OK
201 Created
204 No Content
Redirections (Yönlendirme cevapları) (300–399)

300 Multiple Choice
301 Moved Permanently
304 Not Modified
Client errors (İstemci Hataları) (400–499)

400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
405 Method Not Allowed
Server errors (Sunucu Hataları) (500–599)

500 Internal Server Error
503 Service Unavailable

<h1>HTTP Metotları </h1>

GET

Verileri almak - listelemek için kullanılan istek metodudur.
http://api.example.com/users
http://api.example.com/users/1

POST

Belirli bir kaynağa veri göndermek için kullanılır.
http://api.example.com/users

PUT

Belirli bir kaynaktaki verinin tamamının değiştirilmesi için kullanılan metodtur.
http://api.example.com/users/1
{ “name": "Gurcan", "age": 40}

PATCH

Belirli bir kaynaktaki verilerin bir kısmının değiştirilmesi için kullanılan metodtur.
http://api.example.com/users/1
{ "name": "Gurcan"}

DELETE

Belirli bir kaynaktaki verilerin silinmesi için kullanılan metodtur.
http://api.example.com/users/1

CONNECT - TRACE - OPTIONS - HEAD

SAFE Metotlar
GET – HEAD – OPTIONS : Sunucu “state” tarafında değişiklik oluşturmazlar. “Read-only” yapısındadırlar.

IDEMPOTENT Metotlar
GET – HEAD - OPTIONS – DELETE – PUT – TRACE : Tekrar durumunda sunucu state yapısında herhangi bir yan etki bırakmazlar. Safe metodlar, idempotent'tır.

Endpoint (Sorgu Adresi)
REST API kullanımında gönderilen istek ile verilen cevap için belirlenen buluşma noktasıdır.

Root(Base) /Path yapısından oluşur, isimler kullanılır, fiil ilgili HTTP metodu ile belirtilir. Dökümantasyon tarafından belirtilir.

https://jsonplaceholder.typicode.com /posts
Değişen değer için genelde (:) kullanılır.

https://jsonplaceholder.typicode.com/posts/1 => /posts/:id veya /posts/{{id}}
https://jsonplaceholder.typicode.com/posts/1/comments
Sorgu parametreleri için (?) kullanılır.

Aslında sorgu parametreleri REST yapısının bir parçası değildir ancak sorgu adreslerinde sıkça rastlarız.
http://example.com/articles?sort=author&date=published


<h1>JSON Nedir?</h1>

JavaScript Object Notation ifadesinin kısaltmasıdır. Veri depolamak veya veri iletmek için kullanılan metin tabanlı bir söz dizimi yapısıdır. Genellikle bir sunucu ve istemci arasında veri alışverişi için veya yazılımların genel ayarları için kullanılan bir formattır.

Drupal/config.json
Node.js/package.json
https://jsonplaceholder.typicode.com/users
JSON Veri Tipleri
String: "Sample String", "test1234", "A"
Number: 7, 3.2, -97.238
Boolean: true, false
Null: null
Array: [2,3,5,7] , ["İstanbul", "Ankara", "İzmir"] Array içerisinde kullanılan değerler sıralı olarak listelenebilir.
Object { "name": "Gürcan", "age":40 } JSON nesneleri verileri key-value çiftleri olarak tanımlar.
Yukarıda görmüş olduğunuz veri tiplerinin tamamı tekil olarak uygun bir JSON formatı işlevini görür. Ancak tek bir 3, string veya true gibi ifadeler için ayrı bir .json uzantılı dosya oluşturmak mantıklı değildir. Bu nedenle JSON doayaları bir array, nesne ve/veya bunların içiçe geçmiş formlarından oluşur.

Örnek :
movie.json
{
    "id":1,
    "title": "Matrix",
    "actors": ["Keanu Reeves", "Carrie Anne Moss"],
    "published_year": 1999,
    "genre": {
      "id": 6,
      "name": "Action"
    },
    "rating": 7.9
}   
      
JSON dosyasının uygun formatta olup olmadığını kontrol etmek için JSONLINT ( https://jsonlint.com/ ) gibi çevrimiçi araçlar kullanabiliriz.

<h1>
JSON - JavaScript - XML
JSON vs JavaScript</h1>

JavaScript web uygulamalarında sıklıkla kullanılan dinamik bir programlama dilidir. JSON ise bir söz dizim olarak JavaScript'in bir alt kümesi olarak düşünülebilir. Bu nedenle uygun JSON formatındaki bir içerik JavaScript ifadesine (expression) denk gelir.

{
    "id":1,
    "title": "Matrix",
    "actors": ["Keanu Reeves", "Carrie Anne Moss"],
    "published_year": 1999,
    "genre": {
      "id": 6,
      "name": "Action"
    },
    "rating": 7.9
} 
şeklindeki JSON söz dizimini bir JavaScript değişkenine atadığımızda, değişken değer olarak bir JavaScript nesnesini almış olur. JSON formatında key ifadelerin çift tırnak içerisine alınması zorunludur. Her ne kadar JSON söz dizimi olarak kendisine JavaScript'i örnek aldıysa da kullanımı bir çok programlama dili tarafında yaygındır.

JSON vs XML
XML
eXtensible Markup Language ifadesinin kısaltmasıdır. Veri depolamak ve iletmek için kullanılan bir script dilidir. 1998 yılında W3C tarafından standartlaştırılmıştır.

<breakfast_menu><food><name>Belgian Waffles</name><price>$5.95</price><description>
        Two of our famous Belgian Waffles with plenty of real maple syrup
     </description><calories>650</calories></food>
</breakfast_menu>
Genel olarak ağaç yapısına (tree structure) sahiptir. Veriler açılış ve kapanış etiketlerinin içerisinde bulunur. Dıştaki etiket, içtekinin "parent"ı, içteki etiket ise dıştakinin "child"ı şeklinde düşünülür.

JSON formatının XML formatına göre en büyük avantajı, doğalında bir nesne modeline sahip olmasıdır. Bu özellik sayesinde birçok programlama dili JSON verileri daha kolay bir şekilde işleyebilir.

<h1>Postman Kullanımı</h1>
Postman bir API platformudur. API geliştirmek , test etmek ve/veya hazır bir API kullanımı için gerekli isteklerde bulunabileceğimiz bir uygulamadır. Insomnia REST Client, HTTPie gibi alternatifleri de bulunmasına karşın en çok kullanılan API aracıdır.

Postman kurulumu ve kullanımı için resmi dökümantasyonda bulunan aşağıdaki linki kullanabiliriz:

https://learning.postman.com/docs/getting-started/introduction/
Postman Kullanım Senaryoları:
Bir uygulama geliştirmek istiyoruz ve geliştirmeye başlamada kullanmak istediğimiz ücretli veya ücretsiz bir REST API tarafına ilgili istekleri göndererek gelen
sunumları inceleyebiliriz.

Kendimizin bir REST API oluşturduğu bir senaryoyu düşünelim. Geliştirme aşamasında Postman yardımıyla gelen isteklere karşı uygulamamızın vereceği cevapları test edebiliriz.
İlgili İstek (Request)
  GET: https://jsonplaceholder.typicode.com/users
İlgili Cevap (Response)
[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
    },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
  },
]