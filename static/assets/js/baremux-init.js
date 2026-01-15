// Initialize BareMux with WISP transport
async function initBareMux() {
    try {
        // Import BareMux
        const { BareMuxConnection } = await import("/baremux/index.js");
        
        // Create connection
        const connection = new BareMuxConnection("/baremux/worker.js");
        
        // Set transport to epoxy with WISP
        const wispUrl = (location.protocol === "https:" ? "wss://" : "ws://") + location.host + "/wisp/";
        
        await connection.setTransport("/epoxy/index.mjs", [{ wisp: wispUrl }]);
        
        console.log("BareMux initialized with WISP support:", wispUrl);
    } catch (error) {
        console.error("Failed to initialize BareMux:", error);
    }
}

// Initialize on page load
initBareMux();
