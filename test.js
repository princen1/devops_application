try {
    require('./app');
    console.log("Test passed ✅");
    process.exit(0);
} catch (error) {
    console.error("Test failed ❌", error);
    process.exit(1);
}