function debounce(callback, delay) {
    let timer;
    return function debounced() {
        let args = arguments;
        let that = this;
        clearTimeout(timer);
        timer = setTimeout(() => callback.apply(that, args), delay);
    };
}