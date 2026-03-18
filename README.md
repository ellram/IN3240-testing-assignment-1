# IN3240-testing
Fellesmappe for IN3240 for Brenna og Ramstad

Oppsettsguide for repoet: 

	1.	Klone repoet
      Åpne terminalen og kjør:
        git clone https://github.com/ellram/IN3240-testing.git
      Dette lager en lokal kopi av repoet.

	2.	Gå inn i mappen
        cd IN3240-testing

	3.	Lag en ny branch (valgfritt, men anbefalt)
        git checkout -b min-branch
      Dette gjør det tryggere å jobbe uten å påvirke main direkte.

	4.	Legg til/endre filer
      Gjør endringer i koden dine som vanlig.
      
	5.	Legg til endringer
        git add .
        
	6.	Commit endringer
        git commit -m "Beskriv hva du har gjort"
        
	7.	Push til GitHub
      Hvis du laget en ny branch:
        git push -u origin min-branch
      Hvis du jobber på main (vær forsiktig!):
        git push origin main

	8.	Oppdater lokalt repo
      Før du gjør nye endringer, hent siste versjon fra GitHub:
        git pull origin main

Happy testing.
