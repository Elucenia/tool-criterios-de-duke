<!-- ELUCENIA technical documentation · criterios-de-duke · es · no clinical/professional/rights approval -->

# Criterios Duke-ISCVID 2023

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/criterios-de-duke)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Criterio patológico: microorganismo en vegetación, tejido cardíaco, prótesis o émbolo (cultivo, histología o PCR), o endocarditis activa en la histología

`pato`

### Criterio mayor microbiológico: agente típico en ≥ 2 hemocultivos separados, agente ocasional en ≥ 3, PCR sanguínea positiva para Coxiella, Bartonella o T. whipplei, o serología específica (IgG de fase I contra C. burnetii \> 1:800; IgG contra Bartonella ≥ 1:800)

`maior_micro`

### Criterio mayor de imagen: vegetación, perforación, aneurisma, absceso, pseudoaneurisma o fístula en ecocardiografía/TC cardíaca; nueva regurgitación valvular significativa; nueva dehiscencia protésica; o captación anormal de FDG en PET/TC en válvula o electrodo

`maior_img`

### Criterio mayor quirúrgico: endocarditis documentada por inspección directa durante la cirugía cardíaca, únicamente en ausencia de un criterio mayor de imagen y de confirmación histológica o microbiológica posterior

`maior_cir`

### Menor: predisposición (endocarditis previa, prótesis valvular, reparación valvular, cardiopatía congénita, regurgitación o estenosis valvular, dispositivo intracardíaco, miocardiopatía hipertrófica, uso de drogas inyectables)

`men_pred`

### Menor: fiebre \> 38,0 °C

`men_febre`

### Menor: fenómenos vasculares (embolia arterial, infarto pulmonar séptico, absceso cerebral o esplénico, aneurisma micótico, hemorragia intracraneal, hemorragia conjuntival, lesiones de Janeway, púrpura purulenta)

`men_vasc`

### Menor: fenómenos inmunológicos (factor reumatoide positivo, nódulos de Osler, manchas de Roth, glomerulonefritis por inmunocomplejos)

`men_imuno`

### Menor: evidencia microbiológica que no cumple el criterio mayor

`men_micro`

### Menor: PET/TC con FDG anormal en los 3 meses posteriores a la implantación de prótesis, injerto o dispositivo

`men_img`

### Menor: nuevo soplo de regurgitación en la exploración física si no se dispone de ecocardiograma

`men_exame`

### Rechazo: un diagnóstico alternativo firme explica el cuadro

`rej_alt`

### Rechazo: sin recurrencia tras menos de 4 días de antibioterapia

`rej_res`

### Rechazo: sin evidencia anatomopatológica en cirugía o autopsia, con menos de 4 días de antibioterapia

`rej_pato`

## Edición del método

Duke-ISCVID 2023: combinaciones seleccionadas de la Tabla 1; criterio mayor quirúrgico condicionado por la Tabla 2, I.C, a la ausencia de un criterio mayor de imagen y de confirmación posterior; sin equivalencia automática con Duke 2000

## Fórmula documentada

Definida: criterio patológico, o 2 mayores, o 1 mayor + 3 menores, o 5 menores.

Posible: 1 mayor + 1 menor, o 3 menores.

Rechazada: diagnóstico alternativo firme, resolución sin recurrencia con menos de 4 días de antibióticos, sin evidencia patológica en cirugía/autopsia con menos de 4 días de antibióticos, o no cumple criterios de posible.

Recuento del criterio mayor quirúrgico: añade un criterio mayor solo cuando está seleccionado y no está seleccionado ningún criterio mayor de imagen ni el criterio patológico. Debe comprobarse la confirmación posterior prevista en la Tabla 2; el criterio mayor microbiológico de la sangre no equivale automáticamente a una confirmación posterior en tejido.

## Límites y población

Los criterios Duke-ISCVID 2023 dependen de definiciones específicas de microbiología, imagen, inspección intraoperatoria y condiciones predisponentes. Algunos microorganismos solo se clasifican como típicos en presencia de una prótesis intracardíaca. La edición 2023 también modifica requisitos de cultivos de la edición anterior; los recuentos aislados sin estas definiciones no reproducen el sistema completo. La Tabla 2, sección I.C, limita el criterio mayor quirúrgico a la ausencia de un criterio mayor de imagen y de confirmación histológica o microbiológica posterior. En esta interfaz, seleccionar el criterio patológico impide sumar además el criterio mayor quirúrgico; el criterio mayor microbiológico de la sangre permanece separado. Quien rellena el formulario debe comprobar la confirmación posterior y las definiciones de la fuente: los campos booleanos no registran toda la cronología ni cómo se obtuvieron los hallazgos. La comprobación corrige solo este recuento y sus combinaciones seleccionadas; no valida el diagnóstico, el rendimiento clínico, el tratamiento ni el método completo.

## Referencias

- [Fowler VG et al. The 2023 Duke-International Society for Cardiovascular Infectious Diseases Criteria for Infective Endocarditis: Updating the Modified Duke Criteria. Clin Infect Dis, 2023.](https://doi.org/10.1093/cid/ciad271)

- [Li JS et al. Proposed modifications to the Duke criteria for the diagnosis of infective endocarditis. Clin Infect Dis, 2000.](https://doi.org/10.1086/313753)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
