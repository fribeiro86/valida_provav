        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        navy: {
                            900: '#0a192f', // Fundo Profundo
                            800: '#112240', // Cartões
                            700: '#233554', // Bordas
                        },
                        gold: {
                            500: '#fbbf24', // Destaque Premium
                            600: '#d97706',
                        },
                        action: {
                            500: '#00e676', // Verde "WhatsApp/Sucesso"
                            600: '#00c853',
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        serif: ['Merriweather', 'serif'],
                    },
                    boxShadow: {
                        'glow': '0 0 20px rgba(0, 230, 118, 0.3)',
                        'paper': '0 10px 30px -5px rgba(0, 0, 0, 0.3)', // Sombra para o PDF
                    }
                }
            }
        }

         
        // Função para alternar tela cheia
        function toggleFullscreen() {
            const elem = document.documentElement;
            
            if (!document.fullscreenElement) {
                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                } else if (elem.webkitRequestFullscreen) {
                    elem.webkitRequestFullscreen();
                } else if (elem.msRequestFullscreen) {
                    elem.msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
        }
        
        // Função para alternar menu mobile
        function toggleMenu() {
            const menu = document.getElementById('mobileMenu');
            const overlay = document.getElementById('overlay');
            
            menu.classList.toggle('active');
            overlay.classList.toggle('active');
            
            // Previne scroll do body quando menu está aberto
            document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
        }
        
        // Detecta se estamos em modo tela cheia para atualizar o botão
        document.addEventListener('fullscreenchange', updateButton);
        document.addEventListener('webkitfullscreenchange', updateButton);
        document.addEventListener('msfullscreenchange', updateButton);
        
        function updateButton() {
            const button = document.querySelector('.fullscreen-toggle');
            if (document.fullscreenElement) {
                button.textContent = '⛶';
            } else {
                button.textContent = '⛶';
            }
        }
        
        // Fecha o menu ao redimensionar para desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768) {
                const menu = document.getElementById('mobileMenu');
                const overlay = document.getElementById('overlay');
                
                menu.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Adiciona suporte a gestos para fechar o menu (swipe)
        let touchStartX = 0;
        let touchEndX = 0;
        
        document.getElementById('mobileMenu').addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        document.getElementById('mobileMenu').addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        function handleSwipe() {
            // Se o usuário deslizar para a esquerda, fecha o menu
            if (touchStartX - touchEndX > 50) {
                toggleMenu();
            }
        }
    

