<!-- Ciao ragazzi,
esercizio di oggi: CAMPO MINATO !
repo: js-campominato-dom
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica di gioco.
ATTENZIONE: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html e le cartelle js/css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git.
DESCRIZIONE DEL GIOCO
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati abbiamo calpestato una bomba. La cella si colora di rosso e la partita termina. Altrimenti, la cella cliccata si colora di azzurro e l'utente può continuare  a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita, il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba

# MILESTONE 1
Prepariamo "Qualcosa" per tenere il punteggio dell'utente.
Quando l'utente clicca su una cella, incrementiamo il punteggio.
Se riusciamo, facciamo anche in modo da non poter più cliccare sulla stessa cella

# MILESTONE 2
Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
Generiamoli e stampiamo in console per essere certi che siano corretti

# MILESTONE 3
Quando l'utente clicca su una cella, verrifichiamo se ha calpestato una bomba, controllando se il numero di cella è presente nell'array di bombe.
Se si, la cella diventa rossa (raccogliamo il punteggio e scriviamo in console che la patita termina) altrimenti diventa azzurra e dobbiamo incrementare il punteggio.

# MILESTONE 4
Quando l'utente clicca su una cella, e questa non è una bomba, dobbiamo controllare se il punteggio incrementato ha raggiunto Il punteggio massimo, perché in quel caso la partita termina. Raccogliamo quindi il messaggio e scriviamo un messaggio appropriato.

# MILESTONE 5
Quando la partita termina dobbiamo capire se è terminata perché è stata cliccata una bomba o se perché l'utente ha raggiunto il punteggio massimo (ossia ha vinto). Dobbiamo poi in ogni caso stampare in pagina il punteggio raggiunto ed il messaggio adeguato in caso di vittoria o sconfitta.

# BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà (come le istruzioni di ieri se non già fatto)

# SUPERBONUS
Colorare tutte le celle bomba quando la partita finisce
Consigli del giorno
approcciate l'esercizio con serenità, e cercate di divertirvi!
Cercate di commentare e usare i console.log il più possibile
Fatevi sempre delle domande: sto ripetendo del codice? Questa funzione fa troppe cose? Il nome ha senso rispetto a quello che fa?
Buon divertimento e a domani!  -->

# Campominato - logica di gioco
## MILESTONE #1
- Aggiungere nel DOM un elemento in cui verrà visualizzato il punteggio.
- Collegare l'elemento del DOM in JS.
- Creare un contatore `score` che terrà traccia del punteggio
- Creo un array `clickedCells` che conterrà le celle cliccate.
- **AD OGNI CLICk** della cella:
    - **SE** `clickedCells` contiene la cella cliccata:
        - Stampa in console: *"Cella già cliccata"*
    - **ALTRIMENTI**:
        - Aumentare il contatore `score` di 1.
        - Aggiungo il numero della cella cliccata all'array `clickedCells`.

<br>

## MILESTONE #2
- **Creo la funzione** `createBombs` con parametri "numeri" e "numeriMax" che *ritorna* un array contenente "numeri" diversi generati random, che in questo caso saranno le bombe:
    - Creo un'array `randomNumbers` vuoto.
    - **CICLO WHILE** tante volte quante indica "numeri" e per ogni ciclo:
        - **CICLO DO-WHILE**:
            - **DO** genero un numero random da 1 a "numeriMax".
                - **FINO A CHE** `randomNumbers` contiene il numero creato.
            - Aggiungo il numero random e lo inserisco in `randomNumbers`
    - Restituisco l'array.
- Creo la variabile `bombs` a cui sarà assegnato il risultato della funzione `createBombs` con dati i parametri 16 e `difficulty`.
- Stampo `bombs` in console.

<br>

## MILESTONE #3
- Preparo una classe CSS bomb che avrà sfondo rosso.
- **AD OGNI CLICk** della cella:
    - **SE** il numero della cella è presente nell'array `bombs`:
        - Aggiungi la classe CSS bomb all'elemento cella.
        - Stampa in console che la partita è terminata visualizzando `score`.
    - ***ALTRIMENTI** assegna la classe CSS clicked ed incrementa il contatore score di 1.

<br>

## MILESTONE #4
- Creo una variabile `maxScore` che sarà il punteggio massimo raggiungibile.
- **AD OGNI CLICk** della cella:
    **SE** il contantore raggiunge `maxScore`:
        - Stampare in console: **"Hai Vinto! il tuo punteggio è: " + `score`**.
    **ALTRIMENTI** continua a giocare.

<br>

## MILESTONE #5
- Si ricollega a **MILESTONE 4**, aggiungere alla verifica:
- **ALTRIMENTI SE**: **MILESTONE 3**