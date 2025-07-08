let currentStage = 1;
const totalStages = 4;

function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const progressPercent = ((currentStage - 1) / (totalStages - 1)) * 100;
    progressFill.style.width = progressPercent + '%';

    for (let i = 1; i <= totalStages; i++) {
        const icon = document.getElementById(`icon${i}`);
        const label = document.getElementById(`label${i}`);

        icon.classList.remove('active', 'completed', 'pulse', 'bounce');
        label.classList.remove('active', 'completed');

        if (i < currentStage) {
            icon.classList.add('completed');
            label.classList.add('completed');
        } else if (i === currentStage) {
            icon.classList.add('active', 'pulse');
            label.classList.add('active');

            if (currentStage > 1) {
                setTimeout(() => {
                    icon.classList.add('bounce');
                }, 100);
            }
        }
    }
}
function autoDemo() {
    const interval = setInterval(() => {
        if (currentStage < totalStages) {
            currentStage++;
            updateProgress();
        } else {
            clearInterval(interval);
            setTimeout(() => {
                currentStage = 1;
                updateProgress();
                autoDemo();
            }, 3000);
        }
    }, 2000);
}

setTimeout(autoDemo, 2000);
updateProgress();
