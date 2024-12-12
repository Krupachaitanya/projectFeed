document.getElementById('submitFirstForm').addEventListener('click', function () {
  // Collect form values
  const year = document.getElementById('year').value;
  const semester = document.getElementById('semester').value;
  const branch = document.getElementById('branch').value;
  const section = document.getElementById('section').value;

  const teachers = [];
  const subjects = [];

  for (let i = 1; i <= 6; i++) {
      const teacher = document.getElementById(`teacher${i}`);
      const subject = document.getElementById(`subject${i}`);

      if (teacher && subject) {
          teachers.push(teacher.value);
          subjects.push(subject.value);
      }
  }

  // Validate input
  if (!year || !semester || !branch || !section || teachers.every(t => !t)) {
      alert('Please fill in all required fields.');
      return;
  }

  // Create a query string
  const params = new URLSearchParams({
      year,
      semester,
      branch,
      section,
      teachers: JSON.stringify(teachers),
      subjects: JSON.stringify(subjects),
  });

  // Generate the shareable URL
  const baseURL = window.location.origin + '/feedback.html'; // Adjust path if needed
  const shareableURL = `${baseURL}?${params.toString()}`;

  // Display the URL
  alert(`Share this URL: ${shareableURL}`);
  console.log(shareableURL); // For debugging
});
