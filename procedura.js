/*

- Creare componente HEADER e inserirlo in app-component
- Creare componente BUTTON e inserirlo in HEADER
- Utilizzare decoratore @Input() per definire dinamicamente testo e colore di BUTTON. Il testo va come interpolazione mentre il colore attraverso la direttiva [ngStyle]
- Impostare event binding su BUTTON con Event Emitter e Output(). Impostare il selettorer BUTTON in HEADER con event binding e metodo nel componente.


- Creare file Task con interfaccia Task
- Creare file mock-task che importa l'interfaccia e definisce un array di oggetti (TASKS)
- Creare componente TASKS e importarlo in app-component. Importare array TASKS e interfaccia Task
- Creare componente TASK-ITEM e importarlo in TASKS. Importare l'interfaccia Task e utilizzare il decoratore @Input() per definire una proprietà e legarla all'interfaccia. Infine usare il binding nel seleTtore in TASKS corrispondente all'array del componente.
- Installare FortAwesomeAngular


- Creare servizio TASK e importare l'interfaccia Task e l'array TASKS. Creare un metodo per ritornare l'array dei tasks.
- Importare il servizio TASK e iniettarlo nel costruttore del componente TASK. Utilizzare il metodo del servizio in OnInit
- Importare OBSERVABLE, OF nel servizio e modificare i metodi con .subscribe

- Creazione Fake Database .json
- Importare HttpClient e HttpHeaders in TASK Service + HttpClientModule in app-module
- Creare proprietà URL in service e iniettare http in service nel costruttore.
- Modificare il metodo nel service con i metodi di http (return http.get(url))
- Nel componente TASK-ITEM utilizzare @Output() e Eventemitter + metodo con .emit() per emettere l'evento collegato al Template + implementare il selettore con l'event binding e un metodo creato nel componente che chiama il metodo nel service che elimina il Task con http.delete

- Impostare un event binding sul div del Task per attivare un reminder.
- Eseguire procedura come per DeleteTask + settare metodo nel servizio con .put per aggiornare


- Creare componente ADD-TASK e inserirlo in TASK componente.
- Creare un form nel componente ADD-TASK con direttiva ngModel per ciascun elemento e metodo Submit nell'elemento form. [Importare FormsModule in app-module]
- Nel componente creare singole proprietà per ciascun elemento del form
- Creare metodo Submit per emettere il nuovo task e resettare il form
- Nel Template parente impostare l'event binding e creare metodo nel componente
- Creare metodo nel service con .post e usarlo nel componente parent per aggiungere il Task con .subscribe() e .push() nell'array

- Creare UI Service. Importare SUBJECT e OBSERVABLE. Creare private property e private subject.
- Importare UI in HEADER e utilizzare un metodo per richiamare quello del servizio. Settare il costruttore per ottenere il valore della proprietà e utilizzarlo per settare la view nel Template
- Importare UI Service in ADD-Task e definire le stesse proprietà di HEADER con il metodo di UI Service


- Creare Router e modificare il selettore in app-component con router-outler
- Limitare il Router, importando Router in HEADER. Creare metodo per far combaciare l'url del router con ciò che vogliamo per far comparire o meno 1 componente (BUTTON)
*/
