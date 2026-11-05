---
layout: default
---
# Geen verbindingen
{: #no-connects}

Markeringen voor geen verbinding geven aan dat een pin bewust niet is aangesloten.

Gebruik ze wanneer een symboolpin niet in uw ontwerp wordt gebruikt, maar u dit
expliciet wilt maken voor iedereen die het schema leest en voor de controle van de ontwerpregels.

## Waarvoor markeringen voor geen verbinding dienen
{: #what-no-connects-are-for}

- bewust ongebruikte pinnen documenteren,
- onduidelijkheid tijdens de beoordeling verminderen,
- DRC-waarschuwingen en -fouten voorkomen voor pinnen die bewust open blijven.

Typische voorbeelden zijn ongebruikte logische ingangen, ongebruikte op-amp-kanalen of ongebruikte
connectorpinnen.

## Markeringen voor geen verbinding plaatsen
{: #how-to-place-no-connects}

1. Selecteer het gereedschap Geen verbinding (No Connect).
2. Plaats de markering rechtstreeks op de ongebruikte pin (of het bedoelde open aansluitpunt).
3. Herhaal dit voor elke bewust niet-aangesloten pin.

Markeringen voor geen verbinding zijn eenvoudige markeringen: na plaatsing kunnen ze worden verplaatst of verwijderd,
maar verder kunnen ze niet worden bewerkt.

## Aanbevolen werkwijzen
{: #best-practices}

- Gebruik markeringen voor geen verbinding consequent voor alle pinnen die bewust open blijven.
- Plaats geen markeringen voor geen verbinding op pinnen die later moeten worden bedraad.
- Voer na grote wijzigingen DRC uit om nieuw niet-aangesloten pinnen op te sporen.

- Terug naar [Tekenen](../User-guide/)
- Terug naar [v4-inhoud](../CONTENTS/)
