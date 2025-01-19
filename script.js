document.addEventListener("click", () => {
    const editorArea = document.getElementById("editor-area");

    // Check if editorArea exists
    if (!editorArea) {
        console.error("Editor area not found!");
        return;
    }

    // Add event listeners for buttons
    document.getElementById("bold").addEventListener("click", () => {
        editorArea.style.fontWeight = editorArea.style.fontWeight === "bold" ? "normal" : "bold";
    });

    document.getElementById("italic").addEventListener("click", () => {
        editorArea.style.fontStyle = editorArea.style.fontStyle === "italic" ? "normal" : "italic";
    });

    document.getElementById("underline").addEventListener("click", () => {
        editorArea.style.textDecoration = editorArea.style.textDecoration === "underline" ? "none" : "underline";
    });

    document.getElementById("h1").addEventListener("click", () => {
        editorArea.value = `<h1>${editorArea.value}</h1>`;
    });

    document.getElementById("addBulletPoint").addEventListener("click", () => {
        const lines = editorArea.value.split("\n");
        const bulletLines = lines.map(line => `• ${line}`);
        editorArea.value = bulletLines.join("\n");
    });
});                 
