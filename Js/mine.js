// let editBtn = document.getElementById("editBtn");
// editBtn.addEventListener("click",function(){
    
//     editBtn.innerHTML ="Done";
//     editBtn.classList.add("px-3");
//     editBtn.classList.add("bg-info");

// })
const editButton = document.getElementById('editButton');
const buttonText = document.getElementById('buttonText');
const editIcon = document.getElementById('editIcon');
const links = [
  { container: 'facebookContainer', link: 'facebookLink', text: 'facebookText', input: 'facebookInput' },
  { container: 'instagramContainer', link: 'instagramLink', text: 'instagramText', input: 'instagramInput' },
  { container: 'tiktokContainer', link: 'tiktokLink', text: 'tiktokText', input: 'tiktokInput' }
];

// Load saved links from local storage, if any
links.forEach(link => {
  const savedLink = localStorage.getItem(link.link);
  if (savedLink) {
    document.getElementById(link.link).href = savedLink;
    document.getElementById(link.text).textContent = savedLink;
  }
});

editButton.addEventListener('click', () => {
  if (buttonText.textContent === 'Edit') {
    // Switch to editing mode
    links.forEach(link => {
      const input = document.getElementById(link.input);
      const text = document.getElementById(link.text);
      input.value = text.textContent;
      input.classList.remove('hidden');
      text.classList.add('hidden');
    });
    buttonText.textContent = 'Done';
    editButton.classList.add("px-3");
    editButton.classList.add("bg-done");
    editIcon.classList.add('hidden');
  } else {
    // Save the edited links
    links.forEach(link => {
      const input = document.getElementById(link.input);
      const text = document.getElementById(link.text);
      const linkElement = document.getElementById(link.link);
      const editedLink = input.value;
      localStorage.setItem(link.link, editedLink);
      linkElement.href = editedLink;
      text.textContent = editedLink;
      editButton.classList.remove("px-3");
    editButton.classList.remove("bg-done");

      // Switch back to view mode
      input.classList.add('hidden');
      text.classList.remove('hidden');
    });
    buttonText.textContent = 'Edit';
    editIcon.classList.remove('hidden');
  }
});







document.addEventListener("DOMContentLoaded", () => {
  const editButton = document.getElementById("edit-btn");

  editButton.addEventListener("click", () => {
      if (editButton.textContent.trim() === "Edit") {
          // Change button text to "Done"
          editButton.innerHTML = 'Done ';
          editButton.classList.add("px-3");
          editButton.classList.add("bg-done");
          // Convert p elements to input fields
          convertToInput("first-name");
          convertToInput("email");
          convertToInput("bio");
          convertToInput("last-name");
          convertToInput("phone");
      } else {
          // Change button text to "Edit"
          editButton.innerHTML = 'Edit <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.36754 2.51639L1.80088 9.08306C1.55088 9.33306 1.30088 9.82472 1.25088 10.1831L0.892542 12.6914C0.759209 13.5997 1.40088 14.2331 2.30921 14.1081L4.81754 13.7497C5.16754 13.6997 5.65921 13.4497 5.91754 13.1997L12.4842 6.63306C13.6175 5.49972 14.1509 4.18306 12.4842 2.51639C10.8175 0.849722 9.50088 1.38306 8.36754 2.51639Z" stroke="#C2C2C2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /></svg>';
          editButton.classList.remove("px-3");
          editButton.classList.remove("bg-done");
          // Save changes and convert input fields back to p elements
          saveChanges("first-name");
          saveChanges("email");
          saveChanges("bio");
          saveChanges("last-name");
          saveChanges("phone");
      }
  });

  function convertToInput(id) {
      const p = document.getElementById(id);
      const value = p.textContent;
      const input = document.createElement("input");
      input.type = "text";
      input.value = value;
      input.id = id;
      p.replaceWith(input);
  }

  function saveChanges(id) {
      const input = document.getElementById(id);
      const value = input.value;
      const p = document.createElement("p");
      p.id = id;
      p.textContent = value;
      input.replaceWith(p);
  }
});
