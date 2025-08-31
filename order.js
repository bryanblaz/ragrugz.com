// order.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("custom-order-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fileInput = document.getElementById("artwork");
    const notes = document.getElementById("notes").value;

    if (!fileInput.files.length) {
      alert("Please upload your artwork before checkout.");
      return;
    }

    const file = fileInput.files[0];

    // In production you should upload the file to your backend / S3,
    // then create the Printify order with your backend securely.
    // For now just a placeholder:
    alert(`File "${file.name}" selected. Notes: ${notes}\n\nNext step: Send to backend → Printify API.`);
  });
});
