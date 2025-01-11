function toggleMenu() {
    const navLinks = document.querySelector('.nav__links');
    navLinks.classList.toggle('active');
  }

  // Të dhënat e profileve
  const profiles = [
    {
      name: "Lindrit Krasniqi",
      role: "Front-end Developer",
      review: "Review 1 content",
      image: "assets/member.jpg",
    },
    {
      name: "Yll Mustafa",
      role: "Back-end Developer",
      review: "Review 2 content",
      image: "assets/member2.jpg",
    },
  ];

  let currentIndex = 0;

  // Funksioni për të kaluar te profili i mëparshëm
  function previous() {
    currentIndex = (currentIndex - 1 + profiles.length) % profiles.length;
    updateProfile();
  }

  // Funksioni për të kaluar te profili i ardhshëm
  function next() {
    currentIndex = (currentIndex + 1) % profiles.length;
    updateProfile();
  }

  // Funksioni për të përditësuar profilin
  function updateProfile() {
    const profile = profiles[currentIndex];
    document.getElementById("name").textContent = profile.name;
    document.getElementById("role").textContent = profile.role;
    document.getElementById("review").textContent = profile.review;
    document.getElementById("profile-pic").src = profile.image;
  }