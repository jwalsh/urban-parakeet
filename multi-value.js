function asyncFunc() {
    const eventEmitter = { success: [] };
    setTimeout(() => { // (A)
        for (const handler of eventEmitter.success) {
            handler('DONE');
        }
    }, 100);
    return eventEmitter;
}
asyncFunc()
.success.push(x => console.log('Result: '+x)); // (B)
