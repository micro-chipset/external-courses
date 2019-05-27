function App() {
    
    this.view = new View();
    this.model = new Model(this.view);
    this.controller = new Controller(this.model, this.view);
}

var app = new App();