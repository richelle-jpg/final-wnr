document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button'),
          searchClose = document.getElementById('search-close'),
          searchContent = document.getElementById('search-content');

    /* Menu show */
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            searchContent.classList.add('show-search');
        });
    }

    /* Menu hidden */
    if (searchClose) {
        searchClose.addEventListener('click', () => {
            searchContent.classList.remove('show-search');
        });
    }
});





const shadowHeader = () => {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) {
        header.classList.add('shadow-header');
    } else {
        header.classList.remove('shadow-header');
    }
};

window.addEventListener('scroll', shadowHeader);


function scrollHeader() {
    const header = document.getElementById('header');
    
  
    if (window.scrollY >= 50) {
        header.classList.add('shadow-header');
    } else {
        header.classList.remove('shadow-header');
    }
}

window.addEventListener('scroll', scrollHeader);


let swiperHome = new Swiper('.home_swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
});



document.addEventListener('DOMContentLoaded', () => {
    let swiperLibrary = new Swiper('.library-swiper', {
        loop: true,
        spaceBetween: 16,
        grabCursor: true,
        slidesPerView: 'auto',
        centeredSlides: 'auto',

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },

        breakpoints: {
            1150: {
                slidesPerView: 4,
                centeredSlides: false,
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    
    const loginContent = document.getElementById('login-content');
    const signupContent = document.getElementById('signup-content');
    const forgotContent = document.getElementById('forgot-content');

    const loginButton = document.getElementById('login-button'); 
    const signupButton = document.getElementById('open-signup');
    const forgotButton = document.getElementById('open-forgot');
    const loginButtonFromSignup = document.getElementById('open-login-from-signup');
    const loginButtonFromForgot = document.getElementById('open-login-from-forgot');
    
   
    const loginClose = document.getElementById('login-close');
    const signupClose = document.getElementById('signup-close');
    const forgotClose = document.getElementById('forgot-close');

    
    function showForm(form) {
        form.classList.add('show');
    }

   
    function hideForm(form) {
        form.classList.remove('show');
    }

    loginButton.addEventListener('click', () => {
        showForm(loginContent);
        hideForm(signupContent);
        hideForm(forgotContent);
    });

    
    loginClose.addEventListener('click', () => {
        hideForm(loginContent);
    });

    
const submitBtn = document.querySelector('.signup_button');


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

   
   
    hideForm(signupContent);  
    showForm(loginContent);  
});




    signupButton.addEventListener('click', () => {
        showForm(signupContent);
        hideForm(loginContent);
        hideForm(forgotContent);
    });

   
    signupClose.addEventListener('click', () => {
        hideForm(signupContent);
    });

   
    forgotButton.addEventListener('click', () => {
        showForm(forgotContent);
        hideForm(loginContent);
        hideForm(signupContent);
    });

   
    forgotClose.addEventListener('click', () => {
        hideForm(forgotContent);
    });


    loginButtonFromSignup.addEventListener('click', () => {
        hideForm(signupContent);
        showForm(loginContent);
    });

  
    loginButtonFromForgot.addEventListener('click', () => {
        hideForm(forgotContent);
        showForm(loginContent);
    });
});


closeButton.addEventListener('click', () => {
   
    window.location.href = 'index.html'; 
});



document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); 
        const fullText = this.previousElementSibling; 
        const isVisible = fullText.style.display === 'block'; 
        if (isVisible) {
            fullText.style.display = 'none';
            this.innerText = 'Read More'; 
        } else {
            fullText.style.display = 'block'; 
            this.innerText = 'Read Less'; 
        }
    });
});


let posts = [];

// Load posts from localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
    loadPosts();
});

function loadPosts() {
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';

    posts = JSON.parse(localStorage.getItem('posts')) || [];

    posts.forEach((post, index) => {
        const postItem = document.createElement('div');
        postItem.classList.add('post-item');
        postItem.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            ${post.image ? `<img src="${post.image}" alt="Post Image" class="post-image">` : ''}
            <div class="post-actions">
                <button onclick="editPost(${index})" class="btn-edit">Edit</button>
                <button onclick="deletePost(${index})" class="btn-delete">Delete</button>
            </div>
        `;
        postList.appendChild(postItem);
    });
}

function deletePost(index) {
    posts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(posts));
    loadPosts();
}

function editPost(index) {
    const post = posts[index];
    localStorage.setItem('editIndex', index);
    localStorage.setItem('editPost', JSON.stringify(post));
    window.location.href = 'addpost.html';
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('close-button').addEventListener('click', function() {
        window.location.href = 'index.html'; 
    });
});


    const closeButton = document.getElementById('forgot-close');
    const dashboardContainer = document.querySelector('.container-dashboard');

    closeButton.addEventListener('click', () => {
        dashboardContainer.style.display = 'none'; 
    });


window.addEventListener('scroll', function() {
    const scrollUpButton = document.getElementById('scroll-up-button');
    if (window.scrollY > 300) { 
        scrollUpButton.style.bottom = '1rem'; 
    } else {
        scrollUpButton.style.bottom = '-50%'; 
    }
});


scrollUpButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


const themeButton = document.getElementById('theme-button');
    
    // Check for saved user preference in localStorage
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-theme'); // Apply dark theme
    }

    // Toggle theme on button click
    themeButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme'); // Toggle dark theme

      // Save user preference in localStorage
      if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.removeItem('theme'); // Remove preference
      }
    });