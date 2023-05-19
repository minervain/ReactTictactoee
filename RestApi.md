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