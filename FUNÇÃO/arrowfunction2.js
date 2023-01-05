function pessoa() {
    this.idade = 0;

    setInterval(() => {
        this.idade++; // A função arrow permite que o contexto lexico do THIS seja fixo
        console.log(this.idade);
    }, 1000)
}
new pessoa;