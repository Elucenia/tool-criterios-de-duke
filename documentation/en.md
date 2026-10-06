<!-- ELUCENIA technical documentation · criterios-de-duke · en · no clinical/professional/rights approval -->

# 2023 Duke–ISCVID criteria

[conditions, sources and permissions](https://elucenia.org/en/tools/criterios-de-duke)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Pathological criterion: microorganism in vegetation, cardiac tissue, prosthesis or embolus (culture, histology or PCR), or active endocarditis on histology

`pato`

### Major microbiological criterion: typical organism in ≥ 2 separate blood cultures, occasional organism in ≥ 3, blood PCR positive for Coxiella, Bartonella or T. whipplei, or specific serology (phase I IgG against C. burnetii \> 1:800; IgG against Bartonella ≥ 1:800)

`maior_micro`

### Major imaging criterion: vegetation, perforation, aneurysm, abscess, pseudoaneurysm or fistula on echocardiography/cardiac CT; significant new valvular regurgitation; new prosthetic dehiscence; or abnormal FDG uptake on PET/CT in a valve or lead

`maior_img`

### Surgical major criterion: endocarditis documented by direct inspection during cardiac surgery, only in the absence of a major imaging criterion and subsequent histologic or microbiologic confirmation

`maior_cir`

### Minor: predisposition (previous endocarditis, prosthetic valve, valve repair, congenital heart disease, valve regurgitation or stenosis, intracardiac device, hypertrophic cardiomyopathy, injection drug use)

`men_pred`

### Minor: fever \> 38.0 °C

`men_febre`

### Minor: vascular phenomena (arterial embolism, septic pulmonary infarction, cerebral or splenic abscess, mycotic aneurysm, intracranial hemorrhage, conjunctival hemorrhage, Janeway lesions, purulent purpura)

`men_vasc`

### Minor: immunological phenomena (positive rheumatoid factor, Osler nodes, Roth spots, immune-complex glomerulonephritis)

`men_imuno`

### Minor: microbiological evidence that does not meet a major criterion

`men_micro`

### Minor: abnormal FDG PET/CT within 3 months of prosthesis, graft or device implantation

`men_img`

### Minor: new regurgitant murmur on physical examination if echocardiography is unavailable

`men_exame`

### Rejected: a firm alternative diagnosis explains the presentation

`rej_alt`

### Rejected: no recurrence after fewer than 4 days of antibiotic therapy

`rej_res`

### Rejected: no pathological evidence at surgery or autopsy, with fewer than 4 days of antibiotic therapy

`rej_pato`

## Method edition

Duke-ISCVID 2023: selected Table 1 combinations; the surgical major criterion is subject to Table 2, I.C, requiring the absence of a major imaging criterion and of subsequent confirmation; no automatic equivalence with Duke 2000

## Documented formula

Definite: pathological criterion, or 2 major, or 1 major + 3 minor, or 5 minor.

Possible: 1 major + 1 minor, or 3 minor.

Rejected: firm alternative diagnosis, resolution without recurrence after less than 4 days of antibiotics, no pathological evidence at surgery/autopsy after less than 4 days of antibiotics, or does not meet possible criteria.

Surgical major count: adds one major criterion only when selected and neither a major imaging criterion nor the pathological criterion is selected. The subsequent confirmation described in Table 2 must be checked; a blood microbiological major criterion is not automatically subsequent tissue confirmation.

## Limits and population

The Duke-ISCVID 2023 criteria depend on specific definitions for microbiology, imaging, intraoperative inspection and predisposing conditions. Some microorganisms are classified as typical only in the presence of an intracardiac prosthesis. The 2023 edition also changes culture requirements from the previous edition; counts alone without these definitions do not reproduce the complete system. Table 2, section I.C, restricts the surgical major criterion to the absence of a major imaging criterion and subsequent histologic or microbiologic confirmation. In this interface, selecting the pathological criterion prevents an additional surgical major count; the blood microbiological major criterion remains separate. The person completing the form must check subsequent confirmation and the source definitions: the Boolean fields do not record the entire chronology or how findings were established. This check corrects only this count and its selected combinations; it does not validate diagnosis, clinical performance, treatment or the complete method.

## References

- [Fowler VG et al. The 2023 Duke-International Society for Cardiovascular Infectious Diseases Criteria for Infective Endocarditis: Updating the Modified Duke Criteria. Clin Infect Dis, 2023.](https://doi.org/10.1093/cid/ciad271)

- [Li JS et al. Proposed modifications to the Duke criteria for the diagnosis of infective endocarditis. Clin Infect Dis, 2000.](https://doi.org/10.1086/313753)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Documented results

The information below preserves the method outputs for synthetic examples. It does not constitute independent clinical validation.

### 1

Definite endocarditis (clinical criteria)

| Result details | |
| --- | --- |
| Major criteria | 2 |
| Minor criteria | 0 |


### 2

Definite endocarditis (clinical criteria)

| Result details | |
| --- | --- |
| Major criteria | 1 |
| Minor criteria | 3 |


### 3

Definite endocarditis (clinical criteria)

| Result details | |
| --- | --- |
| Major criteria | 0 |
| Minor criteria | 5 |


### 4

Definite endocarditis (pathological criterion)

| Result details | |
| --- | --- |
| Major criteria | 0 |
| Minor criteria | 0 |


### 5

Possible endocarditis

| Result details | |
| --- | --- |
| Major criteria | 1 |
| Minor criteria | 2 |

Possible endocarditis: repeat blood cultures before antibiotics when possible and expand imaging (transesophageal echocardiogram, cardiac CT, or PET/CT).


### 6

Possible endocarditis

| Result details | |
| --- | --- |
| Major criteria | 0 |
| Minor criteria | 3 |

Possible endocarditis: repeat blood cultures before antibiotics when possible and expand imaging (transesophageal echocardiogram, cardiac CT, or PET/CT).


### 7

Rejected endocarditis (exclusion criterion present)

| Result details | |
| --- | --- |
| Major criteria | 0 |
| Minor criteria | 3 |


### 8

Rejected endocarditis (does not meet possible criteria)

| Result details | |
| --- | --- |
| Major criteria | 0 |
| Minor criteria | 2 |

