# 📂 ONE - Alura | Especialización en Data Science & Inteligencia Artificial

Este repositorio reúne los proyectos desarrollados durante la especialización **ONE Tech Foundation – Alura (2025)**, enfocados en **programación, análisis de datos, Machine Learning y resolución de problemas reales**.  

Cada carpeta corresponde a un **challenge práctico**, con código fuente, notebooks, documentación y resultados.

---

## 🚀 Proyectos Incluidos

### 1️⃣ Challenge Amigo Secreto
**Carpeta:** `01-challenge-amigo-secreto/`

- **Introducción:** Aplicación web interactiva para realizar sorteos de *Amigo Secreto*.  
- **Objetivo:** Practicar lógica de programación en **JavaScript**, aplicando funciones, arrays, condicionales y validaciones.  
- **Características:**
  - Validación de entradas vacías o duplicadas.  
  - Solo admite caracteres alfabéticos.  
  - Lista dinámica de participantes.  
  - Sorteo aleatorio si existen al menos dos nombres.  
- **Requisitos:** Navegador moderno con soporte para JavaScript.  
- **Ejecución:** Abrir `index.html` en el navegador.  

---

### 2️⃣ Proyecto Telecom X – Parte 1 (Análisis Exploratorio)
**Carpeta:** `02-challenge-telecom-churn-p1/`

- **Visión General:** Análisis de datos de clientes de **Telecom X** (empresa ficticia de telecomunicaciones) para comprender y reducir la tasa de *churn* (cancelaciones).  
- **Objetivos:**
  - Identificar patrones y variables clave asociadas al churn.  
  - Analizar comportamientos de clientes (contratos, servicios, gastos).  
  - Generar *insights* accionables para estrategias de retención.  
- **Fases del análisis:**
  - Limpieza y preprocesamiento de datos (JSON → DataFrame unificado).  
  - Normalización, imputación de valores nulos y codificación categórica.  
  - **EDA (Exploratory Data Analysis):** visualizaciones, histogramas, boxplots.  
- **Librerías usadas:** `pandas`, `numpy`, `matplotlib`, `seaborn`.  

---

### 3️⃣ Proyecto Telecom X – Parte 2 (Modelado y Machine Learning)
**Carpeta:** `03-challenge-telecom-churn-p2/`

- **Objetivo:** Construcción y evaluación de modelos de **Machine Learning** para predecir la cancelación de clientes (*churn prediction*).  
- **Modelos entrenados:**
  - `RandomForestClassifier`  
  - `XGBoostClassifier`  
  - `KNeighborsClassifier (KNN)`  
- **Métricas:** F1-score (mejor modelo: **XGBoost, F1 ≈ 0.82**), matriz de confusión.  
- **Insights clave:**
  - Clientes con contratos mensuales y menor permanencia (*tenure*) tienen mayor probabilidad de cancelar.  
  - Costos elevados y servicios de fibra óptica están asociados a mayor churn.  
  - La falta de servicios complementarios (seguridad, soporte) afecta la retención.  
- **Recomendaciones estratégicas:**
  - Incentivar contratos de largo plazo.  
  - Ofrecer paquetes económicos personalizados.  
  - Incorporar soporte técnico y seguridad como servicios básicos.  

---

## 📂 Estructura del Repositorio

```
one-alura-data-science/
│
├── 01-challenge-amigo-secreto/
│   ├── src/
│   │   └── amigo_secreto.js
│   ├── README.md
│   └── resultados/
│       └── ejemplo_output.txt
│
├── 02-challenge-telecom-churn-p1/
│   ├── notebooks/
│   │   └── analisis_exploratorio_modelado.ipynb
│   ├── data/
│   ├── src/
│   │   └── funciones_utiles.py
│   ├── README.md
│   └── dashboards/
│       └── dashboard_powerbi.pbix
│
├── 03-challenge-telecom-churn-p2/
│   ├── notebooks/
│   │   └── optimizacion_modelo_storytelling.ipynb
│   ├── README.md
│   └── presentacion/
│       └── resumen_decisiones.pdf
│
└── resources/
```

---

## 🛠️ Tecnologías y Herramientas
- **Lenguajes:** Python, JavaScript  
- **Data Science:** Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn  
- **Machine Learning:** RandomForest, XGBoost, KNN  
- **Visualización:** Power BI, gráficos en Python  
- **Versionado:** Git & GitHub  

---

## 📌 Conclusión
Este repositorio documenta un recorrido completo por la práctica de **lógica de programación, análisis exploratorio de datos y construcción de modelos predictivos de Machine Learning**.  
Los proyectos combinan **fundamentos teóricos y aplicación práctica**, generando *insights* útiles para la toma de decisiones empresariales.  

---

✍️ Autor: **Fausto Soto**  
🔗 LinkedIn: [tu-linkedin-aqui] | Portafolio/CV: [tu-enlace-aqui]
