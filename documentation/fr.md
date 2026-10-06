<!-- ELUCENIA technical documentation · criterios-de-duke · fr · no clinical/professional/rights approval -->

# Critères Duke-ISCVID 2023

[conditions, sources et autorisations](https://elucenia.org/fr/outils/criterios-de-duke)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Critère pathologique : microorganisme dans une végétation, un tissu cardiaque, une prothèse ou un embole (culture, histologie ou PCR), ou endocardite active en histologie

`pato`

### Critère majeur microbiologique : agent typique dans ≥ 2 hémocultures distinctes, agent occasionnel dans ≥ 3, PCR sanguine positive pour Coxiella, Bartonella ou T. whipplei, ou sérologie spécifique (IgG de phase I contre C. burnetii \> 1:800 ; IgG contre Bartonella ≥ 1:800)

`maior_micro`

### Critère majeur d’imagerie : végétation, perforation, anévrisme, abcès, pseudoanévrisme ou fistule à l’échographie/TDM cardiaque ; nouvelle régurgitation valvulaire significative ; nouvelle désinsertion de prothèse ; ou captation anormale de FDG à la TEP/TDM d’une valve ou d’une sonde

`maior_img`

### Critère majeur chirurgical : endocardite documentée par inspection directe pendant la chirurgie cardiaque, uniquement en l’absence de critère majeur d’imagerie et de confirmation histologique ou microbiologique ultérieure

`maior_cir`

### Mineur : prédisposition (endocardite antérieure, prothèse valvulaire, réparation valvulaire, cardiopathie congénitale, régurgitation ou sténose valvulaire, dispositif intracardiaque, cardiomyopathie hypertrophique, usage de drogues injectables)

`men_pred`

### Mineur : fièvre \> 38,0 °C

`men_febre`

### Mineur : phénomènes vasculaires (embolie artérielle, infarctus pulmonaire septique, abcès cérébral ou splénique, anévrisme mycotique, hémorragie intracrânienne, hémorragie conjonctivale, lésions de Janeway, purpura purulent)

`men_vasc`

### Mineur : phénomènes immunologiques (facteur rhumatoïde positif, nodules d’Osler, taches de Roth, glomérulonéphrite à complexes immuns)

`men_imuno`

### Mineur : preuve microbiologique ne remplissant pas un critère majeur

`men_micro`

### Mineur : TEP/TDM au FDG anormale dans les 3 mois suivant l’implantation d’une prothèse, d’un greffon ou d’un dispositif

`men_img`

### Mineur : nouveau souffle de régurgitation à l’examen clinique si l’échocardiographie n’est pas disponible

`men_exame`

### Rejet : un diagnostic alternatif certain explique le tableau

`rej_alt`

### Rejet : absence de récidive après moins de 4 jours d’antibiothérapie

`rej_res`

### Rejet : absence de preuve anatomopathologique à la chirurgie ou à l’autopsie, après moins de 4 jours d’antibiothérapie

`rej_pato`

## Édition de la méthode

Duke-ISCVID 2023 : combinaisons sélectionnées du Tableau 1 ; critère majeur chirurgical soumis à la condition du Tableau 2, I.C, d’absence de critère majeur d’imagerie et de confirmation ultérieure ; aucune équivalence automatique avec Duke 2000

## Formule documentée

Certaine : critère pathologique, ou 2 majeurs, ou 1 majeur + 3 mineurs, ou 5 mineurs.

Possible : 1 majeur + 1 mineur, ou 3 mineurs.

Exclue : diagnostic alternatif certain, résolution sans récidive après moins de 4 jours d’antibiotiques, absence de preuve pathologique en chirurgie/autopsie après moins de 4 jours d’antibiotiques, ou ne remplit pas les critères de possible.

Comptage du critère majeur chirurgical : ajoute un critère majeur uniquement s’il est sélectionné et si ni un critère majeur d’imagerie ni le critère pathologique ne sont sélectionnés. La confirmation ultérieure prévue dans le Tableau 2 doit être vérifiée ; un critère majeur microbiologique sanguin ne constitue pas automatiquement une confirmation ultérieure dans un tissu.

## Limites et population

Les critères Duke-ISCVID 2023 dépendent de définitions précises de la microbiologie, de l’imagerie, de l’inspection peropératoire et des facteurs prédisposants. Certains microorganismes ne sont considérés comme typiques qu’en présence d’une prothèse intracardiaque. L’édition 2023 modifie aussi les exigences de cultures de l’édition précédente ; des comptes isolés sans ces définitions ne reproduisent pas le système complet. Le Tableau 2, section I.C, limite le critère majeur chirurgical à l’absence de critère majeur d’imagerie et de confirmation histologique ou microbiologique ultérieure. Dans cette interface, sélectionner le critère pathologique empêche d’ajouter le critère majeur chirurgical ; le critère majeur microbiologique sanguin reste distinct. La personne qui remplit le formulaire doit vérifier la confirmation ultérieure et les définitions de la source : les champs booléens ne consignent ni toute la chronologie ni la manière dont les observations ont été établies. Cette vérification corrige seulement ce comptage et ses combinaisons sélectionnées ; elle ne valide ni le diagnostic, ni les performances cliniques, ni le traitement, ni la méthode complète.

## Références

- [Fowler VG et al. The 2023 Duke-International Society for Cardiovascular Infectious Diseases Criteria for Infective Endocarditis: Updating the Modified Duke Criteria. Clin Infect Dis, 2023.](https://doi.org/10.1093/cid/ciad271)

- [Li JS et al. Proposed modifications to the Duke criteria for the diagnosis of infective endocarditis. Clin Infect Dis, 2000.](https://doi.org/10.1086/313753)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

Endocardite certaine (critères cliniques)

| Détails du résultat | |
| --- | --- |
| Critères majeurs | 2 |
| Critères mineurs | 0 |


### 2

Endocardite certaine (critères cliniques)

| Détails du résultat | |
| --- | --- |
| Critères majeurs | 1 |
| Critères mineurs | 3 |


### 3

Endocardite certaine (critères cliniques)

| Détails du résultat | |
| --- | --- |
| Critères majeurs | 0 |
| Critères mineurs | 5 |


### 4

Endocardite certaine (critère pathologique)

| Détails du résultat | |
| --- | --- |
| Critères majeurs | 0 |
| Critères mineurs | 0 |


### 5

Endocardite possible

| Détails du résultat | |
| --- | --- |
| Critères majeurs | 1 |
| Critères mineurs | 2 |

Endocardite possible : répéter les hémocultures avant les antibiotiques lorsque cela est possible et élargir l’imagerie (échocardiographie transœsophagienne, TDM cardiaque ou TEP/TDM).


### 6

Endocardite possible

| Détails du résultat | |
| --- | --- |
| Critères majeurs | 0 |
| Critères mineurs | 3 |

Endocardite possible : répéter les hémocultures avant les antibiotiques lorsque cela est possible et élargir l’imagerie (échocardiographie transœsophagienne, TDM cardiaque ou TEP/TDM).


### 7

Endocardite rejetée (critère d’exclusion présent)

| Détails du résultat | |
| --- | --- |
| Critères majeurs | 0 |
| Critères mineurs | 3 |


### 8

Endocardite rejetée (ne remplit pas les critères de possible)

| Détails du résultat | |
| --- | --- |
| Critères majeurs | 0 |
| Critères mineurs | 2 |

