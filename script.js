let currentPage = 1;
const totalPages = 5;

// Khởi tạo trang web
document.addEventListener('DOMContentLoaded', function() {
    // Thêm hiệu ứng âm thanh (nếu có)
    createSoundEffects();
    
    // Khởi tạo animation cho trang đầu tiên
    initializeFirstPage();
    
    // Thêm hiệu ứng hover cho các nút
    addButtonEffects();
    
    // Thêm hiệu ứng click cho navigation dots
    addNavigationEffects();
});

// Chuyển đến trang tiếp theo
function nextPage() {
    if (currentPage < totalPages) {
        // Ẩn trang hiện tại
        const currentPageElement = document.getElementById(`page${currentPage}`);
        currentPageElement.classList.remove('active');
        
        // Cập nhật dot navigation
        updateNavigationDots(currentPage, false);
        
        // Chuyển đến trang tiếp theo
        currentPage++;
        
        // Hiển thị trang mới
        setTimeout(() => {
            const nextPageElement = document.getElementById(`page${currentPage}`);
            nextPageElement.classList.add('active');
            
            // Cập nhật dot navigation
            updateNavigationDots(currentPage, true);
            
            // Thêm hiệu ứng đặc biệt cho từng trang
            addPageSpecificEffects(currentPage);
        }, 100);
    }
}

// Chuyển đến trang cụ thể
function goToPage(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= totalPages && pageNumber !== currentPage) {
        // Ẩn trang hiện tại
        const currentPageElement = document.getElementById(`page${currentPage}`);
        currentPageElement.classList.remove('active');
        
        // Cập nhật dot navigation
        updateNavigationDots(currentPage, false);
        
        // Cập nhật trang hiện tại
        currentPage = pageNumber;
        
        // Hiển thị trang mới
        setTimeout(() => {
            const targetPageElement = document.getElementById(`page${currentPage}`);
            targetPageElement.classList.add('active');
            
            // Cập nhật dot navigation
            updateNavigationDots(currentPage, true);
            
            // Thêm hiệu ứng đặc biệt cho từng trang
            addPageSpecificEffects(currentPage);
        }, 100);
    }
}

// Khởi động lại từ đầu
function restart() {
    // Ẩn trang hiện tại
    const currentPageElement = document.getElementById(`page${currentPage}`);
    currentPageElement.classList.remove('active');
    
    // Cập nhật dot navigation
    updateNavigationDots(currentPage, false);
    
    // Quay về trang đầu tiên
    currentPage = 1;
    
    // Hiển thị trang đầu tiên
    setTimeout(() => {
        const firstPageElement = document.getElementById('page1');
        firstPageElement.classList.add('active');
        
        // Cập nhật dot navigation
        updateNavigationDots(currentPage, true);
        
        // Thêm hiệu ứng đặc biệt cho trang đầu tiên
        addPageSpecificEffects(currentPage);
    }, 100);
}

// Cập nhật navigation dots
function updateNavigationDots(pageNumber, isActive) {
    const dots = document.querySelectorAll('.dot');
    if (dots[pageNumber - 1]) {
        if (isActive) {
            dots[pageNumber - 1].classList.add('active');
        } else {
            dots[pageNumber - 1].classList.remove('active');
        }
    }
}

// Thêm hiệu ứng đặc biệt cho từng trang
function addPageSpecificEffects(pageNumber) {
    switch(pageNumber) {
        case 1:
            // Hiệu ứng trang chào mừng
            createFloatingHearts();
            addImageHoverEffect(pageNumber);
            break;
        case 2:
            // Hiệu ứng trang chúc xinh đẹp
            createSparkleBurst();
            addImageHoverEffect(pageNumber);
            break;
        case 3:
            // Hiệu ứng trang chúc hạnh phúc
            createButterflyDance();
            addImageHoverEffect(pageNumber);
            break;
        case 4:
            // Hiệu ứng trang chúc thành công
            createStarShower();
            addImageHoverEffect(pageNumber);
            break;
        case 5:
            // Hiệu ứng trang cuối
            createFinalCelebration();
            addImageHoverEffect(pageNumber);
            break;
    }
}

// Thêm hiệu ứng hover cho hình ảnh
function addImageHoverEffect(pageNumber) {
    const imageContainer = document.querySelector(`#page${pageNumber} .image-container`);
    if (imageContainer) {
        imageContainer.addEventListener('mouseenter', function() {
            this.style.transform = 'translate(-50%, -50%) scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        imageContainer.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    }
}

// Khởi tạo trang đầu tiên
function initializeFirstPage() {
    // Tạo hiệu ứng tim bay lên
    createFloatingHearts();
    
    // Thêm hiệu ứng hover cho nút
    const nextBtn = document.querySelector('.next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        nextBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
}

// Thêm hiệu ứng cho các nút
function addButtonEffects() {
    const buttons = document.querySelectorAll('.next-btn, .restart-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Hiệu ứng click
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// Thêm hiệu ứng cho navigation dots
function addNavigationEffects() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            // Hiệu ứng click
            this.style.transform = 'scale(1.3)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
}

// Tạo hiệu ứng tim bay lên
function createFloatingHearts() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createFloatingHeart();
        }, i * 200);
    }
}

// Tạo một trái tim bay lên
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.fontSize = '2rem';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.bottom = '-50px';
    heart.style.zIndex = '1000';
    heart.style.pointerEvents = 'none';
    heart.style.animation = 'floatUp 4s ease-out forwards';
    
    document.body.appendChild(heart);
    
    // Xóa tim sau khi animation kết thúc
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 4000);
}

// Tạo hiệu ứng sparkle burst
function createSparkleBurst() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createSparkle();
        }, i * 100);
    }
}

// Tạo một sparkle
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.fontSize = '1.5rem';
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    sparkle.style.zIndex = '1000';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.animation = 'twinkle 2s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    // Xóa sparkle sau khi animation kết thúc
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 2000);
}

// Tạo hiệu ứng bướm bay
function createButterflyDance() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            createButterfly();
        }, i * 300);
    }
}

// Tạo một con bướm
function createButterfly() {
    const butterfly = document.createElement('div');
    butterfly.innerHTML = '🦋';
    butterfly.style.position = 'fixed';
    butterfly.style.fontSize = '2rem';
    butterfly.style.left = Math.random() * window.innerWidth + 'px';
    butterfly.style.top = Math.random() * window.innerHeight + 'px';
    butterfly.style.zIndex = '1000';
    butterfly.style.pointerEvents = 'none';
    butterfly.style.animation = 'flutter 3s ease-in-out forwards';
    
    document.body.appendChild(butterfly);
    
    // Xóa bướm sau khi animation kết thúc
    setTimeout(() => {
        if (butterfly.parentNode) {
            butterfly.parentNode.removeChild(butterfly);
        }
    }, 3000);
}

// Tạo hiệu ứng mưa sao
function createStarShower() {
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createStar();
        }, i * 150);
    }
}

// Tạo một ngôi sao
function createStar() {
    const star = document.createElement('div');
    star.innerHTML = '⭐';
    star.style.position = 'fixed';
    star.style.fontSize = '1.5rem';
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.top = '-50px';
    star.style.zIndex = '1000';
    star.style.pointerEvents = 'none';
    star.style.animation = 'rain 3s linear forwards';
    
    document.body.appendChild(star);
    
    // Xóa sao sau khi animation kết thúc
    setTimeout(() => {
        if (star.parentNode) {
            star.parentNode.removeChild(star);
        }
    }, 3000);
}

// Tạo hiệu ứng chúc mừng cuối
function createFinalCelebration() {
    // Tạo nhiều hiệu ứng cùng lúc
    createFloatingHearts();
    createSparkleBurst();
    createStarShower();
    
    // Thêm hiệu ứng confetti
    createConfetti();
}

// Tạo hiệu ứng confetti
function createConfetti() {
    const colors = ['#ff6b9d', '#ff8fab', '#ffb3d1', '#ffc1cc'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createConfettiPiece(colors[Math.floor(Math.random() * colors.length)]);
        }, i * 50);
    }
}

// Tạo một mảnh confetti
function createConfettiPiece(color) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = color;
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-10px';
    confetti.style.zIndex = '1000';
    confetti.style.pointerEvents = 'none';
    confetti.style.animation = 'rain 2s linear forwards';
    
    document.body.appendChild(confetti);
    
    // Xóa confetti sau khi animation kết thúc
    setTimeout(() => {
        if (confetti.parentNode) {
            confetti.parentNode.removeChild(confetti);
        }
    }, 2000);
}

// Tạo hiệu ứng âm thanh (placeholder)
function createSoundEffects() {
    // Có thể thêm âm thanh ở đây nếu cần
    console.log('Sound effects initialized');
}

// Thêm hiệu ứng hover cho các element
document.addEventListener('DOMContentLoaded', function() {
    // Hiệu ứng hover cho title
    const titles = document.querySelectorAll('.title, .wish-title, .final-title');
    titles.forEach(title => {
        title.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        title.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Hiệu ứng click cho toàn bộ trang
    document.addEventListener('click', function(e) {
        if (e.target.tagName !== 'BUTTON' && e.target.className !== 'dot') {
            createClickEffect(e.clientX, e.clientY);
        }
    });
});

// Tạo hiệu ứng click
function createClickEffect(x, y) {
    const effect = document.createElement('div');
    effect.style.position = 'fixed';
    effect.style.left = x + 'px';
    effect.style.top = y + 'px';
    effect.style.width = '20px';
    effect.style.height = '20px';
    effect.style.borderRadius = '50%';
    effect.style.background = 'radial-gradient(circle, #ff6b9d, transparent)';
    effect.style.pointerEvents = 'none';
    effect.style.zIndex = '1000';
    effect.style.animation = 'clickEffect 0.6s ease-out forwards';
    
    document.body.appendChild(effect);
    
    // Xóa effect sau khi animation kết thúc
    setTimeout(() => {
        if (effect.parentNode) {
            effect.parentNode.removeChild(effect);
        }
    }, 600);
}

// Thêm CSS animation cho click effect
const style = document.createElement('style');
style.textContent = `
    @keyframes clickEffect {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(3);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Thêm hiệu ứng keyboard
document.addEventListener('keydown', function(e) {
    switch(e.key) {
        case 'ArrowRight':
        case ' ':
            e.preventDefault();
            if (currentPage < totalPages) {
                nextPage();
            }
            break;
        case 'ArrowLeft':
            e.preventDefault();
            if (currentPage > 1) {
                goToPage(currentPage - 1);
            }
            break;
        case 'Home':
            e.preventDefault();
            goToPage(1);
            break;
        case 'End':
            e.preventDefault();
            goToPage(totalPages);
            break;
    }
});

// Thêm hiệu ứng touch cho mobile
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', function(e) {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    
    // Swipe right để quay lại trang trước
    if (deltaX > 50 && Math.abs(deltaY) < 100) {
        if (currentPage > 1) {
            goToPage(currentPage - 1);
        }
    }
    
    // Swipe left để chuyển trang tiếp theo
    if (deltaX < -50 && Math.abs(deltaY) < 100) {
        if (currentPage < totalPages) {
            nextPage();
        }
    }
});

// Auto-play (tùy chọn)
let autoPlayInterval;

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        if (currentPage < totalPages) {
            nextPage();
        } else {
            stopAutoPlay();
        }
    }, 5000); // 5 giây mỗi trang
}

function stopAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
    }
}

// Tắt auto-play - chỉ chuyển trang khi người dùng bấm nút
// let userInteracted = false;
// document.addEventListener('click', () => userInteracted = true);
// document.addEventListener('keydown', () => userInteracted = true);
// document.addEventListener('touchstart', () => userInteracted = true);

// setTimeout(() => {
//     if (!userInteracted) {
//         startAutoPlay();
//     }
// }, 3000);
