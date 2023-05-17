<h1>RestApi Nedir?<h1>/

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