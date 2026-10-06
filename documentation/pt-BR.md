<!-- ELUCENIA technical documentation · criterios-de-duke · pt-BR · no clinical/professional/rights approval -->

# Critérios de Duke-ISCVID 2023

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/criterios-de-duke)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Critério patológico: microrganismo em vegetação, tecido cardíaco, prótese ou êmbolo (cultura, histologia ou PCR), ou endocardite ativa na histologia

`pato`

### Maior microbiológico: agente típico em ≥ 2 hemoculturas separadas, agente ocasional em ≥ 3, PCR positiva no sangue para Coxiella, Bartonella ou T. whipplei, ou sorologia específica (IgG anti-fase I de C. burnetii \> 1:800; IgG para Bartonella ≥ 1:800)

`maior_micro`

### Maior de imagem: vegetação, perfuração, aneurisma, abscesso, pseudoaneurisma ou fístula ao eco/TC cardíaca; regurgitação valvar nova significativa; deiscência nova de prótese; ou PET/CT com FDG alterado em valva ou eletrodo

`maior_img`

### Maior cirúrgico: endocardite documentada por inspeção direta na cirurgia cardíaca, apenas na ausência de critério maior de imagem e de confirmação histológica ou microbiológica posterior

`maior_cir`

### Menor: predisposição (endocardite prévia, prótese valvar, reparo valvar, cardiopatia congênita, regurgitação ou estenose valvar, dispositivo intracardíaco, cardiomiopatia hipertrófica, uso de drogas injetáveis)

`men_pred`

### Menor: febre \> 38,0 °C

`men_febre`

### Menor: fenômenos vasculares (embolia arterial, infarto séptico pulmonar, abscesso cerebral ou esplênico, aneurisma micótico, hemorragia intracraniana, hemorragia conjuntival, lesões de Janeway, púrpura purulenta)

`men_vasc`

### Menor: fenômenos imunológicos (fator reumatoide positivo, nódulos de Osler, manchas de Roth, glomerulonefrite por imunocomplexos)

`men_imuno`

### Menor: evidência microbiológica que não preenche o critério maior

`men_micro`

### Menor: PET/CT com FDG alterado até 3 meses após implante de prótese, enxerto ou dispositivo

`men_img`

### Menor: sopro de regurgitação novo ao exame físico, se o ecocardiograma não estiver disponível

`men_exame`

### Rejeição: diagnóstico alternativo firme que explica o quadro

`rej_alt`

### Rejeição: sem recorrência após antibioticoterapia por menos de 4 dias

`rej_res`

### Rejeição: sem evidência patológica na cirurgia ou necrópsia, com antibioticoterapia por menos de 4 dias

`rej_pato`

## Edição do método

Duke-ISCVID 2023: combinações selecionadas da Tabela 1; maior cirúrgico condicionado pela Tabela 2, I.C, à ausência de maior de imagem e de confirmação posterior; sem equivalência automática com Duke 2000

## Fórmula documentada

Definida: critério patológico, ou 2 maiores, ou 1 maior + 3 menores, ou 5 menores.

Possível: 1 maior + 1 menor, ou 3 menores.

Rejeitada: diagnóstico alternativo firme, resolução sem recorrência com menos de 4 dias de antibiótico, ausência de evidência patológica na cirurgia/necrópsia com menos de 4 dias de antibiótico, ou não preenche os critérios de possível.

Contagem do maior cirúrgico: só acrescenta um critério maior quando está selecionado e não há maior de imagem nem critério patológico selecionado. A confirmação posterior prevista na Tabela 2 deve ser verificada; o maior microbiológico do sangue não é automaticamente confirmação posterior em tecido.

## Limites e população

Os critérios Duke-ISCVID 2023 dependem de definições específicas de microbiologia, imagem, inspeção intraoperatória e condições predisponentes. Alguns microrganismos só são classificados como típicos na presença de prótese intracardíaca. A edição 2023 também altera exigências de culturas da edição anterior; contagens isoladas sem essas definições não reproduzem o sistema completo. A Tabela 2, seção I.C, limita o maior cirúrgico à ausência de maior de imagem e de confirmação histológica ou microbiológica posterior. Nesta interface, selecionar o critério patológico impede a soma adicional do maior cirúrgico; o maior microbiológico do sangue permanece separado. A pessoa que preenche deve verificar a confirmação posterior e as definições da fonte: os campos booleanos não registram toda a cronologia ou a aquisição dos achados. A conferência corrige somente esta contagem e suas combinações selecionadas; não valida diagnóstico, desempenho clínico, tratamento ou o método completo.

## Referências

- [Fowler VG et al. The 2023 Duke-International Society for Cardiovascular Infectious Diseases Criteria for Infective Endocarditis: Updating the Modified Duke Criteria. Clin Infect Dis, 2023.](https://doi.org/10.1093/cid/ciad271)

- [Li JS et al. Proposed modifications to the Duke criteria for the diagnosis of infective endocarditis. Clin Infect Dis, 2000.](https://doi.org/10.1086/313753)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

Endocardite definida (critérios clínicos)

| Detalhes do resultado | |
| --- | --- |
| Critérios maiores | 2 |
| Critérios menores | 0 |


### 2

Endocardite definida (critérios clínicos)

| Detalhes do resultado | |
| --- | --- |
| Critérios maiores | 1 |
| Critérios menores | 3 |


### 3

Endocardite definida (critérios clínicos)

| Detalhes do resultado | |
| --- | --- |
| Critérios maiores | 0 |
| Critérios menores | 5 |


### 4

Endocardite definida (critério patológico)

| Detalhes do resultado | |
| --- | --- |
| Critérios maiores | 0 |
| Critérios menores | 0 |


### 5

Endocardite possível

| Detalhes do resultado | |
| --- | --- |
| Critérios maiores | 1 |
| Critérios menores | 2 |

Endocardite possível: repita hemoculturas antes de antibiótico quando possível e amplie a imagem (ecocardiograma transesofágico, TC cardíaca ou PET/CT).


### 6

Endocardite possível

| Detalhes do resultado | |
| --- | --- |
| Critérios maiores | 0 |
| Critérios menores | 3 |

Endocardite possível: repita hemoculturas antes de antibiótico quando possível e amplie a imagem (ecocardiograma transesofágico, TC cardíaca ou PET/CT).


### 7

Endocardite rejeitada (critério de exclusão presente)

| Detalhes do resultado | |
| --- | --- |
| Critérios maiores | 0 |
| Critérios menores | 3 |


### 8

Endocardite rejeitada (não preenche critérios de possível)

| Detalhes do resultado | |
| --- | --- |
| Critérios maiores | 0 |
| Critérios menores | 2 |

