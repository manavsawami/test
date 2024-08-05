document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('votingForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const selectedOption = document.querySelector('input[name="vote"]:checked');

        if (selectedOption) {
            const voteValue = selectedOption.value;
            resultDiv.innerText = `Thank you for voting! You voted for ${voteValue}.`;
            // Here you can add code to send the vote to the server for processing
        } else {
            resultDiv.innerText = 'Please select an option before submitting your vote.';
        }
    });
});