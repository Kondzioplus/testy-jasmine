function App() {
};


App.prototype.createApp = function(name){
    if (name.length >= 5){
        this.saveApp();
    } else {
        return false;
    }
};

App.prototype.saveApp = function(appName){
    return true;
};

module.exports = App;
