//your JS code here. If required.
document.getElementById('book-form').addEventListener('submit', function(e) {
      e.preventDefault();
      // Get input values
      const title = document.getElementById('title').value.trim();
      const author = document.getElementById('author').value.trim();
      const isbn = document.getElementById('isbn').value.trim();

      if (title && author && isbn) {
        // Create new row
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${title}</td>
          <td>${author}</td>
          <td>${isbn}</td>
          <td><button class="delete">Clear</button></td>
        `;
        document.getElementById('book-list').appendChild(tr);

        // Clear form
        document.getElementById('book-form').reset();
      }
    });

    // Delegate delete button click
    document.getElementById('book-list').addEventListener('click', function(e) {
      if (e.target.classList.contains('delete')) {
        e.target.closest('tr').remove();
      }
    });