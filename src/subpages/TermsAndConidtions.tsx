import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const TermsAndConditions: React.FC = () => {
	return (
		<>
			<Helmet htmlAttributes={{ lang: 'pl' }}>
				<title>Polityka Prywatności | Learnica</title>
				<meta
					name='description'
					content='Dowiedz się, jak Learnica przetwarza i chroni Twoje dane osobowe zgodnie z RODO.'
				/>
				<meta property='og:title' content='Polityka Prywatności | Learnica' />
				<meta
					property='og:description'
					content='Twoja prywatność jest dla nas ważna – sprawdź szczegóły przetwarzania danych.'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://learnica.pl/polityka-prywatnosci' />
				<link rel='canonical' href='https://learnica.pl/polityka-prywatnosci' />
			</Helmet>
			<main>
				<section className='terms-and-conditions'>
					<div className='terms-and-conditions__container'>
						<h1 className='terms-and-conditions__title'>Polityka Prywatności i Warunki Użytkowania</h1>
						<div className='terms-and-conditions__box'>
							<h2>1. Wstęp do polityki prywatności</h2>
							<p>
								Niniejsze dokumenty zawierają zasady przetwarzania danych osobowych oraz warunki korzystania z usług
								świadczonych przez [Nazwa Firmy] (dalej "Firma", "my", "nas") na stronie internetowej [adres strony
								internetowej], w tym formularze kontaktowe, system nauczania online oraz inne usługi oferowane przez
								Firmę. Prosimy o dokładne zapoznanie się z poniższymi zasadami, ponieważ korzystanie z naszej strony
								internetowej oraz usług wiąże się z akceptacją Polityki Prywatności oraz Warunków Użytkowania.
							</p>
						</div>
						<div className='terms-and-conditions__box'>
							<h2>2. Administrator Danych Osobowych</h2>
							<p>Administratorem Twoich danych osobowych jest:</p>
							<ul>
								<li>[Nazwa Firmy]</li>
								<li>Adres: [Adres Firmy]</li>
								<li>E-mail: [E-mail Firmy]</li>
								<li>Telefon: [Telefon Firmy]</li>
							</ul>
						</div>
						<div className='terms-and-conditions__box'>
							<h2>3. Zakres zbieranych danych</h2>
							<p>
								Podczas korzystania z naszej strony internetowej, w tym formularzy kontaktowych, zbieramy dane osobowe w
								następujących przypadkach:
							</p>
							<ul>
								<li>
									Formularz kontaktowy – Użytkownik podaje swoje imię oraz adres e-mail w celu skontaktowania się z
									Firmą
								</li>
								<li>
									Tłumaczenia – W celu skontaktowania się z nami przez formularz tłumaczenia, użytkownik podaje swoje
									imię, adres e-mail oraz numer telefonu
								</li>
								<li>
									Rejestracja w systemie nauczania online – Aby korzystać z naszego systemu nauczania online, użytkownik
									musi podać swoje imię, nazwisko, adres e-mail oraz numer telefonu
								</li>
							</ul>
						</div>
						<div className='terms-and-conditions__box'>
							<h2>4. Cel przetwarzania danych</h2>
							<p>Dane osobowe zbierane przez Firmę są przetwarzane w następujących celach:</p>
							<ul>
								<li>Realizacja zapytań użytkownika poprzez formularz kontaktowy</li>
								<li>Realizacja zapytań użytkownika poprzez formularz tłumaczenia</li>
								<li>Rejestracja i udostępnienie dostępu do systemu nauczania online</li>
								<li>
									Kontaktowanie się z użytkownikami w celu udzielenia odpowiedzi na zapytania lub informacje związane z
									usługami
								</li>
								<li>Weryfikacja tożsamości użytkownika oraz zapobieganie nadużyciom</li>
							</ul>
						</div>
						<div className='terms-and-conditions__box'>
							<h2>5. Podstawa prawna przetwarzania danych</h2>
							<p>Dane osobowe przetwarzane są na podstawie:</p>
							<ul>
								<li>
									Art. 6 ust. 1 lit. a RODO – zgoda osoby, której dane dotyczą (np. zgoda na kontakt w formularzach)
								</li>
								<li>
									Art. 6 ust. 1 lit. b RODO – przetwarzanie niezbędne do wykonania umowy (np. rejestracja i dostęp do
									systemu nauczania online)
								</li>
								<li>
									Art. 6 ust. 1 lit. f RODO – uzasadniony interes administratora danych, jakim jest zapewnienie
									prawidłowego funkcjonowania strony internetowej oraz systemu nauczania online
								</li>
								<li>
									Intuition Machines, Inc. – dostawca usługi hCaptcha, wykorzystywanej do zabezpieczania formularzy
									kontaktowych
								</li>
							</ul>
						</div>
						<div className='terms-and-conditions__box'>
							<h2>6. Przechowywanie danych</h2>
							<p>
								Twoje dane osobowe będą przechowywane przez okres niezbędny do realizacji celów, w jakich zostały
								zebrane, w tym przez okres obowiązywania umowy o świadczenie usług edukacyjnych lub do momentu wycofania
								zgody na przetwarzanie danych, jeśli taką zgodę wyraziłeś/aś.
							</p>
						</div>
						<div className='terms-and-conditions__box'>
							<h2>7. Przekazywanie danych</h2>
							<p>Twoje dane osobowe mogą być przekazywane następującym podmiotom:</p>
							<ul className='terms-and-conditions__cookie-box-ul'>
								<li>
									Firmom świadczącym usługi IT, w tym hostingowe, na rzecz Firmy, które pomagają w utrzymaniu strony
									internetowej oraz systemu nauczania online
								</li>
								<li>Podmiotom zajmującym się obsługą płatności (w przypadku płatnych usług)</li>
								<li>Podmiotom upoważnionym do uzyskania danych na podstawie przepisów prawa</li>
								<li>
									Usłudze Supabase, która przechowuje dane użytkowników oraz pomaga w zarządzaniu bazą danych i
									uwierzytelnianiem. Przetwarzanie danych przez Supabase odbywa się zgodnie z ich Polityką Prywatności,
									dostępną pod adresem:{' '}
									<a href='https://supabase.com/privacy' target='_blank' rel='noopener noreferrer'>
										supabase.com/privacy
									</a>
								</li>
								<li>
									Usłudze Formcarry – do obsługi formularzy kontaktowych. Więcej informacji znajduje się w polityce
									prywatności Formcarry:{' '}
									<a href='https://formcarry.com/privacy' target='_blank' rel='noopener noreferrer'>
										formcarry.com/privacy
									</a>
								</li>
								<li>
									Usłudze hCaptcha, dostarczanej przez Intuition Machines, Inc., służącej do ochrony formularzy przed
									spamem i nadużyciami. Informacje o przetwarzaniu danych dostępne są pod adresem:{' '}
									<a href='https://www.hcaptcha.com/privacy' target='_blank' rel='noopener noreferrer'>
										hcaptcha.com/privacy
									</a>
								</li>
							</ul>
						</div>
						<div className='terms-and-conditions__box'>
							<h2>8. hCaptcha</h2>
							<p>
								Na naszej stronie internetowej korzystamy z usługi hCaptcha, dostarczanej przez Intuition Machines,
								Inc., 350 Alabama St, San Francisco, CA 94110, USA. Usługa ta służy do ochrony formularzy przed
								automatycznym wypełnianiem przez boty. hCaptcha analizuje zachowanie użytkownika (adres IP, dane
								techniczne urządzenia, czas interakcji), aby określić, czy mamy do czynienia z człowiekiem.
								Przetwarzanie danych przez hCaptcha odbywa się zgodnie z art. 6 ust. 1 lit. f RODO – uzasadniony interes
								administratora polegający na zapewnieniu bezpieczeństwa. Więcej informacji:{' '}
								<a href='https://www.hcaptcha.com/privacy' target='_blank' rel='noopener noreferrer'>
									hcaptcha.com/privacy
								</a>
							</p>
						</div>
						<div className='terms-and-conditions__box'>
							<h2>9. Twoje prawa</h2>
							<p>Zgodnie z przepisami RODO, przysługuje Ci szereg praw dotyczących Twoich danych osobowych, w tym:</p>
							<ul className='terms-and-conditions__special-ul'>
								<li>Prawo dostępu do swoich danych</li>
								<li>Prawo do sprostowania swoich danych</li>
								<li>Prawo do usunięcia danych (tzw. prawo do bycia zapomnianym)</li>
								<li>Prawo do ograniczenia przetwarzania danych</li>
								<li>Prawo do przenoszenia danych</li>
								<li>Prawo do sprzeciwu wobec przetwarzania danych</li>
							</ul>
							<p>Aby skorzystać ze swoich praw, skontaktuj się z nami pod adresem e-mail: [E-mail Firmy].</p>
						</div>
						<div className='terms-and-conditions__box'>
							<h2>10. Bezpieczeństwo danych</h2>
							<p>
								Dokładamy wszelkich starań, aby chronić Twoje dane osobowe przed dostępem osób nieupoważnionych, ich
								utratą, zniszczeniem lub uszkodzeniem. Stosujemy odpowiednie środki techniczne i organizacyjne w celu
								zapewnienia bezpieczeństwa przetwarzanych danych.
							</p>
						</div>
						<div className='terms-and-conditions__box'>
							<h2>11. Zmiany w Polityce Prywatności</h2>
							<p>
								Niniejsza polityka prywatności może ulec zmianie. W przypadku istotnych zmian w sposobie przetwarzania
								Twoich danych osobowych, poinformujemy Cię o tym poprzez zamieszczenie odpowiedniej informacji na naszej
								stronie internetowej. Zmiany wchodzą w życie w momencie ich opublikowania na stronie.
							</p>
						</div>
						<div className='terms-and-conditions__box'>
							<h2>12. Wstęp do warunków użytkowania</h2>
							<p>
								Korzystanie z naszej strony internetowej, usług edukacyjnych oraz systemu nauczania online jest możliwe
								wyłącznie na podstawie poniższych warunków użytkowania. Korzystając z naszej strony, zgadzasz się
								przestrzegać wszystkich postanowień niniejszych warunków.
							</p>
						</div>
						<div className='terms-and-conditions__box'>
							<h2>13. Rejestracja i dostęp do usług</h2>
							<p>
								Aby korzystać z systemu nauczania online, musisz się zarejestrować, podając wymagane dane osobowe (imię,
								nazwisko, adres e-mail oraz numer telefonu). Rejestracja jest dobrowolna, ale niezbędna do pełnego
								dostępu do naszych usług.
							</p>
						</div>
						<div className='terms-and-conditions__box'>
							<h2>14. Zasady korzystania z usług</h2>
							<p>Użytkownik zobowiązuje się do:</p>
							<ul>
								<li>Korzystania z usług zgodnie z obowiązującymi przepisami prawa</li>
								<li>Nieudostępniania swojego konta ani danych logowania osobom trzecim</li>
								<li>
									Nieprzesyłania treści niezgodnych z prawem, obraźliwych, wulgarnych lub naruszających prawa osób
									trzecich
								</li>
							</ul>
						</div>
						<div className='terms-and-conditions__box'>
							<h2>15. Płatności</h2>
							<p>
								W przypadku płatnych usług, użytkownik zobowiązuje się do uiszczenia stosownej opłaty zgodnie z
								cennikiem dostępnym na stronie internetowej. Płatności mogą być realizowane za pośrednictwem dostępnych
								metod płatności.
							</p>
						</div>
						<div className='terms-and-conditions__box'>
							<h2>16. Ograniczenie odpowiedzialności</h2>
							<p>Firma nie ponosi odpowiedzialności za:</p>
							<ul>
								<li>Jakiekolwiek straty wynikłe z niewłaściwego korzystania z usług</li>
								<li>
									Problemy techniczne, które mogą wystąpić na stronie internetowej lub w systemie nauczania online,
									które są poza naszą kontrolą
								</li>
								<li>Nieprawidłowości w danych przekazanych przez użytkownika</li>
							</ul>
						</div>
						<div className='terms-and-conditions__box'>
							<h2>17. Prawa własności intelektualnej</h2>
							<p>
								Wszystkie materiały, treści oraz prawa do systemu nauczania online i strony internetowej są własnością
								Firmy lub jej licencjodawców i są chronione prawem autorskim. Użytkownik nie może kopiować,
								rozpowszechniać ani w żaden sposób wykorzystywać materiałów dostępnych na stronie bez uprzedniej zgody
								Firmy.
							</p>
						</div>
						<div className='terms-and-conditions__box'>
							<h2>18. Zmiany w Warunkach Użytkowania</h2>
							<p>
								Firma zastrzega sobie prawo do zmiany warunków użytkowania w dowolnym czasie. Zmiany będą obowiązywać od
								momentu ich opublikowania na stronie internetowej.
							</p>
						</div>
						<div className='terms-and-conditions__box'>
							<h2>19. Kontakt</h2>
							<p>
								W razie pytań lub wątpliwości dotyczących Warunków Użytkowania lub Polityki Prywatności, prosimy o
								kontakt z administratorem danych:
							</p>
							<ul className='terms-and-conditions__special-ul'>
								<li>[Nazwa Firmy]</li>
								<li>E-mail: [E-mail Firmy]</li>
								<li>Telefon: [Telefon Firmy]</li>
							</ul>
							<p>Ostatnia aktualizacja: [data]</p>
						</div>
						<div className='terms-and-conditions__box'>
							<p>Wsparcie merytoryczne, kodowanie oraz wykonanie:</p>
							<a href='https://www.linkedin.com/in/konrad-wojtylo' target='_blank' rel='noreferrer'>
								Konrad Wojtyło
							</a>
						</div>
						<Link to='/' className='terms-and-conditions__btn' aria-label='Powrót na stronę główną'>
							Powrót
						</Link>
					</div>
				</section>
			</main>
		</>
	);
};

export default TermsAndConditions;
