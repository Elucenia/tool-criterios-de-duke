<!-- ELUCENIA technical documentation · criterios-de-duke · it · no clinical/professional/rights approval -->

# Criteri Duke-ISCVID 2023

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/criterios-de-duke)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Criterio patologico: microrganismo in vegetazione, tessuto cardiaco, protesi o embolo (coltura, istologia o PCR), oppure endocardite attiva all’istologia

`pato`

### Criterio maggiore microbiologico: agente tipico in ≥ 2 emocolture separate, agente occasionale in ≥ 3, PCR ematica positiva per Coxiella, Bartonella o T. whipplei, o sierologia specifica (IgG di fase I contro C. burnetii \> 1:800; IgG contro Bartonella ≥ 1:800)

`maior_micro`

### Criterio maggiore di imaging: vegetazione, perforazione, aneurisma, ascesso, pseudoaneurisma o fistola all’ecocardiografia/TC cardiaca; nuova regurgitazione valvolare significativa; nuova deiscenza protesica; o captazione anomala di FDG alla PET/TC su valvola o elettrodo

`maior_img`

### Criterio maggiore chirurgico: endocardite documentata mediante ispezione diretta durante la chirurgia cardiaca, solo in assenza di un criterio maggiore di imaging e di successiva conferma istologica o microbiologica

`maior_cir`

### Minore: predisposizione (endocardite pregressa, protesi valvolare, riparazione valvolare, cardiopatia congenita, regurgitazione o stenosi valvolare, dispositivo intracardiaco, cardiomiopatia ipertrofica, uso di droghe iniettabili)

`men_pred`

### Minore: febbre \> 38,0 °C

`men_febre`

### Minore: fenomeni vascolari (embolia arteriosa, infarto polmonare settico, ascesso cerebrale o splenico, aneurisma micotico, emorragia intracranica, emorragia congiuntivale, lesioni di Janeway, porpora purulenta)

`men_vasc`

### Minore: fenomeni immunologici (fattore reumatoide positivo, noduli di Osler, macchie di Roth, glomerulonefrite da immunocomplessi)

`men_imuno`

### Minore: evidenza microbiologica che non soddisfa il criterio maggiore

`men_micro`

### Minore: PET/TC con FDG anomalo entro 3 mesi dall’impianto di protesi, innesto o dispositivo

`men_img`

### Minore: nuovo soffio da regurgitazione all’esame obiettivo se l’ecocardiogramma non è disponibile

`men_exame`

### Esclusione: una diagnosi alternativa certa spiega il quadro

`rej_alt`

### Esclusione: nessuna recidiva dopo meno di 4 giorni di terapia antibiotica

`rej_res`

### Esclusione: nessuna evidenza patologica all’intervento o all’autopsia, con meno di 4 giorni di terapia antibiotica

`rej_pato`

## Edizione del metodo

Duke-ISCVID 2023: combinazioni selezionate della Tabella 1; criterio maggiore chirurgico subordinato dalla Tabella 2, I.C, all’assenza di criterio maggiore di imaging e di conferma successiva; nessuna equivalenza automatica con Duke 2000

## Formula documentata

Definita: criterio patologico, o 2 maggiori, o 1 maggiore + 3 minori, o 5 minori.

Possibile: 1 maggiore + 1 minore, o 3 minori.

Esclusa: diagnosi alternativa certa, risoluzione senza recidiva con meno di 4 giorni di antibiotici, nessuna evidenza patologica a chirurgia/autopsia con meno di 4 giorni di antibiotici, o non soddisfa i criteri di possibile.

Conteggio del criterio maggiore chirurgico: aggiunge un criterio maggiore solo quando è selezionato e non sono selezionati né un criterio maggiore di imaging né il criterio patologico. Va verificata la conferma successiva prevista dalla Tabella 2; il criterio maggiore microbiologico del sangue non equivale automaticamente a una successiva conferma nel tessuto.

## Limiti e popolazione

I criteri Duke-ISCVID 2023 dipendono da definizioni specifiche di microbiologia, diagnostica per immagini, ispezione intraoperatoria e condizioni predisponenti. Alcuni microrganismi sono classificati come tipici solo in presenza di una protesi intracardiaca. L’edizione 2023 modifica anche i requisiti delle colture rispetto all’edizione precedente; i soli conteggi, senza queste definizioni, non riproducono il sistema completo. La Tabella 2, sezione I.C, limita il criterio maggiore chirurgico all’assenza di un criterio maggiore di imaging e di successiva conferma istologica o microbiologica. In questa interfaccia, selezionare il criterio patologico impedisce di conteggiare anche il criterio maggiore chirurgico; il criterio maggiore microbiologico del sangue resta separato. Chi compila deve verificare la conferma successiva e le definizioni della fonte: i campi booleani non registrano l’intera cronologia né come sono stati accertati i reperti. La verifica corregge solo questo conteggio e le combinazioni selezionate; non convalida la diagnosi, le prestazioni cliniche, il trattamento o il metodo completo.

## Riferimenti

- [Fowler VG et al. The 2023 Duke-International Society for Cardiovascular Infectious Diseases Criteria for Infective Endocarditis: Updating the Modified Duke Criteria. Clin Infect Dis, 2023.](https://doi.org/10.1093/cid/ciad271)

- [Li JS et al. Proposed modifications to the Duke criteria for the diagnosis of infective endocarditis. Clin Infect Dis, 2000.](https://doi.org/10.1086/313753)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

Endocardite definita (criteri clinici)

| Dettagli del risultato | |
| --- | --- |
| Criteri maggiori | 2 |
| Criteri minori | 0 |


### 2

Endocardite definita (criteri clinici)

| Dettagli del risultato | |
| --- | --- |
| Criteri maggiori | 1 |
| Criteri minori | 3 |


### 3

Endocardite definita (criteri clinici)

| Dettagli del risultato | |
| --- | --- |
| Criteri maggiori | 0 |
| Criteri minori | 5 |


### 4

Endocardite definita (criterio patologico)

| Dettagli del risultato | |
| --- | --- |
| Criteri maggiori | 0 |
| Criteri minori | 0 |


### 5

Endocardite possibile

| Dettagli del risultato | |
| --- | --- |
| Criteri maggiori | 1 |
| Criteri minori | 2 |

Endocardite possibile: ripetere le emocolture prima degli antibiotici quando possibile e ampliare l’imaging (ecocardiogramma transesofageo, TC cardiaca o PET/CT).


### 6

Endocardite possibile

| Dettagli del risultato | |
| --- | --- |
| Criteri maggiori | 0 |
| Criteri minori | 3 |

Endocardite possibile: ripetere le emocolture prima degli antibiotici quando possibile e ampliare l’imaging (ecocardiogramma transesofageo, TC cardiaca o PET/CT).


### 7

Endocardite esclusa (presente criterio di esclusione)

| Dettagli del risultato | |
| --- | --- |
| Criteri maggiori | 0 |
| Criteri minori | 3 |


### 8

Endocardite esclusa (non soddisfa i criteri di possibile)

| Dettagli del risultato | |
| --- | --- |
| Criteri maggiori | 0 |
| Criteri minori | 2 |

