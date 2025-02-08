export function formatTime(reamingTime) {

    let minutes = Math.floor(reamingTime / (1000 * 60));
    let seconds = Math.floor((reamingTime % (1000 * 60) / 1000))

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
