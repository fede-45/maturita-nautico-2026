# Indice Argomenti Navigazione — Quaderno di Federico

**Letto da Vision il 2026-05-26**. Mappa di tutte le 26 foto → argomenti, con macro-categorie per organizzare le pagine del sito.

---

## MACRO-CATEGORIE (sezioni del sito)

| # | Macro-argomento | Foto coinvolte | Quesiti d'esame tipici |
|---|---|---|---|
| **A** | **Astronomia Nautica** | 550, 551, 552, 553, 554, 555, 556, 557, 558, 559 | Punto astronomico, sole al tramonto/alba, retta di altezza |
| **B** | **Carteggio Radar / Moto Relativo** | 560, 561, 562 | CPA, TCPA, manovre evasive, ARPA, BAM/COLREG |
| **C** | **Maree** | 563, 564, 565, 566 | Altezza marea ad ora data, ora a quota data |
| **D** | **UKC e Squat** | 567, 568 | Passaggio sicuro su basso fondale, manovra portuale |
| **E** | **Air Draft (passaggio sotto ponte)** | 569, 570 | Verifica AC per attraversare un ponte |
| **F** | **Stabilità e Gestione Pesi** | 571, 572, 573, 574, 575 | Loading plan, trim, sbandamento, imbarco/sbarco |

---

## DETTAGLIO FOTO PER FOTO

### A) ASTRONOMIA NAUTICA

#### foto 550 — Effemeridi Nautiche (TEORIA BASE)
- **Cosa contiene**: Schema di come si usano le effemeridi (pubblicazione che fornisce annualmente dati astri).
- **Layout effemeridi**: due facciate (sinistra = pianeti e Luna; destra = Sole e stelle).
- **Per ogni astro fornisce**: T (angolo orario rispetto a Greenwich) e δ (declinazione). Per stelle: AS (ascensione siderale) + δ.
- **Schema di calcolo del Sole al meridiano superiore**: Tv, δ, V; passaggi di interpolazione tra le pagine blu.
- **Per il calcolo dell'angolo orario locale Pw**: Tv + λ → angolo orario locale. Se Pw > 180° si converte in Pe = 360° - Pw.

#### foto 551 — Sole al Tramonto / Sorgere (ortiva / occidua)
- **Domanda**: 1) Sistema di orientamento. 2) Intervallo di tempo (durata visibilità).
- **Esempio**: φ=36°30'N, λ=09°25'W, dh=30°,4', δ=3°,9E.
- **Procedimento**:
  1. tg(â) = -sin(t)/(sin(φ)·cos(t) − cos(φ)·tg(δ)) → angolo orario al tramonto
  2. Coordinate astre al tramonto → calcoli incrociati
  3. Risultato: T=20h18m (tramonto), δ=23°25', tg(â)=N 68°48'88"W
  4. Confronto bussola magnetica per ottenere deviazione: "δ < 5° efficace; differenza > 25° su Cg e δg dà più peso"

#### foto 552 — Schema Calcolo Altezze (sight reduction)
- **Catena correzioni**: hi → +δi (corr. indice) → ho (altezza osservata) → +ε (correzione parallasse/rifrazione) → ±cr (correzioni specifiche astro) → hv (altezza vera)
- **Esempio Spica (13 giugno)**: φ=50°36,1'N, λ=170°15,8'W
  - hi=10°34,3' → +ε corregge → hv finale
  - Calcolo bv e Tv da effemeridi (Tγ=160°, δ=−1°, V=2,8m)
  - Risultato: a (azimut)=?, Δh=?, intersezione con retta di altezza
- **Regola Federico**: "Bisogna prendere sempre un grado in meno per tutti (Sole/Luna/Stelle)"

#### foto 553 — Punto Astronomico al Crepuscolo Serale (esempio 15/04)
- **Dati**: φ=50°59,8'N, λ=132°6,8'W, Pn=185°, Vp=15m
- **Astri usati**: 3 (Mizar?, Astrue X?, Polare/Polaris)
- **Calcolo FIX**: per ogni astro: Tg, hi, +δi, ho, +ε → hv; poi calcolo bv e bcalcolato → Δh (intercetta) → costruzione grafica retta di altezza
- **Polare**: ha calcolo speciale (azimut sempre N), formula corretta con coefficienti a0, a1, a2

#### foto 554 — Punto Astronomico (esempio 23/10/2020)
- **3 astri**: AstrueX, Hamel (Hamal/Almach?), Sirio (Sirius)
- **Steps tipici**: T1, T2, T3 → δ1, δ2, δ3 → Δh per ognuno
- **Calcolo congiunto**: tg(â) = (a sin · b cos) / (b sin · a) ... 

#### foto 555 — Punto Astronomico Sole (esempio 18/06/2024)
- **Pn**: φ=20°36,1'N, λ=132°15,6'W, Pv=160°, Vp=12 KTS
- **Sole**: Tc=03h31m08s, hi=58°35,5' → hv=58°44'18"
- **Δh con sole**: m=38,9' → m=20°6'4" (probabilmente differenza)
- **Calcolo i (azimut sole)**: tg(P)=sin(P)/(cos(P)·sin(φ)−tg(δ)·cos(φ)) — la formula di Federico
- **Risultato finale**: Δh=-0°6'40" (intercetta negativa → si va verso sole) o positiva (si allontana)

#### foto 556 — Crepuscolo Mattutino (18/04)
- **Posizione stimata**: φ=20°36,8'S, λ=112°50,0'W, hv=066°, Vp=18KTS
- **3 astri rilevati**: "Al Mast" (probabilmente Almaak), Shaula, Sirius
- **Stessa metodologia di multi-star fix con calcolo individuale Δh per ognuno**

#### foto 557 — Crepuscolo Serale (18/04)
- **Pn**: φ=17°20,3'S, λ=073°45,2'E, Rv=082°, Vp=10,2 KTS
- **Astri**: Achemar, Regulus, Atria, Caelum (4 astri questa volta!)
- **Procedura ripetitiva**: per ogni astro estrarre Tg, hi, calcolare bv, e quindi Δh
- **Esempio risultato**: bv=23°48' per Achemar

#### foto 558 — Punto Astronomico (18/04 mattutino?)
- **Astri**: Vernal (Achernar/Vernal?), Antares, e probabilmente Sirio
- **Stessa procedura di fix multi-astro**

#### foto 559 — Costruzione Grafica del Punto Nave
- **Cosa**: foglio quadrettato con la costruzione GRAFICA di un punto nave con 3 rette di altezza
- **Triangolo di posizione (cocked hat)**: si vedono i 3 segmenti delle rette, l'intersezione triangolare
- **Tabella riepilogo astri** in alto a destra: nomi astri e Δh
- **Etichetta**: "Punto nave con 3 rette di altezza. Punto nave non simmetrico ma accettabile"

---

### B) CARTEGGIO RADAR / MOTO RELATIVO

#### foto 560 — Teoria del Moto Relativo (RM, NU)
- **Definizioni**: 
  - RM = Relative Motion
  - NU = North Up (orientamento)
  - Mp = moto proprio della nostra nave
  - Mr = moto relativo del target
  - V_R = vettore relativo
- **Procedura per ottenere V_R**: V_R = V_target − V_propria (vettorialmente)
- **CPA** = Closest Point of Approach (distanza minima)
- **TCPA** = Time to CPA
- **BCR/BCT** = Bow Crossing Range / Time
- **Indicatura di moto relativo**: dall'origine del vettore VP, si traccia il vettore relativo VR; dalla cuspide di VR si trovano gli elementi del moto assoluto del bersaglio
- **Esempio**: D=17, V2=12, Pp=050, Vp=12 KTS, Rv=10°, RV=100... → calcolo CPA, TCPA

#### foto 561 — Maneuvering Board USATA (esercizio svolto)
- **Foglio polare** con scala 4:1 / 5:1
- **2 target plottati**: Target A (con tre punti rilevamento) e Target B
- **Vettori tracciati**: moto relativo, CPA, manovre evasive
- **Si vede chiaramente** il triangolo per la determinazione di VR

#### foto 562 — Maneuvering Board VUOTA (template)
- **Foglio polare bianco** pronto per esercizi
- **Tabella in basso**: TARGET (A), TARGET (B) con campi CPA, TCPA, COG, SOG, ecc.

---

### C) MAREE

#### foto 563 — Problema delle Maree (TEORIA)
- **Concetti**:
  - Chart Datum (CD) = livello zero della carta
  - High Water (HW) / Low Water (LW), AM/BM (Alta Marea, Bassa Marea)
  - A = Ampiezza = (HW − LW)
  - α = Semiampiezza = A/2
  - T = Periodo (tempo tra HW e LW successivi)
  - Δt = tempo trascorso dall'ultima HW o BM
- **Formula chiave**: T=180° (T è il periodo), α' = (180°·Δt)/T → ANGOLO della fase
- **Altezza al tempo x**: hx = HW − α·(1 − cos(α'))   oppure   hx = LW + α·(1 + cos(α'))
- **Verticale**: cos α', funzione cosinusoide
- **Esempi**: tAM=12h00, hAM=3,2m; tBM=06h, hBM=1,0m; t_x=10h30 → hx=?
- **Soluzione**: A=2,2m, α=1,1, T=6h, Δt=4h30, α'=180·4,5/6=135°, hx=...

#### foto 564 — Maree (problemi inversi e diretti)
- **2 problemi misti**:
  - "Altri problemi delle maree" + esempi
  - Calcolo HW e LW data (alta/bassa marea data + ampiezza)
  - Calcolo dell'ora a cui si ha una determinata quota hx (problema inverso)
- **Formula inversa**: cos α' = (hx − LW)/α  oppure  cos α' = (HW − hx)/α
  - → α' (angolo) → Δt = α'·T/180°

#### foto 565 — Esercizio Maree Multi-quesito
- **Schema problema**: tAM=12h45, hAM=0,8m; tBM=18h00, hBM=2,6m
- Vari calcoli incrociati: tx=15h00, tx=12h15, tx=18h00, tx=17h05
- Quote hx richieste: 1,9m, 2,0m, 1,1m a vari tempi
- **Esempio con problema inverso**: hx=1,30m → tx=?
- Risultato: α' parziali (90°, 70°, 95°), Δt vari (1h10, 1h25, etc.)

#### foto 566 — Altri esercizi maree (problemi misti diretti/inversi)
- Format: dati tAM, hAM, tBM, hBM → calcola hx a tx specifico oppure tx a hx specifico
- 5 sotto-esercizi (1-5) con dati diversi
- Strategia: T=180°/Δt·α (formula manipolata)

---

### D) UKC e SQUAT (BASSO FONDALE)

#### foto 567 — Particolare problema delle maree: passaggio basso fondo
- **Titolo**: "Determinazione dell'altezza di marea x il passaggio in sicurezza su un basso fondo"
- **Schema in figura**: Profilo nave + fondale, UKC visualizzato
- **Variabili**:
  - Tm = pescaggio medio
  - B = squat (sovra-immersione dinamica)
  - UKC = Under Keel Clearance richiesto (di solito 4,5m da SMS oppure imposto da problema)
  - hx = altezza marea istantanea sul chart datum
- **Formule chiave**:
  - **Tm + UKC = hx + B**   (equilibrio profondità nave + clearance = fondale + squat)
  - **B = Tm + UKC − hx**
  - **UKC = hx + B − Tm**
- **Squat formula**: B = C_b · V² / 50  (Barrass approssimato, V in nodi)
- **Esempio**: hAM=1,1, tAM=03h, hBM=3,6, T=15h6m, ... → calcolo hx in ingresso porto

#### foto 568 — Altro esempio UKC (08/12)
- **Dati**: tBM=09h30, hBM=1,31; tAM=10h25, hAM=5,0... B=12,8m, Tm=14,2, etc.
- **TPC=87C**: cm di immersione per 1cm di marea? (probabilmente TPC = Tons Per Centimeter)
- **Procedura**: calcolo hx → confronto con Tm+UKC+B → SI/NO sicuro
- **"Estranco emllipur basso fondo CD"**: estremo emisferico (low) del datum
- **Schema**: profilo nave + ginocchio + chart datum visualizzato

---

### E) AIR DRAFT (PASSAGGIO SOTTO PONTE)

#### foto 569 — Passaggio Nave sotto un ponte
- **Schema**: profilo verticale ponte + nave + chart datum
- **Variabili**:
  - HP = Altezza ponte sopra il datum (charted height)
  - Z0 = quota del datum locale (Mean High Water Spring vs Chart Datum)
  - AC = Air Clearance = clearance verticale tra punto più alto nave e ponte
  - AD = Air Draft = altezza nave sopra l'acqua (bow draft + ... altro)
  - hx = altezza marea istantanea
  - hp = "altezza ponte sopra chart datum" effettiva
- **Formula chiave**: **HP + Z0 = AC + AD + hx**  → AC = HP + Z0 − AD − hx
- **MEAN HIGH WATER Spring**: zero ufficiale di portolanos britannici/americani
- **Esempio**: HP=15, hAM=4,9, tAM=08h11, hx=?, hBM=3, tBM=14h, OC=2,5m, KG=2,5...
- **Risultato finale**: ax (timo) e ax (orientamento) per ogni quesito

#### foto 570 — Altro esempio Air Draft (multi-dati)
- B=20m, hP=44m, Z0=2,1, Tm=19,8mm, hd=40,5m, OAC=1,5m, OC=3m
- Calcolo cinematico: timo di passaggio sicuro, sostituendo le formule
- 6 quesiti incrociati con tBM, hBM, tAM, hAM, calcoli iterativi

---

### F) STABILITÀ E GESTIONE PESI A BORDO

#### foto 571 — Movimentazione delle merci: SPOSTAMENTO VERTICALE
- **Schema**: nave in sezione con peso che si sposta verso l'alto
- **Concetto**: "Il baricentro G segue lo spostamento del peso con stessa direzione e verso"
- **Formula**: **GG' = (P · z) / Δ**   (P=peso movimentato, z=spostamento verticale, Δ=dislocamento)
- **Nuova altezza metacentrica**: **G'M = GM − GG'**  (se peso sale, GM diminuisce → nave più cedevole)
- **Regola**: "Una nave più stabile (GM alto) è una nave più dura; al contrario è cedevole"
- **Esempio**: GM=0,8, G'M=1,0 (impossibile? probabilmente errore o caso particolare); GG'=G'M−GM=0,2; P=?, Z=12m → P=(GG'·Δ)/z

#### foto 572 — Movimentazione: SPOSTAMENTO TRASVERSALE E LONGITUDINALE
- **Spostamento trasversale**:
  - **GG' = (P · y) / Δ**  (y=spostamento trasversale)
  - **tg(θ) = GG' / GM = (P·y)/(Δ·GM)**  → θ = angolo di sbandamento (heel)
- **Spostamento longitudinale**: 
  - Modifica trim, sposta LCG → LCB nuova posizione → trim diverso
  - **ΔTF = (LPP − XCF)/LPP · (P·d)/(100·MCTC)** (variazione pescaggio prora)
  - **ΔTA = XCF/LPP · (P·d)/(100·MCTC)** (variazione pescaggio poppa)
  - d = X − XCF (distanza tra CF e punto reale di carico)
  - **ΔTm (1cm sinkage) = (P·d) / (LPP·TPC)** (in alcuni libri)
- **CT (change trim)** = T'F − T'A   (variazione trim positiva = appruamento)
- **Significato MCTC**: Moment to Change Trim by 1 Centimeter

#### foto 573 — Imbarco/Sbarco pesi (PROCEDURA COMPLETA)
- **Condizione validità formule semplici**: **P ≤ Δ/100** (peso piccolo)
- **Procedura "teorica" Federico**:
  1. **Imbarca sul CF** (centro di flottazione, neutrale per trim) → calcoli sinkage parallel
  2. **Sposta il peso** dal CF al punto reale di imbarco (orizzontale e verticale)
- **Step 1: Imbarco sul CF**:
  - TPC = DU (immersione uniforme): TPC=1cm → P = ΔTm  → ΔTm = P/(TPC·100)
- **Step 2: Spostamento verticale (verso l'alto)**:
  - Δ' = Δ + P
  - z = KG − Tm  (distanza tra G e linea galleggiamento)
  - GG' = (P·z) / Δ'
  - G'M = GM − GG'  (se z>0)
- **Step 3: Spostamento longitudinale (X − XCF)**:
  - T'F = TF + ΔTm + ΔTF
  - T'A = TA + ΔTm − ΔTA

#### foto 574 — Coordinate Baricentro G dopo Imbarco/Spostamento
- **Imbarco di pesi multipli**:
  - X'G = (Δ·XG + ΣP·x) / Δ'
  - Y'G = (Δ·YG + ΣP·y) / Δ'
  - K'G = (Δ·KG + ΣP·z) / Δ'  (centro di gravità verticale aggiornato)
  - Δ' = Δ + ΣP
- **Spostamento di pesi (senza imbarco)**: Δ resta uguale (≠ imbarco)
  - X'G = (Δ·XG + P·x) / Δ
  - Y'G similar, K'G similar
- **Momento approvante**: M_app = Σ(Pi·di)  (somma di tutti i prodotti peso×braccio longitudinale)
- **Momento apprupante**: complementare (specchio)
- **Esempio**: Δ=6,80, TA=7,05, KG=8,00, TF=6,55  (carico parziale)
  - 5 pesi diversi P1..P5 con coordinate
  - Calcolare Δ', X'G, K'G, momenti totali → trim finale

#### foto 575 — Esercizio Logistico COMPLETO (ricapitolazione tipo esame)
- **Stato iniziale**: TA=8,21m, Tm=8,81m, TF=8,91m, T0m=−0,2m APPRUATA (trim by stern)
- **KG iniziale**: 2,05m
- **Pesi da movimentare**:
  | P | quantità | x da APM | z da baseline |
  |---|---|---|---|
  | P1 | -652 | 100,3 | 58,69 (era 4,0) | 
  | P2 | -254 | 20,3 | 0,34 (era 4,0) |
  | P3 | -590 | 21,6 | 48,36 (era 6,2) |
  | P4 | -135 | 135 | 69,84 (era 1,0) |
  | P5 | +160 | 110 | 39,89 (era 1,0) |
  | P0 | +140 | 15 | 75,15 (era 2,5) |
- **Calcoli finali**:
  - Δ' = 18,565 (era 16,234 + ΣP)
  - P_netto = −1,331
  - Calcolo nuovo X'G, momento approvante/apprupante
  - LPP=143,18m, MCTC=0,209 m·t
  - Risultato: K'G=2,05m, T'F=8,21-0,77+0,04=8,029, T'A=6,21-0,77+0,02=8,035
- **Questo esercizio è IL formato tipico della SECONDA PARTE DELLE PROVE D'ESAME**

---

## CORRISPONDENZA CON LE PROVE D'ESAME

| Macro-argomento | Prove d'esame in cui appare |
|---|---|
| A) Astronomia | Prova 2015 (quesito retta altezza), Prova 2018 (sole tramonto), Prova 2023A navale |
| B) Carteggio Radar | Tipico quesito 3-4 delle prove, COLREG/BAM 2018, 2023 |
| C) Maree | TUTTE le prove navali: passage planning richiede calcolo marea ad ETA |
| D) UKC + Squat | TUTTE le prove dal 2018 in poi: parte essenziale del passage planning |
| E) Air Draft | Quesito 2024 (A063), eventualmente passaggio canali con ponti |
| F) Stabilità | TUTTE le prove: 2015 Hamburg-Felixstowe loading plan, 2018 Auckland-Panama, 2024 La Paz |

**CONCLUSIONE**: il quaderno di Federico copre **TUTTI E 6 i macro-argomenti** delle prove d'esame. Materiale perfetto.

---

## PROSSIMI PASSI (Fase 2-4)

1. **Fase 2**: Leggere il Formulario nautico.pdf (18 pagine) e mappare le formule per ognuna delle 6 macro-categorie.
2. **Fase 3**: Estrarre testo prove anni passati e classificare i quesiti per macro-categoria.
3. **Fase 4**: Costruire architettura sito:
   - `navigazione/index.html` — hub con le 6 macro-categorie come card
   - `navigazione/argomenti/{a-astronomia,b-radar,c-maree,d-ukc,e-airdraft,f-stabilita}.html` — pagina dedicata per ogni macro
   - `navigazione/formulario.html` — viewer immagini con zoom + ricerca per macro
   - `navigazione/esercizi.html` — gallery foto quaderno raggruppate per macro
   - `navigazione/prove.html` — archivio prove con testo + filtro per argomento
   - `navigazione/simulatore.html` — simulatore quesiti casuali
