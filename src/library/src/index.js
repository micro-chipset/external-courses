function App() {
    this.controller = new Controller(this.model = new Model(), this.view = new View(this));
}

var app = new App();