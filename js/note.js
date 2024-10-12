function saveNote() {
  const note = document.getElementById('note').value;
  localStorage.setItem('note', note);
}

function loadNote() {
  const note = localStorage.getItem('note');
  if (note) {
      document.getElementById('note').value = note;
  }
}

function saveTimestampedNote() {
  const note = document.getElementById('note').value;
  const timestamp = new Date().toISOString();
  localStorage.setItem('timestampedNote', JSON.stringify({ note, timestamp }));
}

function loadTimestampedNote() {
  const data = JSON.parse(localStorage.getItem('timestampedNote'));
  if (data) {
      document.getElementById('note').value = `${data.timestamp}: ${data.note}`;
  }
}

function saveMultipleNotes() {
  const note = document.getElementById('note').value;
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.push(note);
  localStorage.setItem('notes', JSON.stringify(notes));
}

function loadMultipleNotes() {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  document.getElementById('noteList').innerHTML = notes.map(note => `<li>${note}</li>`).join('');
}

function saveEditableNote() {
  const noteId = document.getElementById('noteId').value;
  const note = document.getElementById('note').value;
  localStorage.setItem(`note_${noteId}`, note);
}

function loadEditableNote() {
  const noteId = document.getElementById('noteId').value;
  const note = localStorage.getItem(`note_${noteId}`);
  if (note) {
      document.getElementById('note').value = note;
  }
}

function savePriorityNote() {
  const note = document.getElementById('note').value;
  const priority = document.getElementById('priority').value;
  localStorage.setItem('priorityNote', JSON.stringify({ note, priority }));
}

function loadPriorityNote() {
  const data = JSON.parse(localStorage.getItem('priorityNote'));
  if (data) {
      document.getElementById('note').value = `${data.priority}: ${data.note}`;
  }
}

function saveCategorizedNote() {
  const note = document.getElementById('note').value;
  const category = document.getElementById('category').value;
  const notes = JSON.parse(localStorage.getItem(category)) || [];
  notes.push(note);
  localStorage.setItem(category, JSON.stringify(notes));
}

function loadCategorizedNotes() {
  const category = document.getElementById('category').value;
  const notes = JSON.parse(localStorage.getItem(category)) || [];
  document.getElementById('noteList').innerHTML = notes.map(note => `<li>${note}</li>`).join('');
}

function saveTaggedNote() {
  const note = document.getElementById('note').value;
  const tags = document.getElementById('tags').value.split(',');
  localStorage.setItem('taggedNote', JSON.stringify({ note, tags }));
}

function loadTaggedNote() {
  const data = JSON.parse(localStorage.getItem('taggedNote'));
  if (data) {
      document.getElementById('note').value = `${data.tags.join(', ')}: ${data.note}`;
  }
}

function saveProtectedNote() {
  const note = document.getElementById('note').value;
  const password = document.getElementById('password').value;
  localStorage.setItem('protectedNote', JSON.stringify({ note, password }));
}

function loadProtectedNote() {
  const enteredPassword = document.getElementById('password').value;
  const data = JSON.parse(localStorage.getItem('protectedNote'));
  if (data && data.password === enteredPassword) {
      document.getElementById('note').value = data.note;
  } else {
      alert('Incorrect password');
  }
}

function saveEncryptedNote() {
  const note = document.getElementById('note').value;
  const encryptedNote = btoa(note);
  localStorage.setItem('encryptedNote', encryptedNote);
}

function loadEncryptedNote() {
  const encryptedNote = localStorage.getItem('encryptedNote');
  if (encryptedNote) {
      document.getElementById('note').value = atob(encryptedNote);
  }
}

function saveExpiringNote() {
  const note = document.getElementById('note').value;
  const expiry = Date.now() + 60000; // 1 minute from now
  localStorage.setItem('expiringNote', JSON.stringify({ note, expiry }));
}

function loadExpiringNote() {
  const data = JSON.parse(localStorage.getItem('expiringNote'));
  if (data) {
      if (Date.now() < data.expiry) {
          document.getElementById('note').value = data.note;
      } else {
          localStorage.removeItem('expiringNote');
      }
  }
}

