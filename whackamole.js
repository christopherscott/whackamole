var whackamole = whackamole || (function(window, undefined) {
	
	var popping = false,
		popTimer,
		hidingInterval = 2000,
		poppingInterval = 2000,
		theMole,
		gameMode = "main",
		score = 0,
		misses,
		startTime,
		currentTime,
		clicked,
		pops = 0,
		gameTimeout,
		isDead = false;
		
	// utility function to get computed style
	function getStyle(el, cssprop){
		if (el.currentStyle) {
			return el.currentStyle[cssprop];
		} else if (document.defaultView && document.defaultView.getComputedStyle) {
			return document.defaultView.getComputedStyle(el, "")[cssprop];
		} else {
			return el.style[cssprop];
		}
	}
	
	// constructor for "Mole" class
	function Mole(elementId) {
		
		// the mole
		this.el = document.createElement("div");
		this.el.className = "pesky-mole";
		this.el.onclick = function() {
			var currentTime = (new Date).getTime();
			if (!clicked) {
				score += Math.floor( ( ( poppingInterval - (currentTime - startTime) ) / poppingInterval) * 100 );
				clicked = true;
				theMole.sb.update();
				isDead = true;
				window.clearTimeout(gameTimeout);
				loop();
			} else {
				return;
			}
		};
		
		// score board
		this.sb = document.createElement("h2");
		this.sb.className = "wam-scoreboard";
		this.sb.update = function() {
			this.innerHTML = "points: " + score + "<br />pops: " + pops;
		}
		
		
		// the game stage
		this.stage = document.getElementById(elementId);
		this.stage.style.position = "relative";
		this.stage.appendChild(this.sb);
		this.stage.appendChild(this.el);
		
	}
	
	Mole.prototype.togglePop = function() {
		this.el.style.display = (popping) ? "block" : "none";
	};
	
	Mole.prototype.changeLocation = function() {
		// get random location within the boundaries
		this.el.style.top = Math.floor(Math.random() * (parseInt(getStyle(this.stage, "height")) - parseInt(getStyle(this.el, "height")) ) ) + "px";
		this.el.style.left = Math.floor(Math.random() * (parseInt(getStyle(this.stage, "width")) - parseInt(getStyle(this.el, "width")) ) ) + "px";
	};
	
	Mole.prototype.kill = function() {
		this.el.className = "pesky-mole-dead";
	}
	
	Mole.prototype.live = function() {
		this.el.className = "pesky-mole";
	}
	
	
	// recursive setTimeout loop
	function loop() {
		if (isDead) {
			theMole.kill();
			isDead = false;
			gameTimeout = setTimeout(loop, 1000);
		} else if (pops < 10 && !isDead) {
			theMole.live();
			theMole.togglePop();
			startTime = (new Date).getTime();
			if (popping) {
				theMole.changeLocation();
				clicked = false;
				pops++;
			}
			popping = (popping) ? false : true;
			gameTimeout = setTimeout(loop, (popping) ? hidingInterval : poppingInterval);
		} else {
			theMole.sb.innerHTML = "Game Over!<br /> Final Score: " + score;
		}
		
	}
	
	return {
		
		setup: function(element) {
			theMole = new Mole(element);
			this.start();
		},
		start: function(elementId) {
			theMole.sb.update();
			loop();
		}
		
	};
	
})(window);