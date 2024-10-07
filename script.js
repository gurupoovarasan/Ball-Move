var xposition = [];
        var yposition = [];
        var xvelocity = [];
        var yvelocity = [];
        var ball = [];

        function create() {
            var div = document.createElement('div');
            let color = randomColor();
            let x = randomx();
            let y = randomy();
            let vx = randomVelocity();
            let vy = randomVelocity();
	
            xposition.push(x);
            yposition.push(y);
            xvelocity.push(vx);
            yvelocity.push(vy);

            div.style.zIndex = '1';
            div.style.position = 'absolute';
            div.style.left = x + 'px';
            div.style.top = y + 'px';
            div.style.height = '50px';
            div.style.width = '50px';
            div.style.background = color;
            div.style.borderRadius = '50px';

            document.body.appendChild(div);
            return div;
        }

        function randomColor() {
            let palet = ["green", "red", "yellow", "brown", "blue", "orange", "pink"];
            let color = palet[Math.floor(Math.random() * palet.length)];
            return color;
        }

        function randomx() {
            return Math.random() * 600; 
        }

        function randomy() {
            return Math.random() * 600;
        }

        function randomVelocity() {
            return (Math.random() - 0.5) * 10; 
        }

      
        for (let i = 0; i < 25; i++) {
            ball.push(create());
        }

        function moveBalls() {
            for (let i = 0; i < ball.length; i++) {
                
                xposition[i] += xvelocity[i];
                yposition[i] += yvelocity[i];

                
                if (xposition[i] + 50 > 600|| xposition[i] < 0) {
                    xvelocity[i] = -xvelocity[i];
                }
                if (yposition[i] + 50 > 600 || yposition[i] < 0) {
                    yvelocity[i] = -yvelocity[i];
                }

               
                ball[i].style.left = xposition[i] + 'px';
                ball[i].style.top = yposition[i] + 'px';
            }
        }
        setInterval(moveBalls,80)
