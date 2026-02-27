# 🅰️ PEC 5 - Frameworks: Formularios en Angular

Esta entrega contiene la resolución de la **PEC 5** de la asignatura **Desarrollo Front-end con Frameworks Javascript** de la UOC. El objetivo principal de esta práctica es dominar la creación, validación y gestión del estado de los formularios en Angular, implementando tanto la estrategia basada en plantillas (*Template-driven*) como la estrategia basada en el modelo (*Reactive Forms*).

## 📂 Estructura del repositorio

El proyecto mantiene la arquitectura de las entregas anteriores, diviendo la teoría de la práctica:

```text
PEC5/
├── README.md
├── PEC5_Ej_Teor/
│   ├── PEC5_Ej1_respuestas_teoria.md
│   └── PEC5_Ej4_respuestas_teoria.md
└── PEC5_Ej_Prac/
    └── ecommerce/
```

## 📝 Descripción de los ejercicios

### 📚 Bloque Teórico (```PEC5_Ej_Teor```)

Análisis detallado de las estrategias de formularios en Angular:

* **```Ej1```:** Comparativa entre formularios *Template-driven* (ideales para casos simples, asíncronos y gestionados por directivas como ```ngModel```) y formularios *Reactivos* (síncronos, escalables y gestionados desde TypeScript mediante ```FormGroup``` y ```FormControl```). Explicación de las clases de estado CSS automáticas (```ng-valid```, ```ng-dirty```, ```ng-touched```).

* **```Ej4```:** Profundización en las herramientas de *Reactive Forms* (FormBuilder). Incluye una tabla resumen con todos los validadores síncronos y asíncronos nativos de Angular (```min```, ```max```, ```pattern```, ```email```, ```compose```, etc.) y el desglose de los estados lógicos de los controles de formulario.

### 💻 Bloque Práctico (```PEC5_Ej_Prac/ecommerce```)

Se han creado dos nuevos componentes *standalone* para la creación de artículos, abordando el mismo problema desde los dos enfoques que ofrece Angular:

#### 1. Formulario por Template (```article-new-template```)

* Componente que delega la lógica de validación a la plantilla HTML.

* Utiliza directivas como ```required```, ```min="0"``` y ```pattern``` nativas de HTML5 interceptadas por Angular.

* Hace uso de variables de referencia locales (ej. ```#articleName="ngModel"```) para mostrar mensajes de error condicionandos a la interacción del usuario (```dirty```).

* Emplea ```ngModelGroup="article"``` para estructurar el objeto de salida en el envío (submit).

#### 2. Formulario Reactivo (```article-new-reactive```)
* Componente que delega la lógica y el control del estado al archivo TypeScript.

* Utiliza el servicio ```FormBuilder``` para construir un modelo de datos estructurado.

* Implementa validadores nativos (```Validators.required```, ```Validators.min```, ```Validators.pattern```).

* Validador Personalizado: Se ha implementado un validador propio (```NameArticleValidator.nameArticleValidator```) que invalida el formulario si el usuario intenta introducir nombres de prueba como *'prueba'*, *'test'*, *'mock'* o *'fake'*.

* La vista HTML se sincroniza con el modelo a través de las directivas ```[formGroup]``` y ```formControlName```.

## 🚀 Instalación y ejecución

Para ejecutar este proyecto en local, es necesario disponer de Node.js y Angular CLI instalados globalmente (```npm install -g @angular/cli```).

1. Acceder al directorio de la aplicación:
   ```bash
   cd PEC5_Ej_Prac/ecommerce
   ```

2. Instalar las dependencias del proyecto:
   ```bash
   npm i
   ```

3. Levantar el servidor de desarrollo:
   ```bash
   ng serve
   ```
   La aplicación se abrirá automáticamente en tu navegador por defecto (```http://localhost:4200/```).