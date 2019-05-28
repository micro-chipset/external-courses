function App() {
    
    this.model = new Model();
    this.view = new View(this.model);
    this.controller = new Controller(this.model, this.view);
}
// debugger;
var app = new App();