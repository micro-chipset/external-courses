function App() {

    this.model = new Model(this.view);
    this.view = new View();
    this.controller = new Controller(this.model, this.view);
}

var app = new App();