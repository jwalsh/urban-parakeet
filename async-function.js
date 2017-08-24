async function main() {
    const x = await asyncFunc(); // (A)
    console.log('Result: '+x); // (B)

    // Same as:
    // asyncFunc()
    // .then(x => console.log('Result: '+x));
}
main();
