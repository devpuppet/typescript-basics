class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Kamil');
textStorage.addItem('Sara');
textStorage.removeItem('Kamil');
console.log(textStorage.getItems());
//# sourceMappingURL=genericClass.js.map