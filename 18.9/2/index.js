function progress(time) {
    const progressBar = document.getElementById('progress-bar');
    const timer = document.getElementById('timer');
    
    let currentTime = 0;
    const maxWidth = 500;
    const startTime = performance.now();

    function animateProgress() {
        const elapsedTime = (performance.now() - startTime) / 1000; 
        const progressWidth = (elapsedTime / time) * maxWidth; 


        progressBar.style.width = `${Math.min(progressWidth, maxWidth)}px`;

        timer.textContent = Math.floor(elapsedTime);

        if (elapsedTime < time) {
            requestAnimationFrame(animateProgress);
        } else {
            progressBar.style.width = `${maxWidth}px`;
            timer.textContent = time; 
        }
    }

    animateProgress();
}

window.onload = function() {
    progress(10); 
};
