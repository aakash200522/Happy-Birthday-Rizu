 // Sweet messages for notifications
        const sweetMessages = [
            "Just wanted to remind you how special you are to me! 💕",
            "Thinking of you and smiling. Have an amazing day! 😊",
            "You're the most beautiful person inside and out. 🌹",
            "Every hour with you is a blessing. Happy Birthday my love! 🎂",
            "Sending you a virtual hug and kiss! 🤗💋",
            "You make my world brighter just by being in it. ✨",
            "I'm so grateful to have you in my life. ❤️",
            "Can't wait to celebrate with you later! 🥳",
            "You deserve all the happiness in the world today. 🌍",
            "My heart beats for you every single moment. 💓",
            "You're not just my girlfriend, you're my everything. 💫",
            "Hope your birthday is as magical as you are! 🪄",
            "Sending love and positive vibes your way! ✌️"
        ];

        // Messages for the girlfriend
        const messages = [
            "Happy Birthday to the most beautiful girl in the world! You make every day brighter.",
            "On your special day, I want you to know how much you mean to me. You're my everything!",
            "Wishing you a day filled with love, laughter, and all the happiness you deserve. Happy Birthday!",
            "To my amazing girlfriend: May your birthday be as wonderful and special as you are to me!",
            "Every moment with you is a treasure. Today, I celebrate you and the joy you bring to my life!",
            "Happy 17th Birthday! You're not just my girlfriend, you're my best friend and my soulmate.",
            "Seeing you smile is my favorite thing in the world. I hope your birthday brings you endless smiles!",
            "You're the reason my heart beats faster. Wishing you the happiest of birthdays, my love!",
            "On this special day, I want to remind you how incredibly special you are to me. Happy Birthday!",
            "To the girl who stole my heart: May your birthday be filled with as much love as you've given me.",
            "You're more beautiful than the most perfect sunset. Happy Birthday to my dream girl!",
            "My world is better with you in it. Wishing you the most magical birthday celebration!"
        ];

        // Notification system
        const notificationContainer = document.getElementById('notificationContainer');
        const notificationToggle = document.getElementById('notificationToggle');
        const testNotificationBtn = document.getElementById('testNotificationBtn');
        
        let notificationInterval;
        let notificationsEnabled = true;

        // Create a notification
        function createNotification(message) {
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.innerHTML = `
                <button class="notification-close">&times;</button>
                <div class="notification-title">
                    <i class="fas fa-heart"></i>
                    <span>Birthday Love Note</span>
                </div>
                <div class="notification-content">${message}</div>
                <div class="notification-progress">
                    <div class="notification-progress-bar"></div>
                </div>
            `;
            
            notificationContainer.appendChild(notification);
            
            // Trigger animation
            setTimeout(() => {
                notification.classList.add('show');
            }, 10);
            
            // Remove notification after 5 seconds
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    notification.remove();
                }, 500);
            }, 5000);
            
            // Close button functionality
            const closeBtn = notification.querySelector('.notification-close');
            closeBtn.addEventListener('click', () => {
                notification.classList.remove('show');
                setTimeout(() => {
                    notification.remove();
                }, 500);
            });
            
            // Create falling hearts effect for notification
            createFallingHearts();
        }

        // Show a random sweet message notification
        function showSweetNotification() {
            if (!notificationsEnabled) return;
            
            const randomIndex = Math.floor(Math.random() * sweetMessages.length);
            createNotification(sweetMessages[randomIndex]);
        }

        // Toggle notifications
        notificationToggle.addEventListener('change', (e) => {
            notificationsEnabled = e.target.checked;
            
            if (notificationsEnabled) {
                // Start showing notifications immediately and then every hour
                showSweetNotification();
                startNotificationInterval();
            } else {
                clearInterval(notificationInterval);
            }
        });

        // Test notification button
        testNotificationBtn.addEventListener('click', () => {
            showSweetNotification();
        });

        // Start notification interval
        function startNotificationInterval() {
            clearInterval(notificationInterval);
            notificationInterval = setInterval(showSweetNotification, 60 * 60 * 1000); // Every hour
        }

        // Start notifications
        startNotificationInterval();
        setTimeout(showSweetNotification, 3000); // Show first notification after 3 seconds

        // Countdown to birthday
        function updateCountdown() {
            const now = new Date();
            const currentYear = now.getFullYear();
            let birthday = new Date(currentYear, 6, 4); // July is month 6 (0-indexed)
            
            // If birthday has passed this year, set to next year
            if (now > birthday) {
                birthday.setFullYear(currentYear + 1);
            }
            
            const diff = birthday - now;
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            document.getElementById('days').innerText = days.toString().padStart(2, '0');
            document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
            document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
            
            // If it's the birthday
            if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                document.querySelector('.countdown-title').innerText = "HAPPY BIRTHDAY!";
                createConfetti();
            }
        }
        
        // Update countdown every second
        setInterval(updateCountdown, 1000);
        updateCountdown(); // Initial call
        
        const messageElement = document.getElementById('message');
        const newMessageBtn = document.getElementById('newMessageBtn');
        
        function showRandomMessage() {
            const randomIndex = Math.floor(Math.random() * messages.length);
            messageElement.style.opacity = 0;
            
            setTimeout(() => {
                messageElement.textContent = messages[randomIndex];
                messageElement.style.opacity = 1;
                createMiniHearts();
            }, 500);
        }
        
        newMessageBtn.addEventListener('click', showRandomMessage);
        
        // Show initial message
        showRandomMessage();
        
        // Create confetti effect
        function createConfetti() {
            const colors = ['#ff6b9d', '#ff8eab', '#ff758c', '#ff7eb3', '#ff9a9e'];
            
            for (let i = 0; i < 150; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.width = Math.random() * 10 + 8 + 'px';
                confetti.style.height = Math.random() * 10 + 8 + 'px';
                confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
                
                document.body.appendChild(confetti);
                
                // Remove confetti after animation completes
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }
        }
        
        
        // Create mini hearts around message container
        function createMiniHearts() {
            const container = document.querySelector('.messages-container');
            
            for (let i = 0; i < 15; i++) {
                const heart = document.createElement('div');
                heart.innerHTML = '💕';
                heart.style.position = 'absolute';
                heart.style.fontSize = Math.random() * 25 + 15 + 'px';
                heart.style.color = '#ff6b9d';
                heart.style.opacity = Math.random() * 0.5 + 0.3;
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = Math.random() * 100 + '%';
                heart.style.animation = `float ${Math.random() * 4 + 2}s ease-out forwards`;
                heart.style.zIndex = '5';
                
                container.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 3000);
            }
        }
        
        // Create initial confetti
        setTimeout(createConfetti, 1000);
        
        // Create falling hearts and wands
        function createFallingHearts() {
            const hearts = ['💕', '🪄','🖤','🤍'];
            
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.className = 'falling-heart';
                    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
                    heart.style.left = Math.random() * 100 + 'vw';
                    heart.style.fontSize = (Math.random() * 25 + 15) + 'px';
                    heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
                    heart.style.opacity = Math.random() * 0.5 + 0.4;
                    
                    document.body.appendChild(heart);
                    
                    // Remove heart after animation completes
                    setTimeout(() => {
                        heart.remove();
                    }, 12000);
                }, i * 300);
            }
        }
        
        // Create falling hearts initially
        createFallingHearts();
        
        // Create more falling hearts every 15 seconds
        setInterval(createFallingHearts, 15000);
        
        // Create floating hearts in header
        function createFloatingHearts() {
            const header = document.querySelector('header');
            const hearts = ['💕', '💖', '💘', '🪄'];
            
            for (let i = 0; i < 15; i++) {
                const heart = document.createElement('div');
                heart.className = 'floating-heart';
                heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.fontSize = Math.random() * 25 + 15 + 'px';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = Math.random() * 100 + '%';
                heart.style.animationDuration = Math.random() * 8 + 4 + 's';
                heart.style.animationDelay = Math.random() * 3 + 's';
                
                header.appendChild(heart);
            }
        }
        
        createFloatingHearts();
    
         // Music Player
        const musicPlayer = document.getElementById('music-player');
        const playBtn = document.getElementById('play-btn');
        const playIcon = playBtn.querySelector('i');
        const musicTitle = document.getElementById('music-title');
        
        // Create audio element
        const audio = new Audio();
        // Using a placeholder for the audio - in a real implementation, you would use your own MP3 file
        audio.src = "IMG/Mugai Mazhai.mp3";
        
        playBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playIcon.classList.remove('fa-play');
                playIcon.classList.add('fa-pause');
                musicPlayer.classList.add('expanded');
            } else {
                audio.pause();
                playIcon.classList.remove('fa-pause');
                playIcon.classList.add('fa-play');
            }
        });
        
